import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logoname.png";

const Footer = ({ onHomeLink }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-10 pb-4 lg:py-12 bg-white border-t border-borderColor/50">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onHomeLink) {
                                    onHomeLink();
                                }
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                window.history.pushState(null, null, "/");
                            }}
                            className="flex items-center justify-center md:justify-start transition-transform hover:scale-105"
                        >
                            <img
                                src={logo}
                                alt="Jeevan Thomas"
                                className="h-7 md:h-8 w-auto object-contain"
                            />
                        </a>
                        <p className="text-xs font-semibold text-slate-400 mt-3 max-w-xs leading-relaxed">
                            MERN Stack Developer building responsive & scalable web solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-slate-500">
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: FaGithub, href: "https://github.com/jeevanthomas7" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/jeevan-thomas-" },
                            { icon: FaEnvelope, href: "mailto:jeevanthomas717@gmail.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="w-10 h-10 bg-slate-50 hover:bg-primary/5 hover:text-primary border border-borderColor/80 rounded-xl flex items-center justify-center text-slate-500 transition-all shadow-sm"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-borderColor/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-slate-400 font-medium">
                    <p>© {currentYear} Jeevan Thomas. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Built with React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
