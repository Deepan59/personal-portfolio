import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/skillsData';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categories = Object.keys(skillsData);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                        Technologies and tools I work with
                    </p>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                                className="glass rounded-xl p-6 hover-glow"
                            >
                                <h3 className="text-xl font-bold mb-4 text-neon-blue">
                                    {category}
                                </h3>
                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="space-y-3"
                                >
                                    {skillsData[category].map((skill, index) => (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-center space-x-2"
                                        >
                                            <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {skill}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
