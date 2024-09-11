import React from "react";
import { Link } from "react-router-dom";

const FinalText = () => {
    const text = `Atualmente, somos a grande área de BACKOFFICE, que transformou uma notificação por e-mail
que levava 7 dias em uma plataforma automatizada, com notificações em pequenas horas.
Operações ágeis, processos estruturados e em constante evolução.
Somos os bastidores, trabalhando incansavelmente em todas as frentes para cuidar de nossas
unidades próprias e de parcerias, dos nossos clientes, do nosso time, da nossa Hero <3`

    return (
        <>
            <div className="h-finaltext w-full flex">
                <div className="w-1/2 h-full flex items-center justify-center sidecontainer imgcontainer">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec2e54be-713e-48ff-843d-78da76a24407/da1q1y1-810c3296-581c-4fbb-8209-f587c6c13da9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjMmU1NGJlLTcxM2UtNDhmZi04NDNkLTc4ZGE3NmEyNDQwN1wvZGExcTF5MS04MTBjMzI5Ni01ODFjLTRmYmItODIwOS1mNTg3YzZjMTNkYTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S5OVRPKjUwWFWP8gtASfp4e4dDZ_KS-IJiM8TR3lCw0"
                        className="h-3/6" alt="" />
                </div>
                <div className="w-1/2 h-full flex flex-col items-center justify-center sidecontainer">
                    <h1 className="text-2xl font-bold uppercase text-center my-4">Finalizando..</h1>
                    <p className="text-center font-medium px-8 bg-gray-200 rounded-xl py-4">{text}</p>
                    <Link to="/test">
                        <button className="mt-4 px-6 py-2 bg-gray-200 textitles font-semibold rounded-lg shadow-md hoverbutton hover:text-gray-200">
                            Faça um Exame
                        </button>
                    </Link>
                </div>

            </div>
        </>
    )


}

export default FinalText;