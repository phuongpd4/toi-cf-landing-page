import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Visit Us',
        lines: ['123 Nguyễn Huệ, District 1', 'Ho Chi Minh City, Vietnam'],
    },
    {
        icon: Clock,
        title: 'Hours',
        lines: ['Mon – Fri: 7:00 AM – 9:00 PM', 'Sat – Sun: 8:00 AM – 10:00 PM'],
    },
    {
        icon: Phone,
        title: 'Call Us',
        lines: ['+84 28 1234 5678', '+84 90 123 4567'],
    },
    {
        icon: Mail,
        title: 'Email',
        lines: ['hello@toicoffee.vn', 'events@toicoffee.vn'],
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                        <span className="text-gold-dark text-sm font-medium tracking-widest uppercase">
                            Get in Touch
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-6">
                        Come Say{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold italic">
                            Hello
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-brown/70 text-lg leading-relaxed">
                        We'd love to see you. Drop by for a cup, or reach out — we're always happy to
                        chat about coffee.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {contactInfo.map((item) => (
                            <div
                                key={item.title}
                                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-cream hover:border-gold/20 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-gold-dark" />
                                </div>
                                <h3 className="font-heading font-semibold text-espresso text-lg mb-2">
                                    {item.title}
                                </h3>
                                {item.lines.map((line, i) => (
                                    <p key={i} className="text-brown/60 text-sm leading-relaxed">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream">
                        <h3 className="font-heading text-2xl font-bold text-espresso mb-6">
                            Send Us a Message
                        </h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="block text-sm font-medium text-brown mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl border border-cream bg-latte text-espresso placeholder:text-caramel/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="block text-sm font-medium text-brown mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-cream bg-latte text-espresso placeholder:text-caramel/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="block text-sm font-medium text-brown mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 rounded-xl border border-cream bg-latte text-espresso placeholder:text-caramel/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="block text-sm font-medium text-brown mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    placeholder="Tell us what's on your mind..."
                                    className="w-full px-4 py-3 rounded-xl border border-cream bg-latte text-espresso placeholder:text-caramel/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-espresso font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 active:scale-[0.98]"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
