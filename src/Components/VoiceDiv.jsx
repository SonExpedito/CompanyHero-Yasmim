import React from "react";
import AudioPlayer from "./AudioPlayer";

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
                </div>
            </div>
        </div>
    );
};

export default VoiceDiv;
