import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                        A showcase of my recent work and contributions
                    </p>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative glass rounded-xl overflow-hidden hover-glow"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        {/* Only show buttons if not Bonafide Certificate System (id !== 1) */}
                                        {project.id !== 1 && (
                                            <div className="flex space-x-4">
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-6 py-3 bg-neon-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
                                                >
                                                    <FiExternalLink className="w-5 h-5" />
                                                    <span>Visit Site</span>
                                                </a>
                                                {project.githubLink && (
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-6 py-3 border-2 border-neon-blue text-neon-blue rounded-lg font-medium hover:bg-neon-blue hover:text-white transition-all duration-300 flex items-center space-x-2"
                                                    >
                                                        <FiGithub className="w-5 h-5" />
                                                        <span>GitHub</span>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-sm bg-neon-blue bg-opacity-10 text-neon-blue rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
