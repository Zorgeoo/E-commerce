// import { ProductCard } from "@/assets/ProductCard";
"use client";

import { Cart } from "@/assets/cart";
import { Love } from "@/assets/love";
import { Magnifier } from "@/assets/magnifier";
import { useState, useEffect, useRef } from "react";
import { useHover } from "usehooks-ts";

const products = [
  { img: "sofa2.jpg", name: "Дан хүрэм пиджак", price: 750000 },
  { img: "sofa3.jpg", name: "Ширээний чийдэн", price: 750000 },
  { img: "Sofaa.jpg", name: "Гадуур хүрэм", price: 550000 },
  { img: "sofa2.jpg", name: "Дуу намсгагчтай чихэвч", price: 120000 },
  { img: "sofa3.jpg", name: "Хэвийн боов", price: 1 },
  { img: "Sofaa.jpg", name: "Хэвийн боов", price: 2 },
  { img: "sofa2.jpg", name: "Хэвийн боов", price: 3 },
];

export const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);
  const totalSlides = products.length;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 4 ? 0 : prevSlide + 1
    );
  };

  return (
    <div>
      <div className="w-[1280px] m-auto border overflow-hidden">
        <div>
          <div className="text-[#1A0B5B] font-bold text-4xl text-center">
            Онцлох бүтээгдэхүүн
          </div>
          <div
            className="flex gap-[100px] py-10 px-6 transition-transform duration-700 "
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {products.map((item, index) => {
              const Ref = useRef(null);
              const isHover = useHover(Ref);
              return (
                // <div key={index}>
                //   <ProductCard
                //     name={item.name}
                //     price={item.price}
                //     img={item.img}
                //   />
                // </div>
                <div
                  ref={Ref}
                  key={index}
                  className="flex flex-col w-[20%] shadow-2xl group"
                >
                  <div className="w-[225px] h-[225px] px-2 py-2 relative overflow-hidden">
                    <img className="w-full h-full" src={item.img} />
                    <div
                      className={`flex items-center gap-1 absolute top-3 left-3 ${
                        isHover ? "" : "-translate-x-24"
                      } duration-300 ease-in-out`}
                    >
                      <Cart />
                      <Love />
                      <Magnifier />
                    </div>
                    <div className="hidden group-hover:block duration-300">
                      <button
                        className={`bg-[#08D15F] text-white text-[12px] px-2 py-1 rounded-lg absolute bottom-5 left-[28%] duration-700 ease-in-out ${
                          isHover ? "" : "translate-y-24"
                        }`}
                      >
                        Дэлгэрэнгүй
                      </button>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col overflow-hidden relative gap-6 py-4 items-center group-hover:!text-white duration-300`}
                  >
                    <div className="relative z-10">{item.name}</div>
                    <div className="relative z-10">{item.price}</div>
                    <div
                      className={`w-full h-full absolute bottom-0 left-0 bg-[#2F1AC4] duration-300 ease-in-out ${
                        isHover ? "" : "translate-y-28"
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
