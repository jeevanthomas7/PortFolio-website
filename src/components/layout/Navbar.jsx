import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const sections = ["home", "about", "experience", "projects", "skills", "contact"];
        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -80% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
                } border-b border-borderColor/40`}
        >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold transition-transform hover:scale-105">
                    <span className="text-primary">Port</span>
                    <span className="text-textPrimary">Folio</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`text-sm font-semibold tracking-wide transition-colors relative pb-1 ${activeLink === link.id ? "text-primary" : "text-textSecondary hover:text-primary"
                                }`}
                        >
                            {link.name}
                            {activeLink === link.id && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-textPrimary text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t border-borderColor absolute top-full left-0 w-full shadow-lg"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-8 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className={`text-lg font-bold ${activeLink === link.id ? "text-primary" : "text-textSecondary"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
