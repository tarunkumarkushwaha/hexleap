"use client"
import React, { useContext } from 'react'
import Image from "next/image";
import { Context } from '@/app/myContext';

// import cardData from '@/data/dataForCards';

const Card = ({ data }: any) => {
    const { dark } = useContext(Context);
    return (
        <>
            <div className={`m-2 cursor-pointer ${dark ? "bg-zinc-800 border-zinc-800 text-zinc-100" : "bg-white"}
             shadow-md hover:shadow-xl hover:scale-105 duration-500 h-[511px]
             w-[238px] border p-2 rounded-md flex flex-col justify-between`}>
                <Image
                    src={data.imageurl}
                    alt={data.name}
                    className="h-[350px] w-full"
                    width={100}
                    height={100}
                    priority
                />
                <div className="text-center font-normal text-lg my-2">
                    {data.name}
                </div>
                <div className={`flex flex-row  ${dark ? "bg-zinc-900 border-zinc-900 text-zinc-100" : "text-slate-500 bg-slate-100"}`}
                >
                    <div className="flex flex-col rounder-2xl my-2 p-2">
                        <p className={`text-center test-xl ${dark ? "text-zinc-500":""} `}>Total Events</p>
                        <p className={`${dark ? "text-zinc-100":"text-black"} text-center font-medium`}>{data.totalEvents} events</p>
                    </div>
                    <div className="flex flex-col rounder-2xl my-2 p-2">
                        <p className={`text-center test-xl ${dark ? "text-zinc-500":""} `}>Sport</p>
                        <p className={`${dark ? "text-zinc-100":"text-black"} text-center font-medium`}>{data.sports}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card