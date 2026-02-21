import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        About <span className="gradient-text">Me</span>
                    </h2>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I'm <span className="text-neon-blue font-semibold">Deepan S</span>, a passionate MERN stack developer
                                from <span className="font-medium">Devakottai, Tamil Nadu</span>. I specialize in building
                                full-stack web applications with a focus on clean, scalable, and maintainable code.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                With hands-on experience in developing AI-based tools, database-driven systems, and utility
                                web applications, I bring ideas to life through modern web technologies. My projects range
                                from college administration systems to AI-powered resume tailoring applications.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I'm currently seeking <span className="text-neon-blue font-semibold">internship opportunities</span> to
                                apply and expand my skills in real-world environments, collaborate with experienced developers,
                                and contribute to meaningful projects.
                            </p>
                            <div className="pt-4">
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    📍 Location: <span className="text-neon-blue">Devakottai, Tamil Nadu</span>
                                </p>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
                                    🎯 Status: <span className="text-neon-blue">Open for Internships</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="w-80 h-80 rounded-2xl glass overflow-hidden hover-glow">
                                <img
                                    src="/profile.jpg"
                                    alt="Deepan S - MERN Stack Developer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
