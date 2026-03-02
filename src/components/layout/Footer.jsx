import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-white border-t border-borderColor/30">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                <div className="flex justify-center space-x-6 mb-4 text-slate-400">
                    <a href="#" className="hover:text-primary transition-colors text-xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/jeevan-thomas-" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:jeevanthomas717@gmail.com" className="hover:text-primary transition-colors text-xl">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                    © {currentYear} JEEVAN THOMAS. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
