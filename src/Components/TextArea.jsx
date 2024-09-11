import React from "react";

const TextArea = ({ text, imageUrl, title, reverse, bgCustom }) => {
    return (
        <div className={`w-full h-textarea flex ${reverse ? 'flex-row-reverse' : ''} ${bgCustom ? 'bg-custom' : ''}`}>
            <div className="w-1/2 h-full sidecontainer imgtextarea flex items-center justify-center">
                <img src={imageUrl} alt="Content Image" className="h-5/6 rounded-xl" />
            </div>
            <div className="w-1/2 h-full sidecontainer textcontainer flex flex-col items-center justify-center">
                <h1 className="text-2xl font-extrabold uppercase text-center my-4">{title}</h1>
                <p className="text-center font-medium px-8 bg-gray-200 rounded-xl py-4">{text}</p>
            </div>
        </div>
    );
};

export default TextArea;
