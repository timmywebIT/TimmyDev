'use client'

import { Header } from "@/app/components/sections/Header";
import { Main } from "@/app/components/sections/Main";
import {Footer} from "@/app/components/sections/Footer";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Main />
        <Footer />
    </div>
  );
}



