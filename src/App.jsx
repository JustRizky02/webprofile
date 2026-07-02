import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Button from "./component/Button";
import {
    Code2,
    Smartphone,
    Flame,
    Globe,
    Terminal,
    Server,
    Database,
    Braces,
    Brain,
    Cpu,
    Languages,
    Component,
    Users,
    Zap,
    Clock,
    Mail,
    MapPin,
} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";
import ProjectModal from "./component/projectmodal.jsx";



const PROJECTS = [
    {
        index: "01",
        title: "Monclair Infrastructure",
        description: "A single-page, interactive, and responsive website for a dummy company profile, built using Tailwind and HTML.",
        tags: ["Tailwind", "HTML"],
        media: [
            {type:"video", src:"./monclair/2mon.mp4"},
            {type:"video", src:"./monclair/3mon.mp4"},
            {type:"video", src:"./monclair/4mon.mp4"}
        ],
    },
    {
        index: "02",
        title: "learning outcomes website",
        description: "A website for tracking elementary school learning outcomes. This website allows users to monitor student grades, create exams, upload a question bank, and upload e-books.",
        tags: ["CSS", "React","express","OOP","MYSQL"],
        media: [
            { type: "image", src: "./Capaian/capai1.png" },
            { type: "image", src: "./Capaian/capai2.png" },
            { type: "image", src: "./Capaian/capai3.png" },
            { type: "image", src: "./Capaian/capai4.png" }
        ],
    },
    {
        index: "03",
        title: "Just-Weather",
        description: "A website for monitoring temperature, weather, wind direction, and wind speed that connects to IoT devices in real time using MQTT, an ExpressJS for backend, and MySQL as the database",
        tags: ["Flutter","express","OOP","IOT","MQTT","MYSQL"],
        media: [
            { type: "image", src: "./weather/img.png" },
            { type: "image", src: "./weather/img_1.png" },
            { type: "image", src: "./weather/img_2.png" },
            { type: "video", src: "./weather/video_iot.mp4" }
        ],
    },
];

const TECHNICAL_SKILLS = [
    { icon: Code2, title: "React", description: "Building fast, component-driven interfaces with reusable, scalable architecture.", tags: ["Hooks", "Vite", "SPA"] },
    { icon: Smartphone, title: "Flutter", description: "Cross-platform mobile apps from a single codebase with native-like performance.", tags: ["Dart", "Mobile", "iOS/Android"] },
    { icon: Flame, title: "Firebase", description: "Realtime databases, authentication, and hosting for rapid product development.", tags: ["Auth", "Firestore", "Hosting"] },
    { icon: Globe, title: "HTML", description: "Semantic, accessible markup as the structural foundation of every interface.", tags: ["Semantic", "A11y"] },
    { icon: Terminal, title: "Python", description: "Scripting, automation, and backend logic with clean, readable code.", tags: ["Scripting", "Automation"] },
    { icon: Server, title: "Express", description: "Lightweight Node.js backend services and RESTful API routing.", tags: ["Node", "REST API"] },
    { icon: Database, title: "MySQL", description: "Relational data modeling, queries, and schema design for structured data.", tags: ["SQL", "Relational"] },
    { icon: Braces, title: "JavaScript", description: "Core language powering interactive, dynamic experiences across the stack.", tags: ["ES6+", "Async"] },
    { icon: Brain, title: "Machine Learning", description: "Applying models and data pipelines to build intelligent, predictive features.", tags: ["Python", "Data"] },
    { icon: Cpu, title: "IoT", description: "Connecting embedded devices and sensors to build smart, data-driven systems.", tags: ["Embedded", "Sensors"] },
];

const PROFESSIONAL_SKILLS = [
    { icon: Languages, title: "Fluent English", description: "Comfortable communicating and documenting work for international teams.", tags: ["Communication"] },
    { icon: Component, title: "OOP", description: "Designing maintainable systems around objects, classes, and clean abstractions.", tags: ["Design Patterns"] },
    { icon: Users, title: "Leadership", description: "Guiding teams, mentoring engineers, and driving projects to completion.", tags: ["Mentoring", "Ownership"] },
    { icon: Zap, title: "Fast Learner", description: "Quickly picking up new tools, frameworks, and domains with minimal ramp-up time.", tags: ["Adaptability"] },
    { icon: Clock, title: "Time Management", description: "Prioritizing tasks effectively to consistently meet deadlines without sacrificing quality.", tags: ["Prioritization"] },
];


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
                            I'm a frontend engineer and creative technologist designing and
                            building products that feel precise, fast, and a little bit
                            alive. Currently crafting interfaces at the intersection of
                            design and engineering.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Button href="#work" variant="primary">View Work</Button>
                            <Button href="#contact" variant="outline">Get in Touch</Button>
                        </div>

                        <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[#232b45] pt-6 font-mono">
                            <div>
                                <p className="text-2xl font-semibold text-[#e8eaf6]">6+</p>
                                <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8992b8]">Years exp.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-[#e8eaf6]">40+</p>
                                <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8992b8]">Projects</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-[#e8eaf6]">12</p>
                                <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8992b8]">Countries
                                    served</p>
                            </div>
                        </div>
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
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.4fr_0.6fr]">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6ee7f9]">
                            // About
                        </p>
                        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                            Precision on the surface, structure underneath.
                        </h2>
                    </div>
                    <div className="space-y-5 text-[#8992b8]">
                        <p className="leading-relaxed">
                            I started out reverse-engineering interfaces I admired, then
                            spent the last six years building product for startups and
                            scale-ups — from early-stage dashboards to design systems used
                            by teams of fifty. I care equally about the pixel and the
                            architecture behind it.
                        </p>
                        <p className="leading-relaxed">
                            These days I split my time between hands-on engineering,
                            interface prototyping, and mentoring engineers who are moving
                            into design-adjacent roles. I'm based in Jakarta and work with
                            teams across time zones.
                        </p>
                        <div
                            className="flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-widest text-[#8992b8]">
                            <MapPin size={14} className="text-[#6ee7f9]"/>
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
