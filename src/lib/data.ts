/**
 * Data Access Layer — CMS-ready content fetchers.
 *
 * Current implementation: reads from local JSON files via static import.
 * Future CMS migration: update these functions to fetch() from your CMS.
 * Components remain untouched.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type {
    HomePageData,
    GlobalData,
    ServicesPageData,
    BookingPageData,
    AboutPageData,
    ContactPageData,
    FAQPageData,
    LegalPageData,
    RoutePageData,
    BlogPost,
    BlogPostFrontmatter,
} from '@/types/content';

import homeContent from '@/content/en/home.json';
import globalContent from '@/content/en/global.json';
import servicesContent from '@/content/en/services.json';
import bookingContent from '@/content/en/booking.json';
import aboutContent from '@/content/en/about.json';
import contactContent from '@/content/en/contact.json';
import faqContent from '@/content/en/faq.json';
import privacyContent from '@/content/en/privacy-policy.json';
import termsContent from '@/content/en/terms-of-service.json';

/**
 * Returns all content needed to render the homepage.
 * Sections: hero, features, testimonials, cta.
 */
export function getHomePageData(): HomePageData {
    return homeContent as HomePageData;
}

/**
 * Returns shared/layout-level content.
 * Sections: nav, footer, whatsapp.
 */
export function getGlobalData(): GlobalData {
    return globalContent as GlobalData;
}

/**
 * Returns content for the Services page.
 */
export function getServicesPageData(): ServicesPageData {
    return servicesContent as ServicesPageData;
}

/**
 * Returns content for the Booking page.
 */
export function getBookingPageData(): BookingPageData {
    return bookingContent as BookingPageData;
}

/**
 * Returns content for the About page.
 */
export function getAboutPageData(): AboutPageData {
    return aboutContent as AboutPageData;
}

/**
 * Returns content for the Contact page.
 */
export function getContactPageData(): ContactPageData {
    return contactContent as ContactPageData;
}

/**
 * Returns content for the FAQ page.
 */
export function getFAQPageData(): FAQPageData {
    return faqContent as FAQPageData;
}

/**
 * Returns content for a legal page (privacy policy or terms of service).
 */
export function getLegalPageData(slug: 'privacy-policy' | 'terms-of-service'): LegalPageData {
    const contentMap: Record<string, LegalPageData> = {
        'privacy-policy': privacyContent as LegalPageData,
        'terms-of-service': termsContent as LegalPageData,
    };
    return contentMap[slug];
}

/**
 * Returns all available route slugs by reading the routes directory.
 */
export async function getAllRouteSlugs(): Promise<string[]> {
    const routesDir = path.join(process.cwd(), 'src/content/en/routes');
    if (!fs.existsSync(routesDir)) return [];

    return fs.readdirSync(routesDir)
        .filter(file => file.endsWith('.json'))
        .map(file => file.replace('.json', ''));
}

/**
 * Returns content for a specific route page.
 */
export async function getRoutePageData(slug: string): Promise<RoutePageData | null> {
    try {
        const filePath = path.join(process.cwd(), `src/content/en/routes/${slug}.json`);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents) as RoutePageData;
    } catch {
        return null;
    }
}

/**
 * Returns all available blog slugs by reading the blog directory.
 */
export async function getAllBlogSlugs(): Promise<string[]> {
    const blogDir = path.join(process.cwd(), 'src/content/en/blog');
    if (!fs.existsSync(blogDir)) return [];

    return fs.readdirSync(blogDir)
        .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
        .map(file => file.replace(/\.mdx?$/, ''));
}

/**
 * Returns content and frontmatter for a specific blog post.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        const blogDir = path.join(process.cwd(), 'src/content/en/blog');
        let filePath = path.join(blogDir, `${slug}.mdx`);

        if (!fs.existsSync(filePath)) {
            filePath = path.join(blogDir, `${slug}.md`);
        }

        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            frontmatter: data as BlogPostFrontmatter,
            content,
        };
    } catch {
        return null;
    }
}

/**
 * Returns all blog posts, sorted by date (newest first).
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const slugs = await getAllBlogSlugs();
    const posts = await Promise.all(slugs.map(slug => getBlogPost(slug)));

    return posts
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => {
            return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
        });
}
