import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getAllBlogSlugs, getBookingPageData } from '@/lib/data';
import CTABanner from '@/components/CTABanner';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) return {};

    return {
        title: `${post.frontmatter.title} | WheelchairTaxi Bangalore`,
        description: post.frontmatter.description,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            url: `https://clicknstart.com/blog/${slug}`,
            type: 'article',
            publishedTime: post.frontmatter.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.frontmatter.title,
            description: post.frontmatter.description,
        },
    };
}

const components = {
    h1: (props: any) => <h1 className="text-3xl lg:text-4xl font-bold mt-8 mb-4 text-slate-900" {...props} />,
    h2: (props: any) => <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4 text-slate-900" {...props} />,
    h3: (props: any) => <h3 className="text-xl lg:text-2xl font-bold mt-8 mb-3 text-slate-900" {...props} />,
    p: (props: any) => <p className="text-lg text-slate-700 leading-relaxed mb-6" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside text-lg text-slate-700 leading-relaxed mb-6 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside text-lg text-slate-700 leading-relaxed mb-6 space-y-2" {...props} />,
    li: (props: any) => <li className="pl-2" {...props} />,
    a: (props: any) => <a className="text-brand-teal hover:text-brand-cyan hover:underline underline-offset-4 transition-colors" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-brand-teal pl-6 italic text-slate-600 my-8 py-2 bg-slate-50 rounded-r-lg" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-slate-900" {...props} />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    const bookingData = getBookingPageData();

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.frontmatter.title,
        "description": post.frontmatter.description,
        "datePublished": post.frontmatter.date,
        "author": { "@type": "Organization", "name": "WheelchairTaxi Bangalore" },
        "publisher": { "@type": "Organization", "name": "WheelchairTaxi Bangalore" },
        "mainEntityOfPage": `https://clicknstart.com/blog/${slug}`
    };

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.frontmatter.title, href: `/blog/${slug}`, current: true },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="pt-24 lg:pt-32 min-h-screen">
                <article>
                    <div className="bg-brand-cyan/5 py-10 lg:py-16 border-b border-brand-cyan/10">
                        <div className="max-w-3xl mx-auto px-4">
                            <div className="mb-8">
                                <Breadcrumbs items={breadcrumbItems} />
                            </div>

                            <div className="flex items-center gap-3 mb-6 font-medium">
                                <span className="text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full text-sm">
                                    {post.frontmatter.category || 'Guide'}
                                </span>
                                <span className="text-slate-400">•</span>
                                <time className="text-slate-500">
                                    {new Date(post.frontmatter.date).toLocaleDateString('en-IN', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                                {post.frontmatter.readingTime && (
                                    <>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500">{post.frontmatter.readingTime} min read</span>
                                    </>
                                )}
                            </div>

                            <h1 className="text-3xl lg:text-5xl md:leading-tight font-display font-extrabold text-slate-900 mb-6">
                                {post.frontmatter.title}
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed">
                                {post.frontmatter.description}
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto px-4 py-12 lg:py-16">
                        <div className="prose prose-lg max-w-none">
                            <MDXRemote source={post.content} components={components} />
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Share this guide</h3>
                            <div className="flex gap-4">
                                <a
                                    href={`https://twitter.com/intent/tweet?url=https://clicknstart.com/blog/${slug}&text=${encodeURIComponent(post.frontmatter.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-lg font-medium hover:bg-[#1DA1F2]/20 transition-colors"
                                >
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=https://clicknstart.com/blog/${slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-[#4267B2]/10 text-[#4267B2] rounded-lg font-medium hover:bg-[#4267B2]/20 transition-colors"
                                >
                                    Facebook
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.frontmatter.title + ' https://clicknstart.com/blog/' + slug)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-lg font-medium hover:bg-[#25D366]/20 transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <CTABanner data={bookingData.cta} />
            </main>
        </>
    );
}
