'use client'

import { motion } from "motion/react"
import { useState } from "react"

interface CartProps {
    title: string
    description: string
    stack: string
}


export function Cart({ title, description, stack }: CartProps) {

    const [flipped, setFlipped] = useState(false)

    return (
        <div className="w-2/9 bg-pink-300 h-60 rounded-2xl" onClick={() => setFlipped(!flipped)}>
            <div className="flex items-center justify-center backface-hidden">
                <h2 className="text-gray-100 text-2xl">{title}</h2>
            </div>
            <motion.div
                className="relative w-full h-full transition-transform duration-500 preserve-3d"
                animate={{ rotateY: flipped ? 180 : 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
            >
            </motion.div>

        </div>
    );
}




