import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple opacity-20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-neon-blue text-lg md:text-xl mb-4 font-medium"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
                    >
                        Deepan S
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-gray-300"
                    >
                        MERN Stack Developer
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
                    >
                        Building scalable and modern full-stack web applications using the MERN stack.
                        Passionate about creating clean, maintainable code and exceptional user experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={() => handleScroll('projects')}
                            className="px-8 py-3 bg-neon-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/50 hover:-translate-y-1"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => handleScroll('contact')}
                            className="px-8 py-3 border-2 border-neon-blue text-neon-blue rounded-lg font-medium hover:bg-neon-blue hover:text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            Get In Touch
                        </button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-16"
                    >
                        <FiArrowDown className="w-6 h-6 mx-auto text-neon-blue animate-bounce" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
