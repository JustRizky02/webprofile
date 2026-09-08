import { ArrowUpRight } from "lucide-react";

function Card(props) {
    const {
        icon: Icon,
        index,
        title,
        description,
        tags = [],
        href,
        onClick,
    } = props;

    const isInteractive = Boolean(href || onClick);

    return (
        <div
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={
                onClick
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onClick(e);
                        }
                    }
                    : undefined
            }
            className={`
                group relative flex h-full flex-col justify-between
                overflow-hidden rounded-2xl border border-[#232b45]
                bg-[#0d1120] p-6 transition-all duration-300
                hover:-translate-y-1 hover:border-[#6ee7f9]/50
                hover:shadow-[0_0_32px_rgba(110,231,249,0.12)]
                ${isInteractive ? "cursor-pointer" : ""}
            `}
        >
            {/* link wrapper hanya jika href ada DAN tidak ada onClick */}
            {href && !onClick && (
                <a href={href} className="absolute inset-0 z-20" />
            )}

            {/* corner brackets */}
            <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#6ee7f9]/0 transition-colors duration-300 group-hover:border-[#6ee7f9]/70" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#6ee7f9]/0 transition-colors duration-300 group-hover:border-[#6ee7f9]/70" />

            {/* glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#6ee7f9]/0 blur-3xl transition-all duration-500 group-hover:bg-[#6ee7f9]/10" />

            {/* content */}
            <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                    {Icon && (
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#232b45] bg-[#141a2e] text-[#6ee7f9] transition-colors duration-300 group-hover:border-[#6ee7f9]/50">
                            <Icon size={20} strokeWidth={1.75} />
                        </div>
                    )}
                    {index && (
                        <span className="font-mono text-xs text-[#8992b8]">{index}</span>
                    )}
                </div>

                <h3 className="mb-2 font-display text-lg font-semibold text-[#e8eaf6]">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8992b8]">
                    {description}
                </p>
            </div>

            {/* footer */}
            <div className="relative z-10 mt-6 flex items-center justify-between">
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-[#232b45] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#8992b8]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {isInteractive && (
                    <ArrowUpRight
                        size={18}
                        className="ml-auto text-[#8992b8] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6ee7f9]"
                    />
                )}
            </div>
        </div>
    );
}

export default Card;