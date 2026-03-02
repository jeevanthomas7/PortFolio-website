import { motion } from "framer-motion";

const experiences = [
    {
        title: "MERN Full-Stack Developer Intern",
        company: "OneTeam Solutions",
        period: "July 2025 – Jan 2026",
        responsibilities: [
            "Developed full-stack features using React.js and Node.js",
            "Designed RESTful APIs and CRUD operations",
            "Integrated MongoDB database",
            "Built reusable responsive UI components",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-bgSection overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-16 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative pl-6 md:pl-10 pb-12 border-l-2 border-primary/20 last:pb-0"
                        >
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-primary rounded-full z-10"></div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-borderColor">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-textPrimary tracking-tight">{exp.title}</h3>
                                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                                    </div>
                                    <div className="bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2 text-textSecondary text-base">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-primary mr-3 mt-2 flex-shrink-0 text-[10px]">●</span>
                                            <span className="leading-relaxed">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
