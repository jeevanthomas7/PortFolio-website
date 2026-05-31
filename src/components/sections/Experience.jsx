import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
    {
        type: "work",
        title: "Frontend Developer",
        company: "Ynot Info Solutions",
        period: "March 2026 – May 2026",
        responsibilities: [
            "Built high-performance, responsive web applications using HTML, CSS, JavaScript, and React",
            "Collaborated closely with design teams to translate UI/UX wireframes into functional, clean code",
            "Optimized web application performance, accessibility, and responsiveness for various devices",
            "Integrated secure and dynamic RESTful API endpoints for seamless frontend-backend communication",
            "Conducted thorough unit testing and debugging to ensure cross-browser compatibility and stability",
            "Participated in agile sprints, daily standups, and code review sessions to maintain development quality",
        ],
    },
    {
        type: "work",
        title: "MERN Full-Stack Developer Intern",
        company: "OneTeam Solutions",
        period: "July 2025 – Jan 2026",
        responsibilities: [
            "Developed interactive and dynamic full-stack features using React.js, Express.js, and Node.js",
            "Designed and implemented robust RESTful APIs with secure CRUD operations and data validation",
            "Integrated and optimized MongoDB database structures for efficient storage and query retrieval",
            "Created highly reusable, responsive, and pixel-perfect UI components with modern styling",
            "Utilized Git and GitHub version control system for collaborative development workflows and updates",
            "Collaborated with senior developers to conduct code reviews, identify bottlenecks, and resolve complex issues",
        ],
    },
    {
        type: "education",
        title: "Diploma in Computer Engineering",
        company: "Govt Polytechnic College Meppadi, Calicut University",
        period: "2022 — 2025",
        responsibilities: [
            "Completed coursework in software engineering, database management systems, and web architecture",
            "Specialized in frontend and backend web development using modern object-oriented principles",
            "Participated actively in technical symposiums, programming hackathons, and academic seminars",
            "Developed an academic final year project integrating IoT devices with custom web applications",
            "Gained hands-on training in computer hardware repair, local area networking, and OS administration",
            "Maintained a strong academic record with a key focus on practical lab sessions and software projects",
        ],
    },
];

const Experience = () => {
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeftVal = useRef(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                setActiveDot(experiences.length - 1);
                return;
            }

            const children = Array.from(scrollRef.current.children);
            let closestIndex = 0;
            let minDistance = Infinity;

            children.forEach((child, index) => {
                const distance = Math.abs(child.offsetLeft - scrollLeft);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveDot(closestIndex);
        }
    };

    const handleMouseDown = (e) => {
        isDown.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeftVal.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
        if (!isDown.current) return;
        isDown.current = false;
        scrollRef.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseUp = () => {
        if (!isDown.current) return;
        isDown.current = false;
        scrollRef.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
    };

    const handleDotClick = (index) => {
        if (scrollRef.current) {
            const firstChild = scrollRef.current.firstChild;
            if (firstChild) {
                const cardWidth = firstChild.offsetWidth + 24;
                scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
                setActiveDot(index);
            }
        }
    };

    const handleNav = (direction) => {
        if (scrollRef.current) {
            const firstChild = scrollRef.current.firstChild;
            if (firstChild) {
                const cardWidth = firstChild.offsetWidth + 24;
                const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section id="experience" className="py-10 md:py-14 lg:py-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-6 lg:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Experience & Education</h2>
                    <div className="w-16 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="relative w-full group">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-6 w-full"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="snap-start shrink-0 w-[calc(100vw-80px)] sm:w-[500px] md:w-[580px] lg:w-[760px] xl:w-[900px] max-w-full bg-white p-6 md:p-8 rounded-3xl shadow-soft border border-borderColor flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4 gap-2">
                                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                                            exp.type === "education"
                                                ? "bg-amber-50 text-amber-600 border-amber-100"
                                                : "bg-blue-50 text-blue-600 border-blue-100"
                                        }`}>
                                            {exp.type === "education" ? "Education" : "Experience"}
                                        </span>
                                        <div className="bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {exp.period}
                                        </div>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-textPrimary tracking-tight mb-1">{exp.title}</h3>
                                    <p className="text-slate-500 font-semibold text-sm md:text-base mb-6">{exp.company}</p>

                                    <ul className="space-y-3.5 text-textSecondary text-xs md:text-sm font-medium leading-relaxed">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-primary mr-3 mt-1.5 flex-shrink-0 text-[8px]">●</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleNav("prev")}
                        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-slate-800 items-center justify-center shadow-lg border border-borderColor hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => handleNav("next")}
                        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-slate-800 items-center justify-center shadow-lg border border-borderColor hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center gap-1.5 mt-6">
                    {experiences.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none outline-none ${
                                activeDot === idx ? "w-4 bg-primary" : "w-1.5 bg-slate-300"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
