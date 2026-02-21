import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open default email client
        window.location.href = `mailto:sdeepan314@gmail.com?subject=${subject}&body=${body}`;

        // Clear form
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FiMail className="w-6 h-6" />,
            label: 'Email',
            value: 'sdeepan314@gmail.com',
            link: 'mailto:sdeepan314@gmail.com',
        },
        {
            icon: <FiPhone className="w-6 h-6" />,
            label: 'Phone',
            value: '+91 7598702401',
            link: 'tel:+917598702401',
        },
        {
            icon: <FiGithub className="w-6 h-6" />,
            label: 'GitHub',
            value: 'Deepan59',
            link: 'https://github.com/Deepan59',
        },
        {
            icon: <FiLinkedin className="w-6 h-6" />,
            label: 'LinkedIn',
            value: 'deepan-s',
            link: 'https://www.linkedin.com/in/deepan-s-98a2ab342/',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                        Let's discuss your next project or internship opportunity
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-neon-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-neon-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-neon-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-neon-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-3 bg-neon-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/50 flex items-center justify-center space-x-2"
                                >
                                    <FiSend className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="glass rounded-xl p-8">
                                <h3 className="text-2xl font-bold mb-6 gradient-text">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.link}
                                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
                                        >
                                            <div className="text-neon-blue group-hover:scale-110 transition-transform duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {info.label}
                                                </p>
                                                <p className="text-gray-800 dark:text-white font-medium">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
