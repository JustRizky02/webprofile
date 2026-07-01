
/**
 * Hamburger
 * Animated 3-line -> X toggle icon button. Fully controlled.
 *
 * Props:
 * - isOpen: boolean current state
 * - onClick: () => void, toggles the parent's state
 * - className: passthrough
 */
export default function Hamburger({ isOpen, onClick, className = "" }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#232b45] bg-[#0d1120]/80 transition-colors duration-300 hover:border-[#6ee7f9]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6ee7f9] md:hidden ${className}`}
        >
      <span className="relative flex h-4 w-5 flex-col justify-between">
        <span
            className={`h-[2px] w-full origin-left rounded-full bg-[#e8eaf6] transition-all duration-300 ${
                isOpen ? "translate-x-0.5 rotate-45 bg-[#6ee7f9]" : ""
            }`}
        />
        <span
            className={`h-[2px] w-full rounded-full bg-[#e8eaf6] transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
            className={`h-[2px] w-full origin-left rounded-full bg-[#e8eaf6] transition-all duration-300 ${
                isOpen ? "translate-x-0.5 -rotate-45 bg-[#6ee7f9]" : ""
            }`}
        />
      </span>
        </button>
    );
}
