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
                    <div className="bg-white p-4 rounded-xl w-1/4 h-60 text-black text-left transition-all duration-500
                hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                        <div className="relative">
                            <div className="flex">
                                <span className="font-bold">Timmy</span><span
                                className="text-pink-500 font-bold">Dev</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-0">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                            </div>
                            <p className="mt-3 font-bold text-xl">Проект:<span className="ml-1">Магазин котлов</span>
                            </p>
                            <p className="mt-2">Описание:<span
                                className="ml-1">Интернет-магазин для продажи котлов</span></p>
                            <a className="underline absolute right-0 -bottom-20" href="#">Посмотреть</a>
                        </div>

                    </div>
                    <div className="bg-white p-4 rounded-xl w-1/4 h-60 text-black text-left transition-all duration-500
                 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                        <div className="relative">
                            <div className="flex">
                                <span className="font-bold">Timmy</span><span
                                className="text-pink-500 font-bold">Dev</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-0">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                            </div>
                            <p className="mt-3 font-bold text-xl">Проект:<span className="ml-1">Магазин котлов</span>
                            </p>
                            <p className="mt-2">Описание:<span
                                className="ml-1">Интернет-магазин для продажи котлов</span></p>
                            <a className="underline absolute right-0 -bottom-20" href="#">Посмотреть</a>
                        </div>

                    </div>
                    <div className="bg-white p-4 rounded-xl w-1/4 h-60 text-black text-left transition-all duration-500
                 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                        <div className="relative">
                            <div className="flex">
                                <span className="font-bold">Timmy</span><span
                                className="text-pink-500 font-bold">Dev</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-0">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                            </div>
                            <p className="mt-3 font-bold text-xl">Проект:<span className="ml-1">Магазин котлов</span>
                            </p>
                            <p className="mt-2">Описание:<span
                                className="ml-1">Интернет-магазин для продажи котлов</span></p>
                            <a className="underline absolute right-0 -bottom-20" href="#">Посмотреть</a>
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>
    );
}