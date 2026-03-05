import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";
import cv from "../../img/Jeevan_Thomas.pdf";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
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
                    className="text-4xl md:text-7xl font-extrabold text-[#0F172A] mb-4 tracking-tight"
                >
                    I'm <span className="text-[#0F172A]">JEEVAN THOMAS</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-5xl font-bold mb-8"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent pb-1 inline-block">
                        Full Stack Developer (MERN)
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-3xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed mb-10 px-4 font-normal"
                >
                    I craft modern, scalable full-stack applications that combine clean architecture, seamless user experiences, and performance-driven backend systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                >
                    <a href="#projects" className="w-full sm:w-auto">
                        <Button className="w-full sm:min-w-[160px] py-3 rounded-lg text-sm font-bold shadow-md shadow-primary/10">
                            View Projects
                        </Button>
                    </a>
                  <a href={cv} download className="w-full sm:w-auto">
    <Button variant="outline" className="w-full sm:min-w-[160px] py-3 rounded-lg text-sm font-bold border-2">
        Download CV
    </Button>
</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center items-center gap-6 text-2xl text-slate-700"
                >
                    {[
                        { icon: FaGithub, href: "https://github.com/jeevanthomas7" },
                        { icon: FaEnvelope, href: "mailto:jeevanthomas717@gmail.com" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/jeevan-thomas-", color: "hover:text-primary" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target={social.href !== "#" ? "_blank" : undefined}
                            rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                            className="transition-all duration-300 hover:scale-110 active:scale-95 text-slate-700 hover:text-primary"
                        >
                            <social.icon />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
