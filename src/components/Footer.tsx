import { Coffee, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const footerLinks = {
    explore: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Menu', href: '/#menu' },
        { label: 'Reviews', href: '/#testimonials' },
        { label: 'Contact', href: '/contact' },
    ],
    hours: [
        'Mon – Fri: 7:00 AM – 9:00 PM',
        'Sat – Sun: 8:00 AM – 10:00 PM',
    ],
    social: [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-espresso text-cream/70 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="/" className="flex items-center gap-2 mb-5">
                            <Coffee className="w-7 h-7 text-gold" />
                            <span className="font-heading text-2xl font-bold text-cream">
                                T.O.I <span className="text-gold text-lg font-normal">Coffee</span>
                            </span>
                        </a>
                        <p className="text-cream/50 text-sm leading-relaxed mb-6">
                            Bringing the bold, rich flavors of authentic Vietnamese coffee to every cup.
                            Crafted with passion, served with love.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {footerLinks.social.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                                >
                                    <s.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-heading font-semibold text-cream text-lg mb-5">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.explore.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-gold transition-colors duration-300 hover:pl-1"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-heading font-semibold text-cream text-lg mb-5">
                            Opening Hours
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.hours.map((h, i) => (
                                <li key={i} className="text-sm">
                                    {h}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400 text-xs font-medium">Open Now</span>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-heading font-semibold text-cream text-lg mb-5">
                            Newsletter
                        </h4>
                        <p className="text-sm text-cream/50 mb-4">
                            Subscribe for updates, exclusive offers, and coffee tips.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl bg-dark-roast border border-gold/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-gold text-espresso font-semibold rounded-xl text-sm hover:bg-gold-light transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gold/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/40">
                        <p>
                            © 2025 T.O.I Coffee. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1">
                            Made with <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400" /> in
                            Ho Chi Minh City
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
