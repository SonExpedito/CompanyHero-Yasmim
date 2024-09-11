import React from "react";
import TextArea from "./TextArea";

const TextBox = () => {
  // Lista de objetos com dados de cada TextArea, incluindo bgCustom
  const textAreasData = [
    {
      text: `O processo de correspondências começou a enfrentar desafios com 100 clientes de EV, pois as notificações eram feitas
       apenas com a capa da carta, levando os clientes à recepção para retirar suas correspondências. Otávio, então, ofereceu o 
       escaneamento automático para minimizar essas retiradas, e isso se tornou padrão. Além disso, foi implementada uma verificação
        prévia das informações das empresas, antes realizada manualmente em Excel.  `,
      imageUrl: "https://i.gifer.com/D7mJ.gif",
      title: "O Encerramento desse caso",
      reverse: false,
      bgCustom: true,
    },
    {
      text: `Em 2019, com o desenvolvimento da INTRA, a consulta 
        de dados se tornou mais fluida, e a subárea de correspondências expandiu. 
        Novas unidades foram abertas, e mais funcionários foram 
        contratados para lidar com a crescente demanda.`,
      imageUrl: "https://i.gifer.com/4Vg4.gif",
      title: "2019",
      reverse: true,
      bgCustom: false,
    },
    {
      text: `Em 2020, a Company Hero expandiu para outros estados e oficializou a mudança de nome, 
      destacando-se como uma empresa de serviços para profissionais independentes. O processo de notificação de 
      correspondências foi padronizado, 
      mas ainda havia desafios, como falta de estrutura e processos eficientes.`,
      imageUrl: "https://64.media.tumblr.com/tumblr_mb7ucoOBOC1r3xthuo2_500.gifv",
      title: "2020",
      reverse: false,
      bgCustom: true,
    },
    {
      text: `Em 2021, com a liderança de Mônia, melhorias começaram: prazos de notificação foram reduzidos, 
      relações com parceiros de prédios foram fortalecidas, e a segurança nas unidades foi aprimorada. Mônia 
      também criou a primeira página da área de correspondências no Notion, organizando processos e diminuindo 
      o SLA para notificações, que chegou a 4 horas em 2024. Além disso, uma plataforma para notificação de correspondências 
      foi desenvolvida para agilizar o serviço.`,
      imageUrl: "https://i.gifer.com/6f9c.gif",
      title: "2021 e Atualidade",
      reverse: true,
      bgCustom: false,
    },
  ];

  return (
    <div className="w-full h-textbox overflow-x-hidden overflow-y-scroll rounded-xl border-custom">
      {textAreasData.map((item, index) => (
        <TextArea
          key={index}
          text={item.text}
          imageUrl={item.imageUrl}
          title={item.title}
          reverse={item.reverse}
          bgCustom={item.bgCustom}  
        />
      ))}
    </div>
  );
};

export default TextBox;
