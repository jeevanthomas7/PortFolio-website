import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiRazorpay
} from "react-icons/si";

const GeminiIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12" fill="none">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-gradient)" />
        <defs>
            <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9BC5FF" />
                <stop offset="30%" stopColor="#2F6FEB" />
                <stop offset="70%" stopColor="#FFC876" />
                <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
        </defs>
    </svg>
);

const ExpressIcon = () => (
    <div className="font-sans font-bold text-xl md:text-3xl tracking-tighter text-slate-800 flex items-center justify-center h-8 md:h-12">
        ex
    </div>
);

const VercelIcon = () => (
    <svg viewBox="0 0 74 64" className="w-6 h-6 md:w-10 md:h-10 text-black" fill="currentColor">
        <path d="M37.5 0L75 64H0L37.5 0Z" />
    </svg>
);

const skillsData = [
    { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
    { name: "Express", icon: ExpressIcon, custom: true, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
    { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Platforms" },
    { name: "GitHub", icon: FaGithub, color: "#181717", category: "Platforms" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Platforms" },
    { name: "Vercel", icon: VercelIcon, custom: true, category: "Platforms" },
    { name: "Netlify", icon: SiNetlify, color: "#00C8C8", category: "Platforms" },
    { name: "Gemini AI", icon: GeminiIcon, custom: true, category: "Platforms" },
    { name: "Razorpay", icon: SiRazorpay, color: "#0B72E7", category: "Platforms" }
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Frontend", "Backend", "Database", "Platforms"];

    const filteredSkills = activeCategory === "All"
        ? skillsData
        : skillsData.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-10 md:py-14 lg:py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-8 lg:mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Skills & Technologies</h2>
                    <div className="w-16 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
                        A comprehensive showcase of my technical stack and tools for building full-stack applications.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2.5 mb-6 lg:mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                                activeCategory === cat
                                    ? "bg-black text-white shadow-md scale-105"
                                    : "bg-white text-slate-600 border border-borderColor hover:border-black/20"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-3 md:gap-6 w-full"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.25 }}
                                    key={skill.name}
                                    className="bg-white border border-borderColor/60 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 w-full aspect-square md:w-[150px] md:h-[150px] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300">
                                        {skill.custom ? (
                                            <IconComponent />
                                        ) : (
                                            <IconComponent className="text-2xl md:text-4xl" style={{ color: skill.color }} />
                                        )}
                                    </div>
                                    <span className="font-bold text-slate-700 text-xs md:text-sm tracking-tight text-center">{skill.name}</span>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
