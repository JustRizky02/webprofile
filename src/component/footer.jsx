import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const SOCIALS = [
    { icon: FaGithub, href: "https://github.com/JustRizky02", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-rizky-herdiansyah-a00379310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/justrizky02?igsh=MXhsY2hyMDJ0eXd3dg==", label: "Instagram" },
    { icon: Mail, href: "rizky30054@gmail.com", label: "Email" },
];

const LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
    return (
        <footer className="relative border-t border-[#232b45] bg-[#05070f]">
            <div className="grid-bg absolute inset-0 opacity-40" />

            <div className="relative mx-auto max-w-6xl px-6 py-16">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">

                    {/* Brand */}
                    <section>
                        <div className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[#6ee7f9]" />
                            </span>

                            MRH<span className="text-[#6ee7f9]">.</span>FS
                        </div>

                        <p className="max-w-sm text-sm leading-relaxed text-[#8992b8]">
                            Building interfaces and systems at the edge of what browsers can do.
                            Currently taking on select freelance and collaboration work.
                        </p>
                    </section>


                    {/* Navigation */}
                    <section>
                        <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                            Navigate
                        </h4>

                        <ul className="space-y-3">
                            {LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-[#8992b8] transition-colors duration-200 hover:text-[#e8eaf6]"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>


                    {/* Social */}
                    <section>
                        <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                            Connect
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            {SOCIALS.map(
                                ({ icon: Icon, href, label, external }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noopener noreferrer" : undefined}
                                        aria-label={label}
                                        className="
                                            flex h-10 w-10 items-center justify-center
                                            rounded-lg border border-[#232b45]
                                            text-[#8992b8] transition-all duration-200
                                            hover:-translate-y-0.5
                                            hover:border-[#6ee7f9]/50
                                            hover:text-[#6ee7f9]
                                        "
                                    >
                                        <Icon size={16} />
                                    </a>
                                )
                            )}
                        </div>
                    </section>

                </div>


                {/* Bottom bar */}
                <div
                    className="
                        mt-14 flex flex-col items-center justify-between gap-4
                        border-t border-[#232b45] pt-6 font-mono
                        text-[11px] uppercase tracking-widest text-[#8992b8]
                        sm:flex-row
                    "
                >

                    <p>
                        © {2026} Muhammad Rizky Herdiansyah — Build With Love
                    </p>


                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#6ee7f9]" />
                        <span>Status: Online</span>
                    </div>


                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="
                            flex items-center gap-1.5
                            text-[#8992b8] transition-colors duration-200
                            hover:text-[#6ee7f9]
                        "
                    >
                        Back to top
                        <ArrowUp size={12} />
                    </a>

                </div>

            </div>
        </footer>
    );
}

export default Footer;