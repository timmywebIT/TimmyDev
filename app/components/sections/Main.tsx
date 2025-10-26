'use client'

import { motion } from "motion/react"
import { Cart } from "@/app/components/ui/Cart";

export function Main() {
    return (
        <section >
            <div className="flex justify-center mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold p-4 text-4xl"
                >
                    Projects
                </motion.h2>
            </div>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Cart
                        title="Vizual Habbit"
                        description="Добавь описание здесь"
                        stack="Технологии которые использовались"
                    />
                </motion.div>
            </div>
        </section>
    );
}