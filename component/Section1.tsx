"use client"

import { Context } from "@/app/myContext";
import AdCard from "@/component/AdCard";
import Card from "@/component/Card";
import cardData from '@/data/dataForCards';
import { useContext } from "react";

const Section1 = () => {
    const { dark } = useContext(Context);
    return (
        <>
            <section className="flex flex-col justify-center items-center p-1">
                <div className="flex flex-row flex-wrap justify-center items-center">
                    {cardData && cardData.card1.map((item, index) => {
                        return <Card key={index} data={item} />
                    })}
                    <AdCard />
                </div>
                <div className="flex justify-center py-10">
                    <button className="p-3 text-white px-6 bg-blue-500 rounded-lg btn">
                        See More
                    </button>
                </div>
            </section>
        </>
    )
}

export default Section1