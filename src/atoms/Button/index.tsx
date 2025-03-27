import { cn } from "../../lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    variant?: "gradient" | "default";
    onclick?: () => void;
}

const Button = ({
    variant,
    children,
    className,
    onclick,
    ...props
}: ButtonProps) => {
    const baseStyles =
        "bg-[#00ffff] text-[#000022] px-6 py-3 rounded-[15px] font-bold hover:bg-[#008888] transition-all duration-300 flex items-center gap-4 font-light"
    const gradientStyles =
        "bg-gradient-to-r from-[#bbf737] to-[#ffee62] border-none px-6 py-2.5 text-[15px] rounded-md";

    return (
        <button
            type="button"
            onClick={onclick}
            {...props}
            className={cn(
                "cursor-pointer", variant === "gradient" ? gradientStyles : baseStyles,
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
