"use client";
import { ProductCard } from "@/components/assets/ProductCard";
import { useState, useEffect, useRef } from "react";

const products = [
  { img: "sofa2.jpg", name: "Дан хүрэм пиджак", price: 750000 },
  { img: "sofa3.jpg", name: "Ширээний чийдэн", price: 750000 },
  { img: "Sofaa.jpg", name: "Гадуур хүрэм", price: 550000 },
  { img: "sofa2.jpg", name: "Дуу намсгагчтай чихэвч", price: 120000 },
  { img: "sofa3.jpg", name: "Хэвийн боов", price: 1200 },
  { img: "Sofaa.jpg", name: "Хэвийн боов", price: 2400 },
  { img: "sofa2.jpg", name: "Хэвийн боов", price: 3100 },
];

const indicator = ["", "", "", ""];

export const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        goToNextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentSlide]);
  const totalSlides = products.length;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 4 ? 0 : prevSlide + 1
    );
  };
  return (
    <div className="pt-[130px]">
      <div className="w-[1280px] m-auto overflow-hidden">
        <div>
          <div className="text-[#1A0B5B] font-bold text-4xl text-center pb-10">
            Онцлох бүтээгдэхүүн
          </div>
          <div
            className="flex gap-[100px] py-10 px-6 transition-transform duration-700 "
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    img={item.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-4 m-auto w-[1280px] justify-center">
          {indicator.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-6 h-1  rounded-xl duration-300 ${
                  index === currentSlide
                    ? "bg-[#FB2E86] scale-x-150"
                    : "bg-[#FEBAD7]"
                } `}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
