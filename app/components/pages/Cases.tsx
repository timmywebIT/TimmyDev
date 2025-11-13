'use client'

import {motion} from "motion/react"

export function Cases() {
    return (
        <section>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-center"
            >
                <h2 className="font-bold text-4xl mb-8">
                    Кейсы
                </h2>
                <div className="mt-10 justify-center flex flex-wrap space-x-10">
                    <div className="bg-white p-4 rounded-xl w-1/4 h-60 text-black ">
                        <p className="">Название:<span>Интернет-магащин</span></p>
                        <p className="">Описание:<span>Интернет-магащин</span></p>
                        <p className="">Стек:<span>Интернет-магащин</span></p>
                        <a href="#">Посмотреть</a>
                    </div>
                    <div className="bg-white p-4 rounded-xl w-1/4 h-60 text-black ">
                        <p className="">Название:<span>Интернет-магащин</span></p>
                        <p className="">Описание:<span>Интернет-магащин</span></p>
                        <p className="">Стек:<span>Интернет-магащин</span></p>
                        <a href="#">Посмотреть</a>
                    </div>
                    <div className="bg-white p-4 rounded-xl w-1/4 h-60 text-black ">
                        <p className="">Название:<span>Интернет-магащин</span></p>
                        <p className="">Описание:<span>Интернет-магащин</span></p>
                        <p className="">Стек:<span>Интернет-магащин</span></p>
                        <a href="#">Посмотреть</a>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}