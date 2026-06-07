import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logoname.png";

const Navbar = ({ onHomeLink, activeProject }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (activeProject) {
            setActiveLink("projects");
        }
    }, [activeProject]);

    useEffect(() => {
        document.title = "Jeevan Thomas | Portfolio";
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
    }, [activeProject]);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
    ];

    const handleNavLinkClick = (e, id, isMobile = false) => {
        if (onHomeLink) {
            onHomeLink();
        }
        if (isMobile) {
            setIsOpen(false);
        }
        const element = document.getElementById(id);
        if (!element) {
            e.preventDefault();
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, null, `#${id}`);
                }
            }, 50);
        }
    };

    return (
        <nav
            ref={navRef}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
                } border-b border-borderColor/40`}
        >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        if (onHomeLink) {
                            onHomeLink();
                        }
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        window.history.pushState(null, null, "/");
                    }}
                    className="flex items-center transition-transform hover:scale-105"
                >
                    <img
                        src={logo}
                        alt="Jeevan Thomas"
                        className="h-7 md:h-8 w-auto object-contain"
                    />
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleNavLinkClick(e, link.id)}
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
                                    onClick={(e) => handleNavLinkClick(e, link.id, true)}
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
