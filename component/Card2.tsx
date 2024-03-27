"use client"

const Card2 = () => {
    return (
        <>
            <div className=" hover:cursor-pointer hover:scale-110 duration-300 box h-[410px] w-[180px] border p-2 bg-white rounded-md"
                // style="color: black; background-color: rgb(247, 247, 248);"
            >
                <img src="/section2-1.png" alt="poster" className=" h-[70%]" />
                <div className="   font-semibold flex justify-center text-sm p1">
                    Las Vegas Aviators
                </div>
                <div className=" text-sm font-semibold flex justify-center">
                    Oct 15 | Sun |4:30 pm
                </div>
                <div className="flex  justify-center line text-xs">
                    Las Vegas Ballpark, Las Vegas, Nevada
                </div>
                <div className="flex justify-center">
                    <button className="w-[100] h-[30px] border  btnbottom bg-slate-900 ">
                        Take Flight collection</button>
                </div>
            </div>
        </>
    )
}

export default Card2