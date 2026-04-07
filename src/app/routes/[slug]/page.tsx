import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRoutePageData, getAllRouteSlugs } from '@/lib/data';
import RouteDetails from '@/components/RouteDetails';
import CTABanner from '@/components/CTABanner';

export async function generateStaticParams() {
    const slugs = await getAllRouteSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = await getRoutePageData(slug);
    if (!data) return {};

    return {
        title: data.metaTitle,
        description: data.metaDescription,
        alternates: {
            canonical: `/routes/${slug}`,
        },
        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: `https://yuvancabs.com/routes/${slug}`,
            type: 'website',
            images: [
                {
                    url: '/images/hero-taxi.webp',
                    width: 1200,
                    height: 630,
                    alt: data.metaTitle,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: data.metaTitle,
            description: data.metaDescription,
            images: ['/images/hero-taxi.webp'],
        },
    };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getRoutePageData(slug);

    if (!data) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": data.metaTitle,
        "description": data.metaDescription,
        "url": `https://yuvancabs.com/routes/${slug}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "WheelchairTaxi Bangalore"
        },
        "areaServed": "Bengaluru",
        "serviceArea": {
            "@type": "Place",
            "name": data.destination
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="pt-24 lg:pt-32">
                <div className="bg-brand-cyan/5 py-12 lg:py-16 text-center border-b border-brand-cyan/10">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl lg:text-5xl md:leading-tight font-display font-extrabold text-slate-900 mb-4">
                            {data.h1}
                        </h1>
                        <p className="text-xl text-slate-600 font-medium">
                            Reliable, accessible transport with an automatic hydraulic lift.
                        </p>
                    </div>
                </div>
                <RouteDetails data={data} />
                <CTABanner data={data.cta} />
            </main>
        </>
    );
}
