import React from 'react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: item.href } : {}),
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <ol className="flex items-center gap-2 text-sm text-slate-500">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <li key={item.label} className="flex items-center gap-2">
                                {index > 0 && (
                                    <span className="text-slate-400" aria-hidden="true">
                                        ›
                                    </span>
                                )}
                                {isLast || !item.href ? (
                                    <span className={isLast ? 'text-slate-900 font-medium' : ''} aria-current={isLast ? 'page' : undefined}>
                                        {item.label}
                                    </span>
                                ) : (
                                    <a href={item.href} className="hover:text-primary transition-colors">
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
