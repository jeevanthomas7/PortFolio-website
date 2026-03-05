import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
                setFormData({ user_name: "", user_email: "", message: "" });
            }, () => {
                setStatus({ type: "error", message: "Something went wrong. Please try again." });
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setStatus({ type: "", message: "" }), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 bg-bgSection overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-slate-900">Get In Touch</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto mb-10 rounded-full"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl flex-shrink-0 shadow-sm border border-borderColor group-hover:bg-primary group-hover:text-white transition-all">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Email</p>
                                        <a href="mailto:jeevanthomas717@gmail.com" className="text-slate-900 font-bold text-lg hover:text-primary transition-colors">
                                            jeevanthomas717@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl flex-shrink-0 shadow-sm border border-borderColor group-hover:bg-primary group-hover:text-white transition-all">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Location</p>
                                        <p className="text-slate-900 font-bold text-lg">Wayanad, Kerala</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-borderColor/50">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Social Connections</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/jeevan-thomas-", label: "LinkedIn" },
                                    { icon: FaGithub, href: "https://github.com/jeevanthomas7", label: "GitHub" },
                                    { icon: FaEnvelope, href: "mailto:jeevanthomas717@gmail.com", label: "Email" }
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target={item.href !== "#" ? "_blank" : undefined}
                                        rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                                        className="w-14 h-14 bg-white border border-borderColor rounded-2xl flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all text-2xl shadow-sm"
                                    >
                                        <item.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form ref={form} onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-borderColor/50 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white outline-none transition-all text-sm font-bold resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-white py-4.5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-hover hover:shadow-lg transition-all active:scale-95 shadow-md disabled:opacity-70"
                            >
                                {loading ? "Sending Message..." : "Send Message"}
                            </button>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl text-center text-xs font-black uppercase tracking-widest ${status.type === "success" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
