import React from "react";
import { FaBusinessTime,FaBuildingUser,FaCalendarCheck,FaEarthAmericas } from "react-icons/fa6";

const Cards = () => {

    


    return (
        <>
            <div className="h-customcardscontainer  w-full flex flex-col align-center">
                <h1 className="text-2xl font-bold uppercase text-center textitles my-4">Nossos pontos fortes:</h1>

                <div className="w-full h-full grid md:grid-cols-2  justify-items-center content-center gap-y-12  overflow-hidden ">

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-2">
                        <h1 className="text-xl font-semibold textitles ">SASS</h1>
                        <div className="w-full flex">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaBusinessTime className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify px-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-2 ">
                        <h1 className="text-xl font-bold textitles ">SASS</h1>
                        <div className="w-full flex">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaBuildingUser className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify px-2 "> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-2">
                        <h1 className="text-xl font-bold  textitles">SASS</h1>
                        <div className="w-full flex">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaCalendarCheck className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify px-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-2">
                        <h1 className="text-xl font-bold  textitles">SASS</h1>
                        <div className="w-full flex ">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaEarthAmericas className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify px-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Cards;