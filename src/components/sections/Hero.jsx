import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaEye } from "react-icons/fa";
import Button from "../ui/Button";

const StatChip = ({ value, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="bg-white border border-borderColor rounded-xl px-4 py-3 shadow-sm text-center flex-1 min-w-[80px]"
    >
        <p className="text-lg font-black text-primary leading-none">{value}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</p>
    </motion.div>
);

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-24 pb-5 bg-white relative overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                    <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-slate-400 font-medium tracking-[0.2em] text-xs md:text-sm mb-4 uppercase"
                        >
                            HELLO
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-[#0F172A] mb-4 tracking-tight"
                        >
                            I'm <span className="text-[#0F172A]">JEEVAN THOMAS</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent pb-1 inline-block">
                                Full Stack Developer (MERN)
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 font-normal max-w-2xl"
                        >
                            I design and develop scalable MERN stack applications with clean architecture, intuitive user experiences, and high-performance backend systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
                        >
                            <a href="#projects" className="w-full sm:w-auto">
                                <Button className="w-full sm:min-w-[168px] py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20">
                                    <FaEye className="text-base" />
                                    View Projects
                                </Button>
                            </a>
                            <a href="/Jeevan_Thomas_Resume.pdf" download="Jeevan_Thomas_Resume.pdf" className="w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    className="w-full sm:min-w-[168px] py-3.5 rounded-xl text-sm font-bold border-2"
                                >
                                    <FaDownload className="text-base" />
                                    Download CV
                                </Button>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
                                Connect
                            </span>
                            <div className="h-px w-8 bg-slate-200 hidden sm:block" />
                            {[
                                {
                                    icon: FaGithub,
                                    href: "https://github.com/jeevanthomas7",
                                    label: "GitHub",
                                },
                                {
                                    icon: FaLinkedin,
                                    href: "https://www.linkedin.com/in/jeevan-thomas-",
                                    label: "LinkedIn",
                                },
                                {
                                    icon: FaEnvelope,
                                    href: "mailto:jeevanthomas717@gmail.com",
                                    label: "Email",
                                },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-xl border border-borderColor flex items-center justify-center text-slate-500 text-xl hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300 hover:scale-110 active:scale-95 bg-white"
                                >
                                    <s.icon />
                                </a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-3 mt-10 w-full max-w-xs lg:mx-0 mx-auto"
                        >
                            <StatChip value="1+" label="Years Exp" delay={0.75} />
                            <StatChip value="10+" label="Projects" delay={0.8} />
                            <StatChip value="MERN" label="Stack" delay={0.85} />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 hidden lg:flex justify-center items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative w-full max-w-[380px] xl:max-w-[410px]"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-[2.5rem] blur-2xl opacity-75 -z-10" />
                            
                            <div className="relative w-full aspect-[9/10] bg-[#0A0F1D] border border-slate-800/80 rounded-[2rem] p-6 shadow-2xl flex flex-col font-mono text-[11px] leading-relaxed text-slate-300">
                                <div className="flex gap-1.5 mb-8 select-none">
                                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>

                                <div className="flex-grow space-y-1.5 select-none text-left">
                                    <div>
                                        <span className="text-[#F43F5E] font-bold">const</span> <span className="text-[#38BDF8]">developer</span> <span className="text-[#F43F5E]">=</span> <span className="text-white">&#123;</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-[#94A3B8]">name:</span> <span className="text-[#FBBF24]">"Jeevan Thomas"</span>,
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-[#94A3B8]">role:</span> <span className="text-[#FBBF24]">"MERN Stack"</span>,
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-[#94A3B8]">passion:</span> <span className="text-[#FBBF24]">"Clean Code"</span>,
                                    </div>
                                    <div className="pl-5 pt-1">
                                        <span className="text-[#C084FC]">buildApp</span><span className="text-white">()</span> <span className="text-white">&#123;</span>
                                    </div>
                                    <div className="pl-10">
                                        <span className="text-[#F43F5E] font-bold">return</span> <span className="text-[#38BDF8]">UI</span>.<span className="text-[#C084FC]">create</span><span className="text-white">(</span><span className="text-white">&#123;</span>
                                    </div>
                                    <div className="pl-15">
                                        <span className="text-[#94A3B8]">seamless:</span> <span className="text-[#38BDF8]">true</span>,
                                    </div>
                                    <div className="pl-15">
                                        <span className="text-[#94A3B8]">scalable:</span> <span className="text-[#38BDF8]">true</span>
                                    </div>
                                    <div className="pl-10">
                                        <span className="text-white">&#125;</span><span className="text-white">)</span>;
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-white">&#125;</span>
                                    </div>
                                    <div>
                                        <span className="text-white">&#125;</span>;
                                    </div>
                                </div>

                                <div className="absolute bottom-6 right-8 text-3xl font-black text-slate-800/20 select-none tracking-wider font-sans">
                                    JT
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute -top-6 -left-8 bg-white/95 backdrop-blur-sm border border-borderColor px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 select-none transform hover:scale-105 transition-transform duration-300">
                                    <span className="text-xs">⚛️</span>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 font-sans">React</span>
                                </div>

                                <div className="absolute -top-3 -right-8 bg-white/95 backdrop-blur-sm border border-borderColor px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 select-none transform hover:scale-105 transition-transform duration-300">
                                    <span className="text-xs">🟢</span>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 font-sans">Node.js</span>
                                </div>

                                <div className="absolute bottom-12 -left-12 bg-white/95 backdrop-blur-sm border border-borderColor px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 select-none transform hover:scale-105 transition-transform duration-300">
                                    <span className="text-xs">🚂</span>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 font-sans">Express</span>
                                </div>

                                <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-sm border border-borderColor px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 select-none transform hover:scale-105 transition-transform duration-300">
                                    <span className="text-xs">🍃</span>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 font-sans">MongoDB</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
