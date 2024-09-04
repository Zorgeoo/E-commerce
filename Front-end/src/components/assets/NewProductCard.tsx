import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { Colors } from "./colors";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

interface MyComponentProps {
  name: string;
  price: number;
  img: string;
}

export const NewProductCard: React.FC<MyComponentProps> = ({
  img,
  name,
  price,
}) => {
  const Ref = useRef(null);
  const isHover = useHover(Ref);
  return (
    <div ref={Ref} className="flex flex-col justify-center gap-4 items-center">
      <div
        className={`w-[250px] h-[250px] overflow-hidden  relative flex justify-center duration-300 items-center ${
          isHover ? "bg-[#EBF4F3]" : "bg-[#F6F7FB]"
        }`}
      >
        <img className="w-4/6 h-4/6 object-fill" src={img} />
        <div
          className={`absolute -left-5 bottom-5 flex flex-col gap-2 duration-300 ${
            isHover ? "translate-x-8" : ""
          }`}
        >
          <CiShoppingCart className="hover:bg-white duration-100 rounded-full h-6 w-6 p-1" />
          <CiHeart className="hover:bg-white duration-100 rounded-full h-6 w-6 p-1" />
          <CiSearch className="hover:bg-white duration-100 rounded-full h-6 w-6 p-1" />
        </div>
      </div>
      <div className="font-semibold">{name}</div>
      <div>
        <Colors />
      </div>
      <div>{price.toLocaleString()}₮</div>
    </div>
  );
};
