import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col flex-grow items-center justify-center py-24 lg:py-32 px-4 bg-surface-light min-h-[70vh]">
            <div className="bg-background-light p-8 md:p-12 xl:p-16 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 max-w-2xl w-full text-center relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl z-0 mix-blend-multiply"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl z-0 mix-blend-multiply"></div>

                <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto bg-brand-cyan/10 text-brand-teal rounded-3xl flex items-center justify-center mb-8 rotate-3 transition-transform hover:rotate-6 shadow-inner border border-brand-cyan/20">
                        <span className="material-symbols-outlined text-6xl">wrong_location</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-cyan mb-2 tracking-tighter">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mb-6 relative inline-block">
                        Destination Not Found
                        <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-brand-teal/0 via-brand-teal to-brand-teal/0 rounded-full"></div>
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
                        It looks like this route isn't on our map. The page might have been moved, or maybe we just took a wrong turn. Let's get you back on track!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1"
                        >
                            <span className="material-symbols-outlined text-xl">home</span>
                            Return Home
                        </Link>
                        <Link
                            href="/booking"
                            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 hover:-translate-y-1 hover:border-slate-300"
                        >
                            <span className="material-symbols-outlined text-xl">directions_car</span>
                            Book a Ride
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
