import React from "react";
import { FaBusinessTime, FaBuildingUser, FaCalendarXmark } from "react-icons/fa6";
import { FiUserX } from "react-icons/fi";

const Cards = () => {
    const Card1 = `Onde
                    a entrega de 
                    documentação se torna mais rápida`
    const Card2 = `Estruturação do processo de
                    correspondências.`
    const Card3 = `Durante a reestruturação, encontraram um Locker cheio delas .`
    const Card4 = `Devido ao atrazo para a notificação gerou uma furia nos clientes.`

    return (
        <>
            <div className="h-customcardscontainer  w-full flex flex-col align-center">
                <h1 className="text-2xl font-bold uppercase text-center textitles my-4">Encontrando assim a Solução em dois fatores:</h1>

                <div className="w-full h-full grid md:grid-cols-2  justify-items-center content-center gap-y-12  overflow-hidden ">

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-1 py-2">
                        <h1 className="text-xl font-semibold textitles h-1/6 ">Onboarding</h1>
                        <div className="w-full flex h-5/6">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaBusinessTime className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify pr-3">{Card1}</p>
                            </div>
                        </div>
                    </div>

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-1 py-2 ">
                        <h1 className="text-xl font-bold textitles h-1/6 ">Reestruturação</h1>
                        <div className="w-full flex h-5/6">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaBuildingUser className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify pr-3">{Card2} </p>
                            </div>
                        </div>
                    </div>

                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-1 py-2">
                        <h1 className="text-xl font-bold  textitles h-1/6">TFE’S VENCIDAS</h1>
                        <div className="w-full flex h-5/6 ">
                            <div className="w-1/2  flex justify-center items-center">
                                <FaCalendarXmark className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify pr-2">{Card3}</p>
                            </div>
                        </div>
                    </div>
                    {/**Card */}
                    <div className="w-80 h-36 bg-gray-200 flex flex-col rounded-xl items-center gap-1 py-2">
                        <h1 className="text-xl font-bold  textitles h-1/6">Clientes Furiosos</h1>
                        <div className="w-full flex h-5/6 ">
                            <div className="w-1/2  flex justify-center items-center">
                                <FiUserX className="bg-gray-300 rounded-full  h-20 w-20    px-4 py-4" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <p className="font-normal text-justify pr-2">{Card4}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Cards;