//import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Button
 * Futuristic HUD-style button.
 *
 * Props:
 * - children: label content
 * - variant: "primary" | "outline" | "ghost"  (default: "primary")
 * - size: "md" | "sm" (default: "md")
 * - href: if provided, renders an <a>, otherwise a <button>
 * - icon: show trailing arrow icon (default: true)
 * - onClick, type, className: passthrough
 */
export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   href,
                                   icon = true,
                                   onClick,
                                   type = "button",
                                   className = "",
                               }) {
    const base =
        "group relative inline-flex items-center justify-center gap-2 font-display font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6ee7f9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f] disabled:opacity-40 disabled:cursor-not-allowed";

    const sizes = {
        md: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
    };

    const variants = {
        primary:
            "bg-gradient-to-r from-[#6ee7f9] to-[#a78bfa] text-[#05070f] shadow-[0_0_0_1px_rgba(110,231,249,0.4)] hover:shadow-[0_0_28px_rgba(110,231,249,0.55)] hover:-translate-y-0.5",
        outline:
            "border border-[#2c3554] text-[#e8eaf6] hover:border-[#6ee7f9] hover:text-[#6ee7f9] hover:shadow-[0_0_18px_rgba(110,231,249,0.25)]",
        ghost:
            "text-[#8992b8] hover:text-[#6ee7f9]",
    };

    const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    const content = (
        <>
            <span className="relative z-10">{children}</span>
            {icon && (
                <ArrowUpRight
                    size={size === "sm" ? 14 : 16}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            )}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {content}
        </button>
    );
}
