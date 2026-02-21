import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDark, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold gradient-text">Deepan S</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(item.href);
                                    }}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                                            ? 'text-neon-blue'
                                            : 'text-gray-300 hover:text-neon-blue'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    <FiSun className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <FiMoon className="w-5 h-5 text-gray-700" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <FiSun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <FiMoon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden glass">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(item.href);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.href.substring(1)
                                        ? 'text-neon-blue bg-gray-800'
                                        : 'text-gray-300 hover:text-neon-blue hover:bg-gray-700'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
