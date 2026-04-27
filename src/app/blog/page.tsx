import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/data';
import CTABanner from '@/components/CTABanner';
import { getBookingPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Blog | WheelchairTaxi Bangalore',
    description: 'Read the latest guides, tips, and news about accessible transport and wheelchair taxis in Bangalore.',
    alternates: {
        canonical: '/blog',
    },
};

export default async function BlogIndexPage() {
    const posts = await getAllBlogPosts();
    const bookingData = getBookingPageData();

    return (
        <main className="pt-24 lg:pt-32 min-h-screen flex flex-col">
            <div className="bg-brand-cyan/5 py-12 lg:py-16 text-center border-b border-brand-cyan/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl lg:text-5xl md:leading-tight font-display font-extrabold text-slate-900 mb-4">
                        Accessible Transport Blog
                    </h1>
                    <p className="text-xl text-slate-600 font-medium">
                        Guides, tips, and resources for wheelchair users in Bangalore.
                    </p>
                </div>
            </div>

            <div className="grow max-w-5xl mx-auto w-full px-4 py-12 lg:py-20">
                {posts.length === 0 ? (
                    <p className="text-center text-slate-500">No blog posts found. Check back soon!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.frontmatter.slug}
                                href={`/blog/${post.frontmatter.slug}`}
                                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300"
                            >
                                <div className="p-6 grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-4 text-sm">
                                        <span className="text-brand-teal font-semibold">
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
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                                        {post.frontmatter.title}
                                    </h2>
                                    <p className="text-slate-600 mb-6 line-clamp-3">
                                        {post.frontmatter.description}
                                    </p>
                                    <div className="mt-auto flex items-center text-brand-cyan font-medium text-sm">
                                        Read Article
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <CTABanner data={bookingData.cta} />
        </main>
    );
}
