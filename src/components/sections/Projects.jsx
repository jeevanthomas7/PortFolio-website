import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import AiMusic from "../../img/AiMusic.png";
import Chatbot from "../../img/Chatbot.png";
import SmartCar from "../../img/smartCAR.jpeg";

const projects = [
  {
    title: "AI Based Music Recommendation System",
    description:
      "AI-based emotion detection with personalized music suggestions. Features dynamic playlist generation and real-time analysis.",
    tags: ["MERN", "AI", "API"],
    github: "https://github.com/jeevanthomas7/Ai-Based-Music-Recommendation-System",
    demo: "https://dot-in.vercel.app/",
    image: AiMusic,
  },
{
  title: "AI Chatbot",
  description:
    "Full-stack AI chatbot built with Next.js and TypeScript using OpenRouter API. Features real-time messaging, conversation history, and intelligent responses with a clean UI.",
  tags: ["Next.js", "TypeScript", "OpenRouter API", "Tailwind CSS"],
  github: "https://github.com/jeevanthomas7/PortFolio-website",
  demo: "https://sky-chat-ai.vercel.app/",
  image: Chatbot,
},
  {
    title: "Smart Car Control System",
    description:
      "Real-time wireless car control with sensor monitoring. Built for IoT performance and low-latency response.",
    tags: ["Android", "IoT", "C++"],
    github: "#",
    demo: "#",
    image: SmartCar,
  },
];


const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-slate-900"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto mb-10 rounded-full"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
                        A selection of my best work, ranging from AI systems to IoT and full-stack applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 border-b border-slate-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">View Details</span>
                                </div>
                            </div>

                            <div className="p-8 flex-grow">
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
                                <h3 className="text-xl font-black mb-3 text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 mb-6 leading-relaxed text-sm font-medium">
                                    {project.description}
                                </p>
                            </div>

                            <div className="p-8 pt-0 flex gap-4 mt-auto">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;