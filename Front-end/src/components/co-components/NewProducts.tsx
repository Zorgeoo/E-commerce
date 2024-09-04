"use client";
import { Colors } from "@/components/assets/colors";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { NewProductCard } from "../assets/NewProductCard";

const products = [
  { img: "backpack.png", name: "Дан хүрэм пиджак", price: 750000 },
  { img: "beatz.png", name: "Ширээний чийдэн", price: 750000 },
  { img: "camera.png", name: "Гадуур хүрэм", price: 550000 },
  { img: "chair.png", name: "Дуу намсгагчтай чихэвч", price: 120000 },
  { img: "chair2.png", name: "Хэвийн боов", price: 100000 },
  { img: "Pinksofa.png", name: "Хэвийн боов", price: 25000 },
  { img: "watch.png", name: "Хэвийн боов", price: 33000 },
  { img: "watch2.png", name: "Хэвийн боов", price: 3100 },
];

export const NewProducts = () => {
  return (
    <div className="pt-[130px]">
      <div className="w-[1280px] m-auto ">
        <div className="text-[#1A0B5B] font-bold text-4xl text-center pb-20">
          Шинээр нэмэгдсэн
        </div>
        <div className="grid grid-cols-4 px-6 gap-4">
          {products.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4"
              >
                <NewProductCard
                  price={item.price}
                  name={item.name}
                  img={item.img}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[1280px] m-auto px-12 py-[130px]  ">
        <div className="text-[#1A0B5B] font-bold text-4xl text-center pb-20 w-fit m-auto">
          Үйлчилгээний тухай
        </div>
        <div className="flex gap-8">
          <div className="flex  flex-1 flex-col items-center p-10 gap-7 shadow-xl ">
            <div className="w-[70px] h-[65px]">
              <img src="deliverycar.png" className="w-full h-full" />
            </div>
            <div className="text-[#151875] font-bold text-[22px]">
              Үнэгүй хүргэлт
            </div>
            <div className="text-center text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
          <div className="flex  flex-1 flex-col items-center p-10 gap-7 shadow-xl ">
            <div className="w-[70px] h-[65px]">
              <img src="cashback.png" className="w-full h-full" />
            </div>
            <div className="text-[#151875] font-bold text-[22px]">
              Буцаан олголт
            </div>
            <div className="text-center text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
          <div className="flex  flex-1 flex-col items-center p-10 gap-7 shadow-xl ">
            <div className="w-[70px] h-[65px]">
              <img src="medal.png" className="w-full h-full" />
            </div>
            <div className="text-[#151875] font-bold text-[22px]">
              Найдвартай
            </div>
            <div className="text-center text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
          <div className="flex  flex-1 flex-col items-center p-10 gap-7 shadow-xl ">
            <div className="w-[70px] h-[65px]">
              <img src="24:7.png" className="w-full h-full" />
            </div>
            <div className="text-[#151875] font-bold text-[22px]">
              Үнэгүй хүргэлт
            </div>
            <div className="text-center text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
