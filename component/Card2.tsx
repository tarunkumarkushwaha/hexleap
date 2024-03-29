"use client"
import React, { useContext } from 'react'
import Image from "next/image";
import { Context } from '@/app/myContext';
const Card2 = ({ data }: any) => {
    const { dark } = useContext(Context);

    return (
        <>
            <div className={`flex items-center justify-center relative
              hover:cursor-pointer hover:scale-105 duration-500 h-[600px] w-[257px] rounded-md`}>
                <div className={``}>
                    <svg width="273" height="610" viewBox="0 0 273 641" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_162)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4H265V432C259.477 432 255 436.477 255 442C255 447.523 259.477
                             452 265 452V629H8V452C13.5228 452 18 447.523 18 442C18 436.477 13.5228 432 8 432V4Z" fill={`${dark ? "rgb(63 63 70)" : "white"}`} />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_162" x="0" y="0" width="273" height="641" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_162" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_162" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </div>
                <div className={`absolute top-1 left-4 flex flex-col z-10 w-[88%]
                ${dark ? "bg-zinc-700 border-zinc-700 text-zinc-100" : "bg-white text-black"} `}>
                    <img src={data.imageurl} alt="poster" className="mt-4 h-[50%]" />

                    <hr className="relative left-5 top-4 w-[88%] border-1 border-slate-500 border-dashed" />

                    <div className="text-center font-semibold text-lg mt-8">
                        {data.name}
                    </div>
                    <div className=" text-sm font-light text-center my-1">
                        {data.date}
                    </div>
                    <div className="text-center text-slate-400 text-xs my-1 px-6">
                        {data.address}
                    </div>
                    <div className="flex justify-center p-4">
                        <button className="text-xs p-2 px-8 text-white bg-black ">
                            {data.button}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2