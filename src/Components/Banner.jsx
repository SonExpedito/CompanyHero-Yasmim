import React from "react"
import BannerImg from "./img/Justin.png"

const Banner = () => {
    const texto = `
  Tudo começou quando um chileno - que não falava nada de inglês - e um húngaro - que não falava
  nada de espanhol - se conheceram no Chile em 2012.
  Em meio a tantas diferenças, descobriram que tinham uma coisa em comum: a vontade de
  construir um negócio de sucesso.
  Inicialmente, fizeram algumas tentativas que acabaram não dando certo, até chegarem na
  CAMPUS.INC, que basicamente foi a empresa que andou para que a Company Hero pudesse correr.
`;

    return (
        <>
            <div className="h-custombanner w-full rounded-b-2xl flex overflow-hidden  banner ">
                <div className="w-1/2 h-full flex flex-col justify-center px-20 pb-20 bannertextwrapper  ">
                    <h1 className="text-4xl uppercase  font-bold italic pb-4 textitles ">Company Hero.</h1>
                    <p className="text-justify text-lg ">{texto}</p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center bannerimgwrapper  ">
                    <img src={BannerImg} className="h-11/12 rounded-md banner-img" />
                </div>

            </div>

        </>

    )

}

export default Banner;