import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";
export const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[44px] text-white bg-[#7E33E0] ">
        <div className="w-[1280px] m-auto border flex justify-between items-center">
          <div className="flex items-center gap-[66px]">
            <div className="flex items-center gap-3">
              <div>
                <CiMail />
              </div>
              <div>info@ecommerce.mn</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <MdOutlinePhoneInTalk />
              </div>
              <div>77123456</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div>Нэвтрэх</div>
              <div>
                <IoManOutline />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>Хадгалах</div>
              <div>
                <CiHeart />
              </div>
            </div>
            <div>
              <div>
                <CiShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-[1280px] m-auto py-3  border flex justify-between items-center">
          <div className="flex items-center gap-16">
            <div>
              <div className="font-bold text-[34px]">Ecommerce</div>
            </div>
            <div className="flex items-center gap-10">
              <div>Нүүр</div>
              <div>Ангилал</div>
            </div>
          </div>
          <div className="flex items-center ">
            <input className="border "></input>
            <div className="px-2 py-1 bg-[#FB2E86] h-full">
              <SlMagnifier className="text-white h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
