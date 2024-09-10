import React from "react";
import AudioPlayer from "./AudioPlayer";
import { Link } from "react-router-dom"; // Make sure to import Link if you're using react-router-dom

const VoiceDiv = () => {
    const CampusInc = `
        A CAMPUS.INC era uma empresa de coworking, que ficava instalada na nossa atual sede na
    Paulista.
Em um determinado momento, as empresas que utilizavam o coworking estavam demonstrando
interesse na contratação do endereço fiscal. Foi quando surgiu a ideia do nosso carro chefe, o
ESCRITÓRIO VIRTUAL, que naquela época seria somente um valor agregado ao plano para quem
aderisse ao serviço.
    `

    return (
        <div className="w-full bg-custom h-customvoicediv rounded-xl flex flex-col">
            <h1 className="text-2xl font-extrabold uppercase text-center my-4">Sobre a Campus Inc</h1>
            <div className="w-full flex customvoicewrapper">
                <div className="h-full w-1/2 flex items-center justify-center">
                    <AudioPlayer />
                </div>
                <div className="h-full w-1/2 flex flex-col items-center justify-center px-8 audiotextwrapper">
                    <p className="text-center font-medium px-8 bg-gray-200 rounded-xl py-4 audiotext">
                        {CampusInc}
                    </p>
                    <Link to="/test">
                        <button className="mt-4 px-6 py-2 bg-gray-200 textitles font-semibold rounded-lg shadow-md hoverbutton hover:text-gray-200">
                            Faça um Exame
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VoiceDiv;
