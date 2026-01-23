import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn" | "scaleUp";
}

const animationClasses = {
    fadeUp: {
        hidden: "opacity-0 translate-y-10",
        visible: "opacity-100 translate-y-0",
    },
    fadeLeft: {
        hidden: "opacity-0 -translate-x-10",
        visible: "opacity-100 translate-x-0",
    },
    fadeRight: {
        hidden: "opacity-0 translate-x-10",
        visible: "opacity-100 translate-x-0",
    },
    fadeIn: {
        hidden: "opacity-0",
        visible: "opacity-100",
    },
    scaleUp: {
        hidden: "opacity-0 scale-95",
        visible: "opacity-100 scale-100",
    },
};

export const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    animation = "fadeUp",
}: AnimatedSectionProps) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const { hidden, visible } = animationClasses[animation];

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? visible : hidden
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
