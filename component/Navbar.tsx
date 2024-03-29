"use client"
import React, { useContext } from 'react'
import Image from "next/image";
import { Context } from '@/app/myContext';

const Navbar = () => {
  const { dark, setdark } = useContext(Context);

  return (
    <>
      <header className={`${dark ? "bg-zinc-900 text-zinc-100" : "bg-white"} sticky z-20 top-0`}>
        <nav className="flex cursor-pointer justify-start p-2 font-bold text-2xl">
          <h1>Sports</h1>
          <div className="absolute top-10 w-20 bg-blue-300 h-[2px]"></div>
        </nav>
        <label className="absolute top-4 right-8 inline-flex items-center cursor-pointer">
          <input type="checkbox"
            checked={dark}
            onChange={() => {
              dark ? localStorage.setItem('Theme', JSON.stringify(false)) : localStorage.setItem('Theme', JSON.stringify(true));
              setdark(dark ? false :true)
            }}
            className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700
           peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
            after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
             after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600">
          </div>
        </label>

      </header>
    </>
  )
}

export default Navbar