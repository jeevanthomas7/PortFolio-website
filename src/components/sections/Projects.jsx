import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import AiMusic from "../../img/AiMusic.png";
import Chatbot from "../../img/Chatbot.png";
import SmartCar from "../../img/smartCAR.jpeg";
import Expense from "../../img/Expense.png";

const projects = [
    {
        title: "AI Based Music Recommendation System",
        description: "AI-based emotion detection with personalized music suggestions. Features dynamic playlist generation and real-time analysis.",
        tags: ["MERN", "AI", "API"],
        github: "https://github.com/jeevanthomas7/Ai-Based-Music-Recommendation-System",
        demo: "https://dot-in.vercel.app/",
        image: AiMusic
    },
    {
        title: "AI Chatbot",
        description: "Built a full-stack AI chatbot using Next.js and TypeScript with OpenRouter API integration. Features real-time messaging, context-aware responses, and secure Google Auth.",
        tags: ["Next.js", "OpenRouter", "OAuth"],
        github: "#",
        demo: "https://sky-chat-ai.vercel.app/",
        image: Chatbot
    },
    {
        title: "Smart Car Control System",
        description: "Real-time wireless car control with sensor monitoring. Built for IoT performance and low-latency response.",
        tags: ["Android", "IoT", "C++"],
        github: "#",
        demo: "#",
        image: SmartCar
    },
    {
        title: "AI Expense Tracker",
        description: "Smart expense monitoring platform featuring predictive category spending, financial analytics, and visual reports.",
        tags: ["React", "Chart.js", "Node.js"],
        github: "#",
        demo: "#",
        image: Expense
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack digital storefront with secure Stripe payments, cart management, search filters, and an admin dashboard.",
        tags: ["MERN", "Stripe", "Tailwind CSS"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Real-time Chat Room",
        description: "Instant messaging application featuring room channels, typing indicators, active user lists, and Socket.io communication.",
        tags: ["React", "Socket.io", "Express"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
    }
];

const Projects = ({ onSelectProject }) => {
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / (clientWidth - 40));
            setActiveDot(Math.min(index, projects.length - 1));
        }
    };

    return (
        <section id="projects" className="py-10 md:py-14 lg:py-16 bg-bgSection overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-6 lg:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-16 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
A selection of my recent work bridging frontend interfaces and backend APIs.


                    </p>
                </div>

                <div className="relative md:hidden w-full">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 pb-4 w-full px-4 -mx-4"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-[290px] sm:w-[320px] bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm flex flex-col"
                            >
                                <div className="p-4 pb-0">
                                    <div
                                        onClick={() => onSelectProject(project)}
                                        className="relative aspect-[16/10] overflow-hidden bg-slate-200 rounded-2xl border border-slate-200 cursor-pointer"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 pt-2 flex-grow flex flex-col justify-between">
                                    <div className="h-[145px] overflow-hidden">
                                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-white text-primary px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-100 shadow-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3
                                            onClick={() => onSelectProject(project)}
                                            className="text-lg font-black mb-2 text-slate-900 tracking-tight cursor-pointer line-clamp-2"
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed text-xs font-medium line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => onSelectProject(project)}
                                        className="w-full bg-slate-200/60 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest mb-4 transition-all active:scale-95 cursor-pointer"
                                    >
                                        View Details
                                    </button>

                                    <div className="flex gap-3 mt-auto">
                                        <a
                                            href={project.github}
                                            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-md"
                                        >
                                            <FaGithub size={14} /> GitHub
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="flex-1 flex items-center justify-center gap-1.5 border-2 border-primary text-primary py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-1.5 mt-4">
                        {projects.map((_, idx) => (
                            <span
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    activeDot === idx ? "w-4 bg-primary" : "w-1.5 bg-slate-200"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-borderColor/60 shadow-sm hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
                            >
                                <div className="p-4 pb-0">
                                    <div
                                        onClick={() => onSelectProject(project)}
                                        className="relative aspect-[16/10] overflow-hidden bg-slate-200 rounded-2xl border border-borderColor/60 cursor-pointer"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <span className="bg-white text-slate-900 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105 transition-transform duration-300">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-white text-primary px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-100 shadow-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3
                                            onClick={() => onSelectProject(project)}
                                            className="text-xl font-black mb-3 text-slate-900 group-hover:text-primary transition-colors tracking-tight cursor-pointer"
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 mb-6 leading-relaxed text-sm font-medium">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.github}
                                            className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-md active:scale-95"
                                        >
                                            <FaGithub size={16} /> GitHub
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                                        >
                                            <FaExternalLinkAlt size={14} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;