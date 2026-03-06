import { useState } from 'react';
import { Star } from 'lucide-react';

interface MenuItem {
    name: string;
    description: string;
    price: string;
    image: string;
    badge?: string;
    category: string;
}

const menuItems: MenuItem[] = [
    {
        name: 'Cà Phê Sữa Đá',
        description: 'Traditional Vietnamese iced coffee with condensed milk. Bold, sweet, and refreshing.',
        price: '45.000₫',
        image: `${import.meta.env.BASE_URL}/images/coffee-vietnamese.png`,
        badge: 'Signature',
        category: 'Signature',
    },
    {
        name: 'Caramel Latte',
        description: 'Silky espresso with steamed milk and house-made caramel, topped with latte art.',
        price: '55.000₫',
        image: `${import.meta.env.BASE_URL}/images/coffee-latte.png`,
        category: 'Classic',
    },
    {
        name: 'Double Espresso',
        description: 'Rich, concentrated shots pulled from our premium Da Lat beans. Pure intensity.',
        price: '35.000₫',
        image: `${import.meta.env.BASE_URL}/images/coffee-espresso.png`,
        badge: 'Popular',
        category: 'Classic',
    },
    {
        name: 'Cold Brew',
        description: 'Smooth, slow-steeped for 18 hours. Delicate flavors with zero bitterness.',
        price: '50.000₫',
        image: `${import.meta.env.BASE_URL}/images/coffee-coldbrew.png`,
        badge: 'New',
        category: 'Cold',
    },
];

const categories = ['All', 'Signature', 'Classic', 'Cold'];

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems =
        activeCategory === 'All'
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                        <span className="text-gold-dark text-sm font-medium tracking-widest uppercase">
                            Our Menu
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-6">
                        Crafted with{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold italic">
                            Passion
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-brown/70 text-lg leading-relaxed">
                        Each drink on our menu is a carefully crafted masterpiece, blending tradition
                        with innovation for an unforgettable experience.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-gold text-espresso shadow-md shadow-gold/25'
                                : 'bg-white text-brown border border-caramel/20 hover:border-gold hover:text-gold-dark'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {item.badge && (
                                    <span className="absolute top-3 right-3 px-3 py-1 bg-gold text-espresso text-xs font-bold rounded-full uppercase tracking-wider">
                                        {item.badge}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-3.5 h-3.5 fill-gold text-gold"
                                        />
                                    ))}
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-espresso mb-2 group-hover:text-gold-dark transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-brown/60 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-gold-dark font-heading">
                                        {item.price}
                                    </span>
                                    <button className="px-4 py-2 bg-espresso text-cream text-xs font-semibold rounded-full hover:bg-gold hover:text-espresso transition-all duration-300 uppercase tracking-wider">
                                        Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
