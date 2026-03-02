import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = ({ className, variant = "primary", children, ...props }) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-hover hover:shadow-primary/40 active:scale-[0.98] shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.98]",
    };

    return (
        <button
            className={cn(
                "px-10 py-3.5 rounded-2xl font-black transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 text-sm uppercase tracking-widest",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
