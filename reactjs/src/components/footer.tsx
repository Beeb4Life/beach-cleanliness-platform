import { Link } from "react-router-dom";
import { Waves, Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white border-t border-slate-100 pt-20 pb-10 text-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    
                    {/* Column 1: Brand & Social */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link to="/" className="flex items-center gap-2 group w-fit">
                            <div className="p-1.5 bg-slate-900 rounded-lg group-hover:bg-blue-600 transition-colors">
                                <Waves className="size-5 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">
                                Samudra Seva
                            </span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed max-w-sm text-base">
                            An AI-powered community platform dedicated to Mumbai's coastlines. 
                            Reporting, coordinating, and cleaning—one beach at a time.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <a href="#" className="hover:text-blue-600 transition-colors"><Twitter className="size-5" /></a>
                            <a href="#" className="hover:text-pink-600 transition-colors"><Instagram className="size-5" /></a>
                            <a href="#" className="hover:text-slate-900 transition-colors"><Github className="size-5" /></a>
                            <a href="mailto:contact@samudraseva.org" className="hover:text-blue-500 transition-colors"><Mail className="size-5" /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px]">Platform</h3>
                        <nav className="flex flex-col gap-4">
                            <a href="#beaches" className="text-slate-500 hover:text-blue-600 transition-colors">Beach Status</a>
                            <a href="#events" className="text-slate-500 hover:text-blue-600 transition-colors">Cleanup Drives</a>
                            <a href="#report" className="text-slate-500 hover:text-blue-600 transition-colors">Report Waste</a>
                            <a href="#awareness" className="text-slate-500 hover:text-blue-600 transition-colors">Conservation Guide</a>
                        </nav>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px]">Stay Updated</h3>
                        <p className="text-slate-500">Receive weekly summaries of cleanup impacts and coastal alerts.</p>
                        <form className="flex w-full group" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-l-xl h-12 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-slate-900" 
                                type="email" 
                                placeholder="Email address" 
                                aria-label="Email for newsletter"
                            />
                            <button 
                                type="submit"
                                className="bg-slate-900 hover:bg-blue-600 text-white px-6 h-12 font-bold rounded-r-xl transition-all shadow-sm"
                            >
                                Join
                            </button>
                        </form>
                        <p className="text-[10px] text-slate-400 italic">
                            By joining, you agree to receive community updates. No spam, ever.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-100">
                    <p className="order-2 md:order-1 text-slate-400 font-medium text-xs">
                        © {currentYear} Samudra Seva. Built for Mumbai's Communities.
                    </p>
                    
                    <nav className="flex items-center gap-8 font-semibold text-xs order-1 md:order-2">
                        <Link to="/privacy" className="text-slate-500 hover:text-slate-900 transition-colors">
                            PRIVACY POLICY
                        </Link>
                        <Link to="/terms" className="text-slate-500 hover:text-slate-900 transition-colors">
                            TERMS OF SERVICE
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}