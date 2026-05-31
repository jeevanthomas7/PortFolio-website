import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetail = ({ project, onBack }) => {
    return (
        <section id="projects" className="pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 bg-bgSection overflow-hidden animate-fadeIn">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary mb-8 transition-colors cursor-pointer group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 p-4 rounded-[2rem] border border-borderColor/60 shadow-sm"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-borderColor/40 bg-slate-200">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col h-full"
                    >
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-slate-100 text-primary px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest border border-slate-200 shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-slate-600 leading-relaxed text-base md:text-lg font-normal mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <a
                                href={project.github}
                                target={project.github !== "#" ? "_blank" : undefined}
                                rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-md active:scale-95 text-center"
                            >
                                <FaGithub size={16} /> GitHub Repository
                            </a>
                            <a
                                href={project.demo}
                                target={project.demo !== "#" ? "_blank" : undefined}
                                rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95 text-center"
                            >
                                <FaExternalLinkAlt size={14} /> Live Demonstration
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
