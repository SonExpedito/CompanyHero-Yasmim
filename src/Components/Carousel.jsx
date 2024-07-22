import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";


const Carousel = () => {
    return (
        <>
            





            {/**Footer */}
            <div className="w-full bg-custom h-16 footer">
                <div className="flex w-full h-full items-center justify-center gap-4">
                    <Link to=""><FaInstagram className="text-4xl text-gray-200 opacity-80 bg-gray-900 rounded-xl p-2 cursor-pointer hover:size-4" /></Link>
                    <Link to=""><FaFacebookF className="text-4xl text-gray-200 opacity-80 bg-gray-900 rounded-xl p-2 cursor-pointer hover:size-4" /></Link>
                    <Link to=""><FaTwitter className="text-4xl text-gray-200 opacity-80 bg-gray-900 rounded-xl  p-2 cursor-pointer hover:size-4" /></Link>
                </div>
            </div>
        </>

    )

}

export default Carousel;