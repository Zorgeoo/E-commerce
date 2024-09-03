import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="bg-[#EEEFFB] h-[480px] flex items-center">
        <div className="w-fit border m-auto">
          <div className="flex justify-center gap-[100px] text-[#8A8FB9]">
            <div className="flex flex-col gap-[25px]">
              <div className="font-bold text-[38px] text-black">eCommerce</div>
              <div className="flex">
                <input placeholder="Имэйл" className="border rounded-sm" />
                <div className="bg-[#FB2E86] px-2 py-1 text-white rounded-sm">
                  Бүртгүүлэх
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div>Хаяг</div>
                <div>
                  Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                  Гурван гол - 401 тоот
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px]">
              <div className="font-bold text-[22px] text-black">Ангилал</div>
              <div className="flex flex-col gap-5">
                <div>Хувцас</div>
                <div>Камер, хэрэгсэл</div>
                <div>Ухаалаг утас, таблет</div>
                <div>Чихэвч</div>
                <div>Гэр, ахуйн бараа</div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px]">
              <div className="font-bold text-[22px] text-black">Бусад</div>
              <div className="flex flex-col gap-5">
                <div>Бидний тухай</div>
                <div>Холбоо барих</div>
                <div>Түгээмэл асуулт хариулт</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E4F8] flex justify-around py-2 items-center">
        <div className="text-[#9DA0AE]">©ecommerce</div>
        <div className="flex gap-3">
          <FaFacebook />
          <AiFillInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};
