import React from "react"
import AudioPlayer from "./AudioPlayer"

const VoiceDiv = () => {
    return (
        <>
            <div className="w-full bg-custom h-customvoicediv rounded-xl flex flex-col">
                <h1 className="text-2xl font-extrabold uppercase text-center  my-4">Um pouco sobre nós</h1>
                <div className="w-full flex">
                    <div className="h-full w-1/2 flex items-center justify-center">
                        <AudioPlayer/>
                    </div>
                    <div className="h-full w-1/2 flex items-center justify-center px-4">
                            <p className="text-center font-medium px-8 bg-gray-200 rounded-xl py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cum aut. Id minima incidunt, voluptate sit consequuntur iusto! Mollitia eligendi consequatur ea et ut praesentium adipisci impedit reprehenderit sapiente veniam!</p>
                    </div>
                </div>
            </div>

            <br></br>
        </>

    )

}

export default VoiceDiv