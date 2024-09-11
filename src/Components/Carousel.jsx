import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import React Icons
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Carousel = () => {
    const CarouselSlides = [
        {
            title: "Curitiba",
            text: "Curitiba foi uma das cidades escolhidas na nossa expansão em 2021.",
            img: "https://cdn.companyhero.com/static/images/endereco_virtual_c.2e16d0ba.fill-1200x630.jpegquality-90.jpg"
        },
        {
            title: "Recife",
            text: "Com a expansão avançando, Recife foi incluída no plano de crescimento.",
            img: "https://cdn.companyhero.com/static/images/CAPA-SEO-RECIFE.2e16d0ba.fill-1200x630.jpegquality-90.jpg"
        },
        {
            title: "Belo Horizonte",
            text: "Com a expansão avançando, Belo Horizonte também foi incluída no plano de crescimento. ",
            img: "https://cdn.companyhero.com/static/images/escritorio_virtual.2e16d0ba.fill-1200x630.jpegquality-90.jpg"
        },
    ];

    return (
        <>
            <h1 className='text-2xl font-bold text-center mt-6'>Lugares que a Company Hero passou trabalhar:</h1>
            <div className='h-customcarousel flex justify-center align-center'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                        renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
                    }}
                    navigation={{
                        nextEl: '.custom-button-next',
                        prevEl: '.custom-button-prev',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {CarouselSlides.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-content">
                                <img src={data.img} alt="" />
                                <div className="text-overlay">
                                    <h1 className='font-bold'>{data.title}</h1>
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-button-next"><FaArrowRight /></div>
                    <div className="custom-button-prev"><FaArrowLeft /></div>
                </Swiper>
            </div>
        </>
    );
}

export default Carousel;
