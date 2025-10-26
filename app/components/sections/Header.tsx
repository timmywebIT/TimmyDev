'use client'

import { motion } from "motion/react"

export function Header() {
    return (
        <section className="">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold p-4 text-2xl"
            >
                Timmy<span className="text-pink-500">Dev</span>
            </motion.h1>
        </section>
    );
}