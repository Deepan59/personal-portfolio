import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Deepan59"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/deepan-s-98a2ab342/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-400 text-sm">
                        © 2026 Deepan S. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
