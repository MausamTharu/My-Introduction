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
  const datas = ["apple", "apolo", "tata", "google"];
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
                <TiDelete className="bg-black/40 rounded-full  md:text-4xl  text-black/50 dark:text-white/50" onClick={getInput} />
              </label>
            </div>
          </div>
          <div className="md:w-4/12 w-1/2 flex justify-end text-3xl">
            <Link href={'https://github.com//mausamtharu'}><FaGithub /></Link>
          </div>
        </nav>
      </header>
      <section className="container mx-auto min-h-screen flex flex-col py-4 px-4 gap-y-5 sm:px-0 z-0">
        <div className="min-h-fit md:h-112.5  bg-linear-to-b dark:from-[#222] from-white shadow-black/15
         from-20% sm:rounded-md shadow dark:shadow-black/5 relative overflow-hidden flex flex-col md:flex-row justify-between items-center p-6 md:px-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Hi, I'm <span className="text-pink-500">Mausam</span> 💗
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-400 dark:text-gray-300">
              Full-Stack <span className="text-red-500">Architect</span> & <span className="text-sky-500">Problem Solver</span>
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400 max-w-prose">
              With 4+ years of hands-on experience, I build high-performance web ecosystems.
              From crafting seamless UIs with Next.js and Tailwind to engineering robust backends
              using NestJS, <span className="text-orange-500">Rust</span>, and <span className="text-orange-500">Mojo js</span>, I bridge the gap between complex logic and elegant design.
            </p>
          </div>
          <div className="w-full md:w-[45%] aspect-video mb-8 md:mb-0 relative rounded-lg overflow-hidden dark:bg-black/20 order-1 md:order-2 shadow-lg">
            <Image
              src="/image/company.webp"
              className="grayscale object-cover hover:grayscale-0 transition-all duration-300"
              alt="company image"
              fill
              priority
            />
          </div>

        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="self-center ">this is My Info</h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 [&>div]:p-6 [&>div]:bg-[#222]/15 gap-y-2 sm:gap-x-2 [&>div]:rounded-md group [&>div]:group-hover:bg-[#222]/25" >
            <div className="flex justify-center flex-col hover:-translate-y-4 ">
              <h1 className="text-center text-xs uppercase">fornt End Technalogy</h1>
              <p className="leading-relaxed ">javascript,nodejs , react ,angular, nextjs freamwork ,<span className="text-orange-500">Rust</span> , dioxus,sql ,java</p>
            </div>
            <div className="flex justify-center flex-col hover:-translate-y-4  ">
              <h1 className="text-center text-xs uppercase">backend technalogy</h1>
              <p>express js ,  <span className="text-orange-500">Hono js</span> , activ-web as rust freamwork , java backend etc.. </p>
            </div>

            <div className="flex justify-center flex-col hover:-translate-y-4">
              <h1 className="text-center text-xs uppercase">database</h1>
              <p>postgres , mongodb , mongoose , etc..</p>
            </div>

            <div className="flex justify-center flex-col hover:-translate-y-4">
              <h1 className="text-center text-xs uppercase">tools</h1>
              <p>Github , git , docker </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
} 