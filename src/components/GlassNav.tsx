// 'use client';

// import React, { useState, useEffect } from 'react';
// import type { NavData } from '@/types/content';

// interface GlassNavProps {
//     data: NavData;
// }

// const GlassNav: React.FC<GlassNavProps> = ({ data }) => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Handle scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 20) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Prevent body scroll when mobile menu is open
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [isMobileMenuOpen]);

//     const handleMobileLinkClick = () => {
//         setIsMobileMenuOpen(false);
//     };

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//                     ? 'bg-white/85 backdrop-blur-md dark:bg-slate-900/85 border-b border-slate-200 dark:border-slate-800 shadow-sm py-0'
//                     : 'bg-transparent border-b border-transparent py-2'
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-20">
//                     {/* Logo */}
//                     <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
//                             <span className="material-symbols-outlined text-2xl">local_taxi</span>
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-display font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
//                                 {data.brand}
//                             </h1>
//                             <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
//                                 {data.tagline}
//                             </p>
//                         </div>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center gap-8">
//                         {data.navLinks.map((link) => (
//                             <a
//                                 key={link.label}
//                                 className={`text-sm font-semibold transition-colors ${isScrolled
//                                         ? 'text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary'
//                                         : 'text-slate-800 hover:text-primary'
//                                     }`}
//                                 href={link.href}
//                             >
//                                 {link.label}
//                             </a>
//                         ))}
//                     </div>

//                     {/* Desktop CTA Actions */}
//                     <div className="hidden md:flex items-center gap-4">
//                         {/* Status Indicator */}
//                         <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800">
//                             <span className="relative flex h-2.5 w-2.5">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
//                             </span>
//                             <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
//                                 {data.statusLabel}
//                             </span>
//                         </div>
//                         <a
//                             href={data.whatsappHref}
//                             className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2"
//                         >
//                             <span className="material-symbols-outlined text-lg">chat</span>
//                             <span>{data.ctaLabel}</span>
//                         </a>
//                     </div>

//                     {/* Mobile Menu Toggle */}
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-slate-900 dark:text-white p-2"
//                             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//                             aria-expanded={isMobileMenuOpen}
//                         >
//                             <span className="material-symbols-outlined text-3xl">
//                                 {isMobileMenuOpen ? 'close' : 'menu'}
//                             </span>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             <div
//                 className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0 border-t-0'
//                     }`}
//             >
//                 <div className="px-4 pt-4 pb-8 space-y-4">
//                     {data.navLinks.map((link) => (
//                         <a
//                             key={link.label}
//                             href={link.href}
//                             onClick={handleMobileLinkClick}
//                             className="block px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl"
//                         >
//                             {link.label}
//                         </a>
//                     ))}

//                     <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-4">
//                         <div className="flex items-center gap-2 px-4">
//                             <span className="relative flex h-2.5 w-2.5">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
//                             </span>
//                             <span className="text-sm font-bold text-green-700 uppercase tracking-wide">
//                                 {data.statusLabel}
//                             </span>
//                         </div>

//                         <a
//                             href={data.whatsappHref}
//                             className="bg-primary text-white w-full px-5 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2"
//                         >
//                             <span className="material-symbols-outlined">chat</span>
//                             {data.ctaLabel}
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default GlassNav;


'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NavData } from '@/types/content';

interface GlassNavProps {
    data: NavData;
}

const GlassNav: React.FC<GlassNavProps> = ({ data }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/85 backdrop-blur-md dark:bg-slate-900/85 border-b border-slate-200 dark:border-slate-800 shadow-sm py-0'
                    : 'bg-transparent border-b border-transparent py-2'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="rounded-xl"
                            priority
                        />

                        <div>
                            <h1 className="text-xl font-display font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                                {data.brand}
                            </h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                {data.tagline}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {data.navLinks.map((link) => (
                            <a
                                key={link.label}
                                className={`text-sm font-semibold transition-colors ${
                                    isScrolled
                                        ? 'text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary'
                                        : 'text-slate-800 hover:text-primary'
                                }`}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* Status */}
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                            </span>

                            <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                                {data.statusLabel}
                            </span>
                        </div>

                        <a
                            href={data.whatsappHref}
                            className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-lg">chat</span>
                            <span>{data.ctaLabel}</span>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-900 dark:text-white p-2"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0 border-t-0'
                }`}
            >
                <div className="px-4 pt-4 pb-8 space-y-4">
                    {data.navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={handleMobileLinkClick}
                            className="block px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl"
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-4">

                        {/* Status */}
                        <div className="flex items-center gap-2 px-4">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                            </span>

                            <span className="text-sm font-bold text-green-700 uppercase tracking-wide">
                                {data.statusLabel}
                            </span>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={data.whatsappHref}
                            className="bg-primary text-white w-full px-5 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            {data.ctaLabel}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default GlassNav;