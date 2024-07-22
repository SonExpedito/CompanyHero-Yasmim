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
            title: "Empresa",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sed.",
            img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Empresa",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sed.",
            img: "https://images7.alphacoders.com/133/1338183.png"
        },
        {
            title: "Empresa",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sed.",
            img: "https://images.unsplash.com/photo-1507752533523-5186b0bc4c43?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
        },
    ];

    return (
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
    );
}

export default Carousel;
