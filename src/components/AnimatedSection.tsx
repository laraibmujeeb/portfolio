import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn" | "scaleUp";
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
};

export const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    animation = "fadeUp",
}: AnimatedSectionProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants[animation]}
            transition={{
                duration: 0.7,
                delay: delay / 1000,
                ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
