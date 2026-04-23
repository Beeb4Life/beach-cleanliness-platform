import { MenuIcon, XIcon, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
    name: string;
    href: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const location = useLocation();

    const navLinks: NavLink[] = [
        { name: "Home", href: "/#home" },
        { name: "Beach Status", href: "/#beaches" },
        { name: "Cleanup Drives", href: "/#events" },
        { name: "Report", href: "/#report" },
    ];

    // Handle Scroll Behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            
            // Show navbar if scrolling up, hide if scrolling down
            // Added a 10px buffer to prevent flickering
            if (currentScroll > lastScrollY.current && currentScroll > 100) {
                setShowNavbar(false);
                setIsOpen(false); // Auto-close mobile menu on scroll
            } else if (currentScroll < lastScrollY.current) {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg transition-all duration-300 border-b border-slate-100 ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-1.5 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
                            <Waves className="size-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">
                            Samudra Seva
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
                            Login
                        </Link>
                        <Link 
                            to="/join" 
                            className="bg-slate-900 text-white px-5 py-2.5 text-sm font-bold rounded-xl hover:bg-blue-600 transition-all shadow-md active:scale-95"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        aria-label="Toggle Menu"
                        className="p-2 text-slate-600 md:hidden hover:bg-slate-50 rounded-lg transition-colors"
                    >
                        {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 z-40 bg-white transition-transform duration-500 md:hidden flex flex-col p-8 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col gap-8 mt-12 text-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-slate-900"
                        >
                            {link.name}
                        </a>
                    ))}
                    <hr className="border-slate-100" />
                    <Link to="/login" className="text-xl font-semibold text-slate-600">
                        Login
                    </Link>
                    <Link 
                        to="/join" 
                        className="bg-slate-900 text-white py-4 rounded-2xl font-bold text-xl shadow-xl"
                    >
                        Join Now
                    </Link>
                </div>
            </div>

            {/* Spacer to prevent content jump */}
            <div className="h-20" />
        </>
    );
}