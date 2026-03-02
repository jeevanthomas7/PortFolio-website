import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-bgSection overflow-hidden border-y border-borderColor/50">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-slate-900 tracking-tight">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                            Detail-oriented MERN Stack Developer experienced in building scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                            Strong in RESTful APIs, JWT authentication, Redux state management, and responsive UI development. I focus on creating clean, efficient, and user-centric solutions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Full Stack Development",
                                "REST API Development",
                                "Responsive UI Design",
                                "Authentication & Security"
                            ].map((strength) => (
                                <div key={strength} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-borderColor/60">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                    <span className="font-semibold text-slate-700 text-sm">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-borderColor/60 relative"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary tracking-tight">Core Expertise</h3>
                        <p className="text-slate-600 text-base mb-6 font-medium italic border-l-4 border-primary/30 pl-4 leading-relaxed">
                            "Building production-ready applications with a focus on scalability and clean architecture."
                        </p>
                        <ul className="space-y-4 text-slate-600 text-sm md:text-base font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-5 text-center">🎓</span> Diploma in Computer Engineering
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 text-center">📍</span> Wayanad, Kerala
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 text-center">📧</span> jeevanthomas717@gmail.com
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 text-center">💬</span> Passionate about MERN & Next.js
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 text-center">🚀</span> Always learning new technologies
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
