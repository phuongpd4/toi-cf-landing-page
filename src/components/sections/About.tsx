import { Leaf, Award, Heart } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: 'Premium Beans',
        description: 'Sourced from the highlands of Da Lat, our beans are hand-selected for perfection.',
    },
    {
        icon: Award,
        title: 'Master Crafted',
        description: 'Every cup is brewed by our expert baristas using time-honored Vietnamese techniques.',
    },
    {
        icon: Heart,
        title: 'Made with Love',
        description: 'We treat every customer like family, creating a warm and inviting experience.',
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-caramel/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={`${import.meta.env.BASE_URL}/images/about-shop.png`}
                                alt="T.O.I Coffee shop interior"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px] animate-float">
                            <div className="text-4xl font-heading font-bold text-gold">5+</div>
                            <div className="text-sm text-brown font-medium mt-1">Years of crafting perfect cups</div>
                        </div>

                        {/* Decorative Border */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
                    </div>

                    {/* Text Side */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                            <span className="text-gold-dark text-sm font-medium tracking-widest uppercase">
                                Our Story
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-espresso leading-tight mb-6">
                            Where Passion Meets{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">
                                Perfection
                            </span>
                        </h2>

                        <p className="text-brown/80 text-lg leading-relaxed mb-6">
                            Born from a deep love for Vietnamese coffee culture, T.O.I Coffee is more
                            than just a café — it's a celebration of tradition and innovation. We bring
                            the bold, rich flavors of Vietnam's finest beans to every cup we serve.
                        </p>

                        <p className="text-brown/70 leading-relaxed mb-10">
                            Our name, <span className="font-semibold text-espresso">T.O.I</span>,
                            reflects our commitment to creating personal, meaningful connections through
                            coffee. Each blend is carefully curated, each cup is artfully prepared, and
                            each visit is designed to feel like coming home.
                        </p>

                        {/* Features */}
                        <div className="space-y-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                                        <feature.icon className="w-6 h-6 text-gold-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-semibold text-espresso mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-brown/70 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
