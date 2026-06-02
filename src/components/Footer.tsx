


// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import type { FooterData } from '@/types/content';

// interface FooterProps {
//     data: FooterData;
// }

// const Footer: React.FC<FooterProps> = ({ data }) => {
//     return (
//         <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800" id="areas">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

//                     {/* Logo + Brand */}
//                     <div className="col-span-2 md:col-span-1">

//                         <Link href="/" className="flex items-center gap-3 mb-4">

//                             <Image
//                                 src="/images/logo.png"
//                                 alt="Logo"
//                                 width={80}
//                                 height={80}
//                                 className="rounded-lg"
//                             />

//                             <h3 className="text-lg font-bold text-slate-900 dark:text-white">
//                                 {data.brand}
//                             </h3>

//                         </Link>

//                         <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
//                             {data.tagline}
//                         </p>

//                         <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 block">
//                             {data.phone}
//                         </p>

//                         <div className="flex gap-4">
//                             <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Social Link 1">
//                                 <span className="material-symbols-outlined">public</span>
//                             </a>

//                             <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Email">
//                                 <span className="material-symbols-outlined">alternate_email</span>
//                             </a>
//                         </div>

//                     </div>

//                     {/* Footer Columns */}
//                     {data.columns.map((column) => (
//                         <div key={column.title}>
//                             <h4 className="font-bold text-slate-900 dark:text-white mb-4">
//                                 {column.title}
//                             </h4>

//                             <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
//                                 {column.links.map((link) => (
//                                     <li key={link.label}>
//                                         <a className="hover:text-primary" href={link.href}>
//                                             {link.label}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}

//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

//                     <p className="text-xs text-slate-400">
//                         {data.copyright}
//                     </p>

//                     <div className="flex gap-6">

//                         <Image
//                             className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all"
//                             alt="Google Maps Integration Logo"
//                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZgH1WGURudSW_StFRy6QguzG7G4lhCbvF_RSywcoAntyAFJJpcCu5F13r-OIV2NPiXMtVr2iOWIzq8y7EyPCy5gB_-mnUha0wqAyoVJz8xAnXf3ZajuhyEm_EwIouffSiKmoifRyeh83mbN_SyN8dvNbW8HrpT5EWjO1Cbg7yyAKjvI0d1171AuThAhMzi3TUOxy78Q4eUzIBV5i-9xml-2MF9aMz-E69ppgFKONx_WS61_L41lD2XSyTM99d_tYg4sCq9Lz11lnx"
//                             width={120}
//                             height={24}
//                             unoptimized
//                         />

//                     </div>

//                 </div>

//             </div>
//         </footer>
//     );
// };

// export default Footer;

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaPhone, FaMobile } from "react-icons/fa";
import type { FooterData } from '@/types/content';

interface FooterProps {
    data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800" id="areas">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    {/* Logo + Brand */}
                    <div className="col-span-2 md:col-span-1">

                        <Link href="/" className="flex items-center gap-3 mb-4">

                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="rounded-lg"
                            />

                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                {data.brand}
                            </h3>

                        </Link>

                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            {data.tagline}
                        </p>

                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 block">
                            {data.phone}
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/yuvan_cabs_official/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-slate-400 hover:text-pink-500 transition-colors text-xl"
                            >
                                <FaInstagram />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918197814490?text=Hi%20I%20want%20to%20book%20a%20wheelchair%20cab"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="text-slate-400 hover:text-green-500 transition-colors text-xl"
                            >
                                <FaWhatsapp />
                            </a>

                       {/* Call */}
<a
  href="tel:+918197814490"
  aria-label="Call Now"
  className="text-slate-400 hover:text-blue-500 transition-colors text-xl"
>
  <FaMobile />
</a>

                        </div>

                    </div>

                    {/* Footer Columns */}
                    {data.columns.map((column) => (
                        <div key={column.title}>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                                {column.title}
                            </h4>

                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a className="hover:text-primary" href={link.href}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-xs text-slate-400">
                        {data.copyright}
                    </p>

                    <div className="flex gap-6">

                        <Image
                            className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all"
                            alt="Google Maps Integration Logo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZgH1WGURudSW_StFRy6QguzG7G4lhCbvF_RSywcoAntyAFJJpcCu5F13r-OIV2NPiXMtVr2iOWIzq8y7EyPCy5gB_-mnUha0wqAyoVJz8xAnXf3ZajuhyEm_EwIouffSiKmoifRyeh83mbN_SyN8dvNbW8HrpT5EWjO1Cbg7yyAKjvI0d1171AuThAhMzi3TUOxy78Q4eUzIBV5i-9xml-2MF9aMz-E69ppgFKONx_WS61_L41lD2XSyTM99d_tYg4sCq9Lz11lnx"
                            width={120}
                            height={24}
                            unoptimized
                        />

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;