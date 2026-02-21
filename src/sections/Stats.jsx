import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [counts, setCounts] = useState({
        projects: 0,
        fullStack: 0,
        tools: 0,
    });

    const finalCounts = {
        projects: 8,
        fullStack: 2,
        tools: 10,
    };

    useEffect(() => {
        if (inView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const interval = duration / steps;

            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setCounts({
                    projects: Math.floor(finalCounts.projects * progress),
                    fullStack: Math.floor(finalCounts.fullStack * progress),
                    tools: Math.floor(finalCounts.tools * progress),
                });

                if (currentStep >= steps) {
                    setCounts(finalCounts);
                    clearInterval(timer);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [inView]);

    const stats = [
        {
            label: 'Projects Completed',
            value: counts.projects,
            suffix: '+',
        },
        {
            label: 'Full Stack Applications',
            value: counts.fullStack,
            suffix: '+',
        },
        {
            label: 'Tools Used',
            value: counts.tools,
            suffix: '+',
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="glass rounded-xl p-8 text-center hover-glow"
                            >
                                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
