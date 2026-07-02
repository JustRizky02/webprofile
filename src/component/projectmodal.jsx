import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = project?.images ?? [];

    // Reset ke slide pertama tiap kali project berganti
    useEffect(() => {
        setActiveIndex(0);
    }, [project]);

    // Auto-slide, hanya jalan kalau gambar lebih dari satu
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((i) => (i + 1) % images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [images.length]);

    // Tutup pakai ESC + kunci scroll body selama modal terbuka
    useEffect(() => {
        if (!project) return;
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-[#05070f]/80 backdrop-blur-sm animate-fade-in" />

            <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-[#232b45] bg-[#0d1120] shadow-[0_0_60px_rgba(110,231,249,0.12)] animate-modal-in md:grid-cols-2"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#232b45] bg-[#0d1120]/80 text-[#8992b8] transition-colors hover:border-[#6ee7f9]/50 hover:text-[#6ee7f9]"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {/* kiri: carousel gambar */}
                <div className="relative h-64 bg-[#141a2e] md:h-full">
                    {images.length > 0 ? (
                        <>
                            <div
                                className="flex h-full transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {images.map((src, i) => (
                                    <img
                                        key={src + i}
                                        src={src}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        className="h-full w-full flex-shrink-0 object-cover"
                                    />
                                ))}
                            </div>

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() =>
                                            setActiveIndex((i) => (i - 1 + images.length) % images.length)
                                        }
                                        className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#05070f]/60 text-[#e8eaf6] transition-colors hover:bg-[#05070f]/90"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#05070f]/60 text-[#e8eaf6] transition-colors hover:bg-[#05070f]/90"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={18} />
                                    </button>

                                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveIndex(i)}
                                                aria-label={`Go to image ${i + 1}`}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                                    i === activeIndex
                                                        ? "w-5 bg-[#6ee7f9]"
                                                        : "w-1.5 bg-[#8992b8]/50"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-[#8992b8]">
                            No preview available
                        </div>
                    )}
                </div>

                {/* kanan: teks */}
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                    {project.index && (
                        <span className="font-mono text-xs text-[#6ee7f9]">{project.index}</span>
                    )}
                    <h3 className="font-display text-2xl font-semibold text-[#e8eaf6]">
                        {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#8992b8]">
                        {project.description}
                    </p>
                    {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-[#232b45] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#8992b8]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}