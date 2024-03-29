"use client"
import { Context } from "./myContext";
import Navbar from "@/component/Navbar";
import Section1 from "@/component/Section1";
import Section2 from "@/component/Section2";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setdark] = useState<boolean>(false);

  useEffect(() => {
    const THEME = localStorage.getItem('Theme');
    if (THEME) {
      setdark(JSON.parse(THEME));
    }
  }, [])
  
  return (<>
    <Context.Provider value={{ dark, setdark }}>
      <Navbar />
      <main className={`sm:p-5 p-3 ${dark ? "bg-zinc-900 text-zinc-100" : "bg-white"}`}>
        <Section1 />
        <Section2 />
      </main>
    </Context.Provider>
  </>
  );
}
