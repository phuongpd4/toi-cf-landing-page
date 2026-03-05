import { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Menu', href: '/#menu' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-md  py-3"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Coffee
                                className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors duration-300"
                            />
                            <div className="absolute -inset-1 bg-gold/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="font-heading text-2xl font-bold tracking-wide text-cream">
                            T.O.I
                            <span className="text-gold ml-1 text-lg font-normal">Coffee</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-medium tracking-wide uppercase text-cream/90 transition-colors duration-300 hover:text-gold after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            className="ml-2 px-5 xl:px-6 py-2 xl:py-2.5 bg-gold text-espresso text-sm font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:scale-105 active:scale-95"
                        >
                            Visit Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden relative z-50 p-2 text-cream hover:text-gold transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 lg:hidden ${isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
                style={{ zIndex: 40 }}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Sheet */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[380px] bg-espresso/95 backdrop-blur-xl border-l border-gold/30 shadow-[-10px_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out lg:hidden flex flex-col overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ zIndex: 50 }}
            >
                {/* Sheet Header */}
                <div className="flex-none flex items-center justify-between p-5 border-b border-white/5">

                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-cream/70 hover:text-gold transition-colors rounded-full hover:bg-white/5"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Sheet Content */}
                <div className="flex-1 flex flex-col p-6 overflow-y-auto">
                    <div className="flex flex-col gap-6 flex-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-cream/90 text-xl font-heading font-medium tracking-wide hover:text-gold transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 pb-8">
                        <a
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full px-8 py-3.5 bg-gold text-espresso text-lg font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
                        >
                            Visit Us
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
