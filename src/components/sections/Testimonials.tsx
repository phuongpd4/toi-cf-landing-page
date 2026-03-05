import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Minh Anh',
        role: 'Coffee Enthusiast',
        avatar: 'MA',
        text: "T.O.I Coffee serves the best Cà Phê Sữa Đá I've ever had outside of Vietnam. The atmosphere is incredibly warm and inviting — I feel at home every time I visit.",
        rating: 5,
    },
    {
        name: 'David Chen',
        role: 'Food Blogger',
        avatar: 'DC',
        text: "An extraordinary coffee experience. The attention to detail in every cup is remarkable. Their cold brew is unlike anything I've tasted — smooth, complex, and absolutely addictive.",
        rating: 5,
    },
    {
        name: 'Thu Hà',
        role: 'Regular Customer',
        avatar: 'TH',
        text: "I've been coming here every morning for two years. The baristas know my order by heart. It's not just coffee — it's community. T.O.I truly means something special.",
        rating: 5,
    },
    {
        name: 'James Park',
        role: 'Photography Lover',
        avatar: 'JP',
        text: "The aesthetics of this place are incredible. Every corner is Instagram-worthy, but what keeps me coming back is the genuine quality of their espresso. Simply outstanding.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const navigate = useCallback(
        (direction: 'prev' | 'next') => {
            if (isAnimating) return;
            setIsAnimating(true);
            setActiveIndex((prev) =>
                direction === 'next'
                    ? (prev + 1) % testimonials.length
                    : (prev - 1 + testimonials.length) % testimonials.length
            );
            setTimeout(() => setIsAnimating(false), 500);
        },
        [isAnimating]
    );

    useEffect(() => {
        const interval = setInterval(() => navigate('next'), 5000);
        return () => clearInterval(interval);
    }, [navigate]);

    const current = testimonials[activeIndex];

    return (
        <section id="testimonials" className="py-24 lg:py-32 bg-espresso relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-10 left-10 opacity-5">
                <Quote className="w-48 h-48 text-gold" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
                <Quote className="w-32 h-32 text-gold" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
                        <span className="text-gold text-sm font-medium tracking-widest uppercase">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-cream leading-tight mb-6">
                        What Our Guests{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold italic">
                            Say
                        </span>
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="relative max-w-3xl mx-auto">
                    <div
                        className="bg-dark-roast/50 backdrop-blur-sm border border-gold/10 rounded-3xl p-8 sm:p-12 text-center transition-all duration-500"
                        key={activeIndex}
                    >
                        {/* Quote Icon */}
                        <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />

                        {/* Stars */}
                        <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(current.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="text-cream/90 text-lg sm:text-xl leading-relaxed font-light italic mb-8 animate-fade-in">
                            "{current.text}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-espresso font-bold text-lg">
                                {current.avatar}
                            </div>
                            <div className="text-left">
                                <div className="font-heading font-semibold text-cream text-lg">
                                    {current.name}
                                </div>
                                <div className="text-caramel text-sm">{current.role}</div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={() => navigate('prev')}
                            className="p-3 rounded-full border border-gold/20 text-gold/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setIsAnimating(true);
                                        setActiveIndex(i);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }}
                                    className={`transition-all duration-300 rounded-full ${i === activeIndex
                                            ? 'w-8 h-2 bg-gold'
                                            : 'w-2 h-2 bg-gold/30 hover:bg-gold/50'
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => navigate('next')}
                            className="p-3 rounded-full border border-gold/20 text-gold/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
