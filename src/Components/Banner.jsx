import React from "react"
import BannerImg from "./img/Justin.png"

const Banner = () => {
    return (
        <>
            <div className="h-custombanner w-full rounded-b-2xl flex overflow-hidden  banner ">
                <div className="w-1/2 h-full flex flex-col justify-center px-20 pb-20 bannertextwrapper  ">
                    <h1 className="text-4xl uppercase  font-bold italic pb-4 textitles ">Nike</h1>
                    <p className="text-justify text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat assumenda dignissimos obcaecati eos ipsa provident amet ipsam sequi enim quibusdam, laudantium a aliquam maxime.</p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center bannerimgwrapper  ">
                    <img src={BannerImg} className="h-11/12 rounded-md banner-img" />
                </div>

            </div>

        </>

    )

}

export default Banner;