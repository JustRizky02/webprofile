import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Button from "./component/Button";
import { Mail, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ProjectModal from "./component/projectmodal.jsx";
import { PROJECTS } from "./data/projects";
import { TECHNICAL_SKILLS, PROFESSIONAL_SKILLS } from "./data/skills";

export default function App() {
    const heroRef = useRef(null);
    const gridRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const hero = heroRef.current;
        const grid = gridRef.current;
        if (!hero || !grid) return;

        let raf;
        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const maxOffset = 16;
                grid.style.transform = `translate(${x * maxOffset}px, ${y * maxOffset}px)`;
            });
        };

        hero.addEventListener("mousemove", handleMouseMove);
        return () => {
            hero.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);
    return (
        <div className="min-h-screen bg-[#05070f] text-[#e8eaf6] selection:bg-[#6ee7f9] selection:text-[#05070f]">
            <Navbar/>

            {/* ---------- HERO ---------- */}
            <section
                id="home"
                ref={heroRef}
                className="relative flex min-h-screen items-center overflow-hidden pt-24"
            >
                <div ref={gridRef} className="grid-bg absolute -inset-4 transition-transform duration-300 ease-out"/>
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6ee7f9]/70 to-transparent animate-scan"/>
                <div
                    className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#a78bfa]/10 blur-[100px]"/>
                <div
                    className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#6ee7f9]/10 blur-[110px]"/>

                <div
                    className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <div
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#232b45] bg-[#0d1120] px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#8992b8]">
                            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#6ee7f9]"/>
                            Available for new projects and jobs
                        </div>

                        <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
                            MUHAMMAD RIZKY HERDIANSYAH —{" "}
                            <span
                                className="bg-gradient-to-r from-[#6ee7f9] to-[#a78bfa] bg-clip-text text-transparent">
                Interfaces
              </span>{" "}
                            built like systems.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#8992b8]">
                            I'm a Fullstack Developer and creative technologist passionate about
                            building products across web, mobile, and IoT that feel precise,
                            fast, and a little bit alive.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Button href="#work" variant="primary">View Work</Button>
                            <Button href="#contact" variant="outline">Get in Touch</Button>
                        </div>
                        {/*<div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[#232b45] pt-6 font-mono">*/}
                        {/*    <div>*/}
                        {/*        <p className="text-2xl font-semibold text-[#e8eaf6]">6+</p>*/}
                        {/*        <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8992b8]">Years exp.</p>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <p className="text-2xl font-semibold text-[#e8eaf6]">40+</p>*/}
                        {/*        <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8992b8]">Projects</p>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <p className="text-2xl font-semibold text-[#e8eaf6]">12</p>*/}
                        {/*        <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8992b8]">Countries*/}
                        {/*            served</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/* Orbit avatar — signature element */}
                    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
                        {/* Orbit luar: ring + dot jadi satu, sama-sama rotate */}
                        <div className="absolute inset-0 animate-orbit-slow">
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#232b45]"/>
                            <span
                                className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6ee7f9] shadow-[0_0_12px_2px_rgba(110,231,249,0.8)]"/>
                        </div>

                        {/* Orbit dalam: arah sebaliknya */}
                        <div className="absolute inset-6 animate-orbit-slow-reverse">
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#232b45]"/>
                            <span
                                className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]"/>
                        </div>
                        <div
                            className="animate-float flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-[#141a2e] to-[#0d1120] shadow-[0_0_60px_rgba(110,231,249,0.15)] ring-1 ring-[#232b45] sm:h-56 sm:w-56">
                            <span className="font-display text-5xl font-semibold text-[#6ee7f9]">MRH</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- ABOUT ---------- */}
            <section id="about" className="relative border-t border-[#232b45] py-24">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[0.4fr_0.6fr]">

                    {/* Kiri: foto + shape animasi */}
                    <div className="relative mx-auto flex h-[26rem] w-72 items-end justify-center sm:h-[30rem] sm:w-80">
                        {/* Blob cahaya bergerak pelan di belakang */}
                        <div className="animate-blob pointer-events-none absolute -left-6 top-6 h-40 w-40 rounded-full bg-[#a78bfa]/20 blur-3xl" />
                        <div
                            className="animate-blob pointer-events-none absolute -bottom-4 -right-4 h-44 w-44 rounded-full bg-[#6ee7f9]/20 blur-3xl"
                            style={{ animationDelay: "3s" }}
                        />

                        {/* Ring dashed berputar */}
                        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-orbit-slow sm:h-80 sm:w-80">
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#232b45]" />
                            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6ee7f9] shadow-[0_0_12px_2px_rgba(110,231,249,0.8)]" />
                        </div>

                        {/* Ring dashed kedua, lebih kecil, arah sebaliknya */}
                        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-orbit-slow-reverse sm:h-64 sm:w-64">
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#232b45]/60" />
                            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]" />
                        </div>

                        {/* Foto — transparan, tanpa frame/background, cuma float */}
                        <img
                            src="./bgputih.png"
                            alt="Muhammad Rizky Herdiansyah"
                            className="animate-float relative z-10 h-full w-auto object-contain"
                        />
                    </div>

                    {/* Kanan: deskripsi diri */}
                    <div className="space-y-5 text-[#8992b8]">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                            // About
                        </p>
                        <h2 className="font-display text-3xl font-semibold text-[#e8eaf6] sm:text-4xl">
                            Precision on the surface, structure underneath.
                        </h2>
                        <p className="leading-relaxed">
                            I'm a Computer Science graduate from Bandung National Institute of
                            Technology, graduating in February 2026 with a GPA of 3.53. I have a
                            strong interest in full-stack development, mobile development, and
                            IoT engineering — backed by fluent English communication,
                            leadership, and a fast-learning, highly adaptable mindset that lets
                            me pick up new tools and domains quickly.
                        </p>
                        <p className="leading-relaxed">
                            I began my professional journey with an internship at PT.
                            Dirgantara Indonesia as a Security Engineer on the Purple Team,
                            from July to September 2023. That same September, I took part in a
                            student exchange program at UCSI Malaysia organized by my
                            university, and later that year served as part of the graduation
                            protocol team. I then went on to become a laboratory assistant for
                            IoT practicums, first from September 2024 to January 2025, and
                            again from October 2025 to January 2026.
                        </p>
                        <div className="flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-widest text-[#8992b8]">
                            <MapPin size={14} className="text-[#6ee7f9]" />
                            Bandung, West Java, Indonesia — Remote friendly
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- SKILLS ---------- */}
            <section id="skills" className="relative border-t border-[#232b45] bg-[#0a0d18] py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14 max-w-xl">
                        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                            // Capabilities
                        </p>
                        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                            A toolkit built for shipping, not just prototyping.
                        </h2>
                    </div>

                    {/* Technical Skills */}
                    <div className="mb-10">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#8992b8]">
                            Technical Skills
                        </p>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {TECHNICAL_SKILLS.map((skill) => (
                                <Card key={skill.title} {...skill} />
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div>
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#8992b8]">
                            Professional Skills
                        </p>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {PROFESSIONAL_SKILLS.map((skill) => (
                                <Card key={skill.title} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- WORK ---------- */}
            <section id="work" className="relative border-t border-[#232b45] py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14 max-w-xl">
                        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                            // Work
                        </p>
                        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                            Experience Working on Projects.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {PROJECTS.map((project) => (
                            <Card
                                key={project.index}
                                {...project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- CONTACT ---------- */}
            <section id="contact" className="relative border-t border-[#232b45] py-24">
                <div className="grid-bg absolute inset-0 opacity-40"/>
                <div className="relative mx-auto max-w-3xl px-6 text-center">
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                        // Contact
                    </p>
                    <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                        Have a project in mind? Let's build it right.
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-[#8992b8]">
                        Open to, work, freelance engagements, collaborations and
                        interesting technical problems. Usually replies within 24 hours.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=rizky30054@gmail.com&su=Project%20Inquiry"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            icon={false}
                        >
                            <span className="flex items-center gap-2">
                                <Mail size={16}/> rizky30054@gmail.com
                            </span>
                        </Button>
                        <Button href="#home" variant="outline">
                            Back to top
                        </Button>
                    </div>
                </div>
            </section>

            <Footer/>
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}