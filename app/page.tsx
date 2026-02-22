"use client"
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { GiVillage } from "react-icons/gi";
import { BiSolidPencil } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { useEffect, useState } from "react";
export default function Home() {
  const [input, setInput] = useState<string>("");
  const datas  = ["apple","apolo" , "tata","google"];
  const getInput = () => {
    setInput("");
  }
  return (
    <main className="min-h-screen relative">
      <header className="dark:bg-[#222] dark:text-white bg-white text-black  h-20 w-screen px-2.5 sm:p-0 sticky top-0 left-0 right-0 z-50 shadow dark:shadow-white/20 shadow-black/20">
        <nav className=" container mx-auto h-full w-full flex justify-between items-center justify-items-stretch">
          <div className="md:w-4/12 w-1/2 flex flex-row text-3xl gap-x-2">
            <GiVillage />
            <Link href={""}>Mausam</Link>
          </div>
          <div className="hidden md:w-full md:flex justify-center">
            <div className="w-full flex justify-center ">
              <label htmlFor="search" className="rounded-full bg-black/10 dark:bg-black/20 lg:w-8/10 md:w-6/10  p-2 pl-5 relative flex text-md">
                <input type="search" className="w-full border-none outline-none pl-2" name="search" value={input} onChange={(e) => setInput(e.target.value)} id="search" placeholder="Search here" />
                <TiDelete className="bg-black/40 rounded-full md:text-4xl  text-black/50 dark:text-white/50" onClick={getInput} />
              </label>
            </div>
          </div>
          <div className="md:w-4/12 w-1/2 flex justify-end text-3xl">
            <Link href={'https://github.com//mausamtharu'}><FaGithub /></Link>
          </div>
        </nav>
      </header>
      <section className="container mx-auto h-screen flex flex-col py-2 z-0 ">
        <div className="md:h-4/10 min-h-96 max-h-full bg-linear-to-b dark:from-[#222] from-white shadow-black/15 from-20% sm:rounded-md shadow dark:shadow-black/5 relative overflow-hidden flex flex-col sm:flex-row justify-around items-center px-10">
          <div className=" md:aspect-video w-full h-52 dark:bg-black/5 rounded-none sm:rounded-sm ">
            <h1 className="text-2xl font-bold mb-2">Hi, I'm <span className="text-pink-500">Mausam</span> 💗</h1>
            <p className="text-lg font-medium text-gray-300 ">Full-Stack <span className="text-red-500">Architect</span> & <span className="text-sky-500">Problem Solver</span></p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              With 4+ years of hands-on experience, I build high-performance web ecosystems.
              From crafting seamless UIs with Next.js and Tailwind to engineering robust backends
              using NestJS, Rust, and Mojo js, I bridge the gap between complex logic and elegant design.
            </p>
          </div>
          <div className="aspect-video h-full dark:bg-black/20 m-10 overflow-hidden relative object-cover">
          <Image src={"/image/company.webp"} className="grayscale" alt="company image" fill/>
          </div>
        </div>
        <div className="flex flex-col ">
          <h3 className="self-center">this is My Info</h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 [&>div]:h-52 [&>div]:bg-[#222]/15 gap-y-2 sm:gap-x-2 leading-relaxed"  >
            <div>
              <h1 className="text-center capitalize">fornt End Technalogy</h1>
              <p>javascript,nodejs , react ,angular, nextjs freamwork ,rust , dioxus,sql ,java</p>
            </div>
            <div className="text-center capitalize">
              <h1>backend technalogy</h1>
              <p>express js ,  honojs , activ-web as rust freamwork , java backend etc.. </p>
            </div>

            <div >
              <h1 className="text-center capitalize">database</h1>
              <p>postgres , mongodb , mongoose , etc..</p>
            </div>

            <div>
              <h1 className="text-center capitalize">tools</h1>
              <p>Github , git , docker </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
} 