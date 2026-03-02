import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
        category: "Database",
        skills: ["MongoDB", "MySQL"],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "MongoDB Atlas"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-16 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-textSecondary max-w-2xl mx-auto">
                        A comprehensive list of my technical expertise across the MERN stack and modern web development tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-bgSection p-6 rounded-xl border border-borderColor hover:border-primary/30 transition-all duration-300 shadow-sm group"
                        >
                            <h3 className="text-lg font-bold mb-4 text-textPrimary group-hover:text-primary transition-colors uppercase tracking-wide">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white px-3 py-1.5 rounded text-xs font-semibold text-textSecondary border border-borderColor"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
