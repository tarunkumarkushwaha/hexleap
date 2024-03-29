"use client"

import { Context } from "@/app/myContext";
import Card2 from "@/component/Card2";
import cardData from '@/data/dataForCards';
import { useContext } from "react";

const Section2 = () => {
    const { dark } = useContext(Context);
    return (
        <>
            <section className={`sm:m-[2%] m-0 ${dark ? "bg-zinc-800 text-zinc-100" : "bg-white"}`}>
                <div className="text-center sm:text-5xl text-3xl font-bold py-10 ">Collection Spotlight</div>
                <div className="mx-auto p-8">
                    <p className="text-xl text-center font-light my-10">
                        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
                    </p>
                </div>
                <div className="relative pb-10 flex flex-row gap-8 flex-wrap justify-center items-center">
                    <button className="sm:inline-flex hidden absolute left-4 top-1/2 z-20 cursor-pointer">
                        <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="35.7491" height="47.9988" stroke="#2C9CF0" />
                            <path d="M23.1545 33.6407C23.4246 33.3706 23.5763 33.0043 23.5763 32.6223C23.5763 32.2403 23.4246 31.874 23.1545 31.6038L16.024 24.4733L23.1545 17.3428C23.4169 17.0711 23.5621 16.7072 23.5588 16.3295C23.5555 15.9518 23.404 15.5905 23.137 15.3234C22.8699 15.0563 22.5086 14.9048 22.1309 14.9016C21.7532 14.8983 21.3893 15.0435 21.1176 15.3059L12.9686 23.4549C12.6986 23.725 12.5469 24.0913 12.5469 24.4733C12.5469 24.8553 12.6986 25.2216 12.9686 25.4917L21.1176 33.6407C21.3878 33.9108 21.7541 34.0625 22.1361 34.0625C22.518 34.0625 22.8844 33.9108 23.1545 33.6407Z" fill="#2C9CF0" />
                        </svg>
                    </button>
                    {cardData && cardData.card2.map((item, index) => {
                        return <Card2 key={index} data={item} />
                    })}
                    <button className="sm:inline-flex hidden absolute right-4 z-20 top-1/2">
                        <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="35.7491" height="47.9988" transform="matrix(-1 0 0 1 35.749 0)" stroke="#2C9CF0" />
                            <path d="M13.5945 33.6407C13.3245 33.3706 13.1727 33.0043 13.1727 32.6223C13.1727 32.2403 13.3245 31.874 13.5945 31.6038L20.7251 24.4733L13.5945 17.3428C13.3321 17.0711 13.1869 16.7072 13.1902 16.3295C13.1935 15.9518 13.345 15.5905 13.6121 15.3234C13.8791 15.0563 14.2404 14.9048 14.6181 14.9016C14.9958 14.8983 15.3597 15.0435 15.6314 15.3059L23.7804 23.4549C24.0504 23.725 24.2021 24.0913 24.2021 24.4733C24.2021 24.8553 24.0504 25.2216 23.7804 25.4917L15.6314 33.6407C15.3613 33.9108 14.9949 34.0625 14.613 34.0625C14.231 34.0625 13.8646 33.9108 13.5945 33.6407Z" fill="#2C9CF0" />
                        </svg>
                    </button>
                </div>
                <div className="sm:hidden flex items-center justify-center py-10">
                    <button className="p-3 text-white px-6 bg-blue-500 rounded-lg btn">
                        See More
                    </button>
                </div>
            </section>
        </>
    )
}

export default Section2