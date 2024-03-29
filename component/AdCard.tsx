"use client"
import React, { useContext } from 'react'
import Image from "next/image";
import { Context } from '@/app/myContext';

const AdCard = () => {
    const { dark } = useContext(Context);
 
    return (
        <>
            <div className={`relative m-2 h-[511px] w-[238px] ${dark ? "bg-zinc-800 border-zinc-800 text-zinc-300"
             : "bg-white"} cursor-pointer shadow-md border p-2 rounded-md `}>
                <p className='absolute top-2 right-2 text-center bg-black text-white p-1 w-14 h-8'>Ad</p>
                <Image
                    src={"/ad-CzGAa6YE.png"}
                    alt={"ad"}
                    className="h-[200px] w-full"
                    width={50}
                    height={50}
                    priority
                />
                <div className="text-center font-medium text-xl my-4">
                    Advertisement title
                </div>
                <div className="flex flex-row p-2 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Sit aperiam at blanditiis repudiandae nemo quidem maiores
                      cum quae eum tenetur blanditiis repudiandae nemo quidem maiores
                      cum quae eum tenetur.
                </div>
            </div>
        </>
    )
}

export default AdCard