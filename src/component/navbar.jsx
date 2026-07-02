import Hamburger from "./hamburger.jsx";
import Button from "./button.jsx";
import {useEffect, useState} from "react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

/**
 * Navbar
 * Sticky glass navbar. Collapses into a slide-down panel on mobile,
 * driven by the Hamburger component.
 */
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
                scrolled ? "glass border-b border-[#232b45]" : "border-b border-transparent"
            }`}
        >
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Logo / status pill */}
                <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[#6ee7f9]" />
          </span>
                    <span>
            MRH<span className="text-[#6ee7f9]">.</span>FS
          </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#8992b8] md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="relative transition-colors duration-200 hover:text-[#6ee7f9]"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <Button href="#contact" size="sm" variant="outline">
                        Let's Talk
                    </Button>
                </div>

                <Hamburger isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
            </nav>

            {/* Mobile slide-down panel */}
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="min-h-0">
                    <ul className="glass flex flex-col gap-1 border-b border-[#232b45] px-6 pb-6 pt-2 font-mono text-sm uppercase tracking-widest text-[#8992b8]">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#141a2e] hover:text-[#6ee7f9]"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button href="#contact" onClick={closeMenu} className="w-full">
                                Let's Talk
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
