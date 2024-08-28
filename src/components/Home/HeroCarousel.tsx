"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const HeroCarousel = () => {
    return (
        <div className="bottom-margin-content">
            <Swiper
                navigation={false}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                autoplay
                loop={true}
            >
                <SwiperSlide>
                    <img src="/hero-background/image1.png" className="relative h-full w-screen object-cover" />
                    <div className="absolute top-1/2 -translate-y-1/2 md:left-[10%] left-[4%] flex gap-2 flex-col text-white">
                        <h3 className="md:text-xl text-lg">Welcome to</h3>
                        <h1 className="heading font-extrabold leading-relaxed">
                            Adv.Parag Mukhopadhyay,
                        </h1>
                        <h3 className="text-2xl">Your <b className="text-primary font-extrabold">Criminal Defense</b> Expert.</h3>
                        <button className="btn-primary w-fit mt-6">Learn More <img src="/icons/arrow.png" className="h-4" /></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/hero-background/image2.png" className="relative h-full w-screen object-cover" />
                    <div className="absolute top-1/2 -translate-y-1/2 md:left-[10%] left-[4%] flex gap-2 flex-col text-white">
                        <h3 className="md:text-xl text-lg">Welcome to</h3>
                        <h1 className="heading font-extrabold leading-relaxed">
                            Adv.Parag Mukhopadhyay,
                        </h1>
                        <h3 className="text-2xl">Your <b className="text-primary font-extrabold">Criminal Defense</b> Expert.</h3>
                        <button className="btn-primary w-fit mt-6">Learn More <img src="/icons/arrow.png" className="h-4" /></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/hero-background/image3.png" className="relative h-full w-screen object-cover" />
                    <div className="absolute top-1/2 -translate-y-1/2 md:left-[10%] left-[4%] flex gap-2 flex-col text-white">
                        <h3 className="md:text-xl text-lg">Welcome to</h3>
                        <h1 className="heading font-extrabold leading-relaxed">
                            Adv.Parag Mukhopadhyay,
                        </h1>
                        <h3 className="text-2xl">Your <b className="text-primary font-extrabold">Criminal Defense</b> Expert.</h3>
                        <button className="btn-primary w-fit mt-6" onClick={()=> window.location.href = "/#about"}>Learn More <img src="/icons/arrow.png" className="h-4" /></button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    );
};

export default HeroCarousel;
