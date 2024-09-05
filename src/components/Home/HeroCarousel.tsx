"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <div className="bottom-margin-content">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={false}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: "100vh" }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            objectFit="cover"
            priority={true}
            src="/hero-background/image1.png"
            alt="Slide 1"
            layout="fill"
          />
          <div className="absolute top-1/2 -translate-y-1/2 md:left-[10%] left-[4%] flex gap-2 flex-col text-white">
            <h3 className="md:text-xl text-lg">Welcome to</h3>
            <h1 className="heading font-extrabold leading-relaxed">
              Adv.Parag Mukhopadhyay,
            </h1>
            <h3 className="text-2xl">
              Your{" "}
              <b className="text-primary font-extrabold">Criminal Defense</b>{" "}
              Expert.
            </h3>
            <button className="btn-primary w-fit mt-6">
              Learn More <img src="/icons/arrow.png" className="h-4" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            objectFit="cover"
            priority={true}
            src="/hero-background/image2.png"
            alt="Slide 1"
            layout="fill"
          />
          <div className="absolute top-1/2 -translate-y-1/2 md:left-[10%] left-[4%] flex gap-2 flex-col text-white">
            <h3 className="md:text-xl text-lg">Welcome to</h3>
            <h1 className="heading font-extrabold leading-relaxed">
              Adv.Parag Mukhopadhyay,
            </h1>
            <h3 className="text-2xl">
              Your{" "}
              <b className="text-primary font-extrabold">Criminal Defense</b>{" "}
              Expert.
            </h3>
            <button className="btn-primary w-fit mt-6">
              Learn More <img src="/icons/arrow.png" className="h-4" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
