"use client";
import { Cart } from "@/assets/cart";
import { Colors } from "@/assets/colors";
import { Love } from "@/assets/love";
import { Magnifier } from "@/assets/magnifier";
import Image from "next/image";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

const products = [
  { img: "sofa2.jpg", name: "Дан хүрэм пиджак", price: 750000 },
  { img: "sofa3.jpg", name: "Ширээний чийдэн", price: 750000 },
  { img: "Sofaa.jpg", name: "Гадуур хүрэм", price: 550000 },
  { img: "sofa2.jpg", name: "Дуу намсгагчтай чихэвч", price: 120000 },
  { img: "sofa3.jpg", name: "Хэвийн боов", price: 1 },
  { img: "Sofaa.jpg", name: "Хэвийн боов", price: 2 },
  { img: "sofa2.jpg", name: "Хэвийн боов", price: 3 },
  { img: "sofa2.jpg", name: "Хэвийн боов", price: 3 },
];

export const NewProducts = () => {
  return (
    <div>
      <div className="w-[1280px] m-auto border">
        <div className="text-[#1A0B5B] font-bold text-4xl text-center">
          Шинээр нэмэгдсэн
        </div>
        <div className="grid grid-cols-4 px-6 gap-4">
          {products.map((item, index) => {
            const Ref = useRef(null);
            const isHover = useHover(Ref);
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-[225px] h-[225px] bg-[#F6F7FB]">
                  <img className="w-full h-full" src={item.img} />
                </div>
                <div>{item.name}</div>
                <div>
                  <Colors />
                </div>
                <div>{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
