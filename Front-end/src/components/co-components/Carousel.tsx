"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: "Sofaa.jpg", text: "henlo" },
    { img: "sofa2.jpg", text: "bye" },
    { img: "sofa3.jpg", text: "sunday" },
  ];
  const totalSlides = slides.length;

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  console.log(currentSlide);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div>
      <div className="w-screen relative flex h-[800px] overflow-hidden">
        <div
          className="flex h-full w-[300%] transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex justify-center items-center border relative"
            >
              <img className="w-full object-cover" src={slide.img} />
              <div className="absolute left-[17%] top-[20%] flex flex-col gap-4 w-[25%] text-[#FB2E86]">
                <div className="font-semibold">
                  Тав тухтай орчинг таны амьдралд
                </div>
                <div className="font-bold text-[53px]">
                  2024 оны хамгийн шинэ загвар
                </div>
                <div className="font-semibold">
                  Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр
                  оруулж ирж байна
                </div>
                <button className="bg-[#FB2E86] text-white w-fit px-4 rounded-lg py-2">
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 absolute bottom-10 left-[45%]">
          <div
            onClick={() => {
              setCurrentSlide(0);
            }}
            className={`rounded-full w-5 h-5 border cursor-pointer border-[#FB2E86] ${
              currentSlide === 0 ? "bg-[#FB2E86]" : ""
            }`}
          ></div>
          <div
            onClick={() => {
              setCurrentSlide(1);
            }}
            className={`rounded-full w-5 h-5 border cursor-pointer border-[#FB2E86] ${
              currentSlide === 1 ? "bg-[#FB2E86]" : ""
            }`}
          ></div>
          <div
            onClick={() => {
              setCurrentSlide(2);
            }}
            className={`rounded-full w-5 h-5 border cursor-pointer border-[#FB2E86] ${
              currentSlide === 2 ? "bg-[#FB2E86]" : ""
            }`}
          ></div>
        </div>

        {/* <button
          onClick={goToPreviousSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2"
        >
          Prev
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2"
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
