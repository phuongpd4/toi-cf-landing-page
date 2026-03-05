import { ArrowDown, Coffee } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.png"
                    alt="T.O.I Coffee atmosphere"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 to-transparent" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/4 right-10 opacity-10 animate-float hidden lg:block">
                <Coffee className="w-32 h-32 text-gold" />
            </div>
            <div
                className="absolute bottom-1/3 left-10 opacity-10 animate-float hidden lg:block"
                style={{ animationDelay: '3s' }}
            >
                <Coffee className="w-20 h-20 text-gold-light" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-8 animate-fade-in">
                    <Coffee className="w-4 h-4 text-gold" />
                    <span className="text-gold-light text-sm font-medium tracking-widest uppercase">
                        Since 2020
                    </span>
                </div>

                {/* Heading */}
                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 animate-slide-up">
                    The Art of
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark italic">
                        Vietnamese
                    </span>
                    <br />
                    Coffee
                </h1>

                {/* Subtitle */}
                <p
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-cream/70 leading-relaxed mb-10 animate-slide-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    Every cup tells a story. Handcrafted with passion, served with love —
                    experience the bold, rich flavors of authentic Vietnamese coffee at{' '}
                    <span className="text-gold font-medium">T.O.I Coffee</span>.
                </p>

                {/* CTAs */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
                    style={{ animationDelay: '0.4s' }}
                >
                    <a
                        href="/#menu"
                        className="group px-8 py-4 bg-gold text-espresso font-semibold rounded-full text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:scale-105 active:scale-95"
                    >
                        Explore Our Menu
                    </a>
                    <a
                        href="/about"
                        className="group px-8 py-4 border-2 border-cream/30 text-cream font-medium rounded-full text-lg hover:border-gold hover:text-gold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                        Our Story
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="/about" className="flex flex-col items-center gap-2 text-cream/50 hover:text-gold transition-colors">
                    <span className="text-xs tracking-widest uppercase">Discover</span>
                    <ArrowDown className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
}
