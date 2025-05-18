// This file contains constants used throughout the application;

export const containerVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
            duration: 0.5,
        },
    },
};

export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
        },
    },
};

export const buttonVariants = {
    scale: 1.05,
    transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
    },
};
