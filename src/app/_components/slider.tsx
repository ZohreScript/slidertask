"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderData from "./constant/sliderdata";
const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    const handleSlideChange = () => {
      const index = swiperRef.current?.realIndex || 0;
      setActiveIndex(index);

      const slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((slide, i) => {
        gsap.to(slide, {
          autoAlpha: i === index ? 1 : 0.6,
          scale: i === index ? 1 : 0.8,
          duration: 0.3,
          ease: "power3.inOut",
        });
      });
    };

    swiperRef.current.on("slideChangeTransitionStart", handleSlideChange);
    handleSlideChange();

    return () => {
      swiperRef.current?.off("slideChangeTransitionStart", handleSlideChange);
    };
  }, []);

  const currentSlideData = sliderData[activeIndex];

  return (
    <div className="w-screen  h-screen   container mx-auto  p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="relative font-bold text-blue-900 text-2xl text-center mb-4">
          <span className="relative z-10">پروژه ها</span>
          <span className="absolute right-0 bottom-1 w-3/4 h-2/4 bg-yellow-500 -skew-x-12 opacity-50"></span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-8  relative">
        <div className="w-full h-auto overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            centeredSlides={true}
            centerInsufficientSlides={true}
            initialSlide={2}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            speed={1500}
            effect="slide"
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
            }}
            className="w-full h-full"
          >
            {sliderData.map((slide, index) => (
              <SwiperSlide key={index} className="scale-105">
               <div className="relative flex items-center justify-center w-96 h-96">
                  <Image
                    src={slide.image.src}
                    alt={`Slide ${index + 1}`}
                    layout="fill" 
                    className="rounded-lg object-cover" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* pagination */}
      <div className="custom-pagination flex justify-center gap-x-0.5 mt-4"></div>

      {/* Navigation Buttons */}
      <div className="items-center justify-center gap-x-8 mt-8 flex">
        <div
          className="bg-gray-300 p-3 rounded-full cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <IoIosArrowBack className="fill-blue-900 text-2xl" />
        </div>
        <div
          className="bg-gray-300 p-3 rounded-full cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IoIosArrowForward className="fill-blue-900 text-2xl" />
        </div>
      </div>

      {/*  Buttons and Icons */}
      <div className="flex flex-col items-center gap-y-2 text-center mt-12">
        <div className="flex justify-center items-center gap-x-1 w-full flex-row-reverse">
          {currentSlideData.buttons.length > 0 && (
            <button className="relative px-6 pb-2 pt-1  rounded-md hover:text-white  bg-gray-200 text-blue-900 text-lg font-semibold text-center overflow-hidden group">
              <span className="relative z-10">
                {currentSlideData.buttons[0].text}
              </span>
              <span className="absolute inset-0 bg-blue-900  transition-transform transform scale-0 group-hover:scale-100 origin-center duration-300" />
            </button>
          )}

          {currentSlideData.buttons.length > 1 && (
            <div className="border-l-4 h-6 border-gray-300 mx-1"></div>
          )}

          {currentSlideData.buttons.length > 1 && (
            <button className="relative px-6 py-2 rounded-md bg-blue-600 text-white text-lg font-semibold text-center overflow-hidden group">
              <span className="relative z-10">
                {currentSlideData.buttons[1].text}
              </span>
              <span className="absolute inset-0 bg-blue-900 transition-transform transform scale-0 group-hover:scale-100 origin-center duration-300" />
            </button>
          )}
        </div>

        <div className="hidden md:flex justify-start gap-x-2 w-full my-8 ">
          {currentSlideData.icons.map((Icon, i) => (
            <div key={i} className="p-2 rounded-md bg-blue-800 text-white">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
