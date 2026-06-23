import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import AiMusic from "../../img/AiMusic.png";
import chatbot from "../../img/chatbot.png";
import RealTimeChatApp from "../../img/Real-time-chat-app.png";
import EcommerceJewellery from "../../img/Ecommerce-jewellery.png";
import RestaurantTheme from "../../img/Resturant Theme.png";
import ThreeDDesign from "../../img/3d design.png";

const projects = [
    {
        title: "AI Based Music Recommendation System",
        description: "An intelligent recommendation engine leveraging AI emotion detection to curate personalized playlists. Built with a robust backend for real-time analysis and dynamic content delivery.",
        tags: ["React", "Node.js", "AI Integration", "MongoDB"],
        github: "https://github.com/jeevanthomas7/Ai-Based-Music-Recommentation-System",
        demo: "https://dot-in.vercel.app/",
        image: AiMusic
    },
    {
        title: "Real-Time Chat App",
        description: "A high-performance communication platform engineered with Socket.io. Features secure private messaging, dynamic room creation, live typing indicators, and scalable WebSocket infrastructure.",
        tags: ["React", "Socket.io", "Node.js", "Express"],
        github: "https://github.com/jeevanthomas7/Real-Time-Chat-App",
        demo: "https://chatapp-chatify.vercel.app/",
        image: RealTimeChatApp
    },
    {
        title: "AI Chatbot",
        description: "An advanced conversational interface powered by Next.js and LLM APIs. Designed for low-latency, context-aware interactions with seamless state management and an accessible UI.",
        tags: ["Next.js", "TypeScript", "LLM APIs", "Tailwind"],
        github: "https://github.com/jeevanthomas7/chatbot",
        demo: "https://sky-chat-ai.vercel.app/",
        image: chatbot
    },
    {
        title: "Ecommerce Jewellery",
        description: "A premium storefront tailored for high-end retail. Delivers a sophisticated experience with fluid animations, dynamic product filtering, and a seamless checkout architecture.",
        tags: ["React", "Tailwind CSS", "Redux", "Framer"],
        github: "https://github.com/jeevanthomas7/jewellery-theme",
        demo: "https://ecommerce-jewellery-in.netlify.app/",
        image: EcommerceJewellery
    },
    {
        title: "Restaurant Theme",
        description: "A beautifully crafted, fully responsive landing page optimized for hospitality. Showcases immersive imagery, interactive menu interfaces, and a refined booking flow.",
        tags: ["React", "UI/UX", "Responsive", "CSS3"],
        github: "https://github.com/jeevanthomas7/Resturant-theme",
        demo: "https://resturant-in.netlify.app/",
        image: RestaurantTheme
    },
    {
        title: "3D Design Portfolio",
        description: "An immersive web experience utilizing WebGL and Three.js. Features optimized 3D model rendering, custom shaders, and complex spatial camera animations.",
        tags: ["Three.js", "React Three Fiber", "WebGL", "GSAP"],
        github: "https://github.com/jeevanthomas7/NJ-WORKS-3d-design",
        demo: "https://nj-works.vercel.app/",
        image: ThreeDDesign
    }
];

const Projects = ({ onSelectProject }) => {
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const maxScrollLeft = scrollWidth - clientWidth;
            if (maxScrollLeft <= 0) return;
            const progress = scrollLeft / maxScrollLeft;
            const index = Math.round(progress * (projects.length - 1));
            setActiveDot(Math.min(Math.max(index, 0), projects.length - 1));
        }
    };

    return (
        <section id="projects" className="py-10 md:py-14 lg:py-16 bg-bgSection overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-6 lg:mb-12" data-aos="fade-up">
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
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 pb-4 -mx-4 px-4 scroll-pl-4 after:content-[''] after:w-[1px] after:shrink-0"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="snap-start shrink-0 w-[290px] sm:w-[320px] bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm flex flex-col"
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