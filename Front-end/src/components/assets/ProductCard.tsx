"use client";

import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { Cart } from "./cart";
import { Love } from "./love";
import { Magnifier } from "./magnifier";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

interface MyComponentProps {
  name: string;
  price: number;
  img: string;
}
export const ProductCard: React.FC<MyComponentProps> = ({
  name,
  img,
  price,
}) => {
  const Ref = useRef(null);
  const isHover = useHover(Ref);
  return (
    <div ref={Ref} className="flex flex-col shadow-xl group">
      <div className="w-[225px] h-[225px] px-2 py-2 relative overflow-hidden">
        <img className="w-full h-full object-cover" src={img} />
        <div
          className={`flex items-center gap-1 absolute top-3 left-3 ${
            isHover ? "" : "-translate-x-24"
          } duration-300 ease-in-out`}
        >
          <CiShoppingCart className="hover:bg-white duration-100 rounded-full h-6 w-6 p-1" />
          <CiHeart className="hover:bg-white duration-100 rounded-full h-6 w-6 p-1" />
          <CiSearch className="hover:bg-white duration-100 rounded-full h-6 w-6 p-1" />
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
        <div className="relative z-10">{name}</div>
        <div className="relative z-10">{price.toLocaleString()}₮</div>
        <div
          className={`w-full h-full absolute bottom-0 left-0 bg-[#2F1AC4] duration-300 ease-in-out ${
            isHover ? "" : "translate-y-28"
          }`}
        ></div>
      </div>
    </div>
  );
};
