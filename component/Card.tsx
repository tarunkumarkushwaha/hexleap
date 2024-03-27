"use client"
import React from 'react'
import Image from "next/image";
import cardData from '@/data/dataForCards';

const Card = () => {
    console.log(cardData)
    return (
        <>
            <div className="cursor-pointer hover:scale-110 duration-300 box h-[340px] w-[180px] border border-black p-2 bg-white rounded-md "
            // style="color: black; background-color: rgb(247, 247, 248);"
            >
                <Image
              src="/1.png"
              alt="Vercel Logo"
              className="h-[80%] w-full"
              width={100}
              height={24}
              priority
            />
                <div className=" font-semibold text-sm ">Sacramento River Cats
                </div>
                <div className="bg-[#F7F7F8] h-[50px]  detail  "
                // style="color: black; background-color: rgb(247, 247, 248);"
                >
                    <span className=" mx-3 events event ">Total Events</span>
                    <span className="events ">sport</span>
                    <div className="  flex justify-start gap-5 flex-row ">
                        <span className="  font-semibold   text-sm">48 Events</span>
                        <span className=" font-semibold text-sm  gamename">Baseball</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card