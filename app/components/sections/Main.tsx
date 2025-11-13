'use client'

import {motion} from "motion/react"

import { Cases } from "@/app/components/pages/Cases";


export function Main() {
    return (
        <section>
            <div className="text-center p-10">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="font-bold p-4 text-3xl"
                >
                    Минимализм и эффективность в каждом сайте и SaaS‑продукте
                </motion.h2>
            </div>
            <div className="">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="flex flex-col"
                >
                    <h2 className="font-bold text-4xl mb-8">
                        Обо мне
                    </h2>
                    <p className="font-bold text-2xl">
                        Привет! Я Тимофей
                    </p>
                    <span className="font-bold text-xl">
                    Фаундер, который превращает идеи в работающие цифровые продукты

                </span>
                    <span className="font-bold text-xl ">
                       Мой стек: JavaScript, TypeScript, React, Nest.js, PostgreSQL, Prisma
                    </span>
                <span className="mt-10 mb-20">
<a className="bg-pink-500 hover:bg-pink-600 p-4 text-white rounded-xl transition-colors duration-300"  href="https://t.me/timmydevs">Написать мне</a>                </span>
                    <Cases />
                </motion.div>

            </div>
        </section>
    );
}