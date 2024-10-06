import { Josefin_Sans } from "next/font/google";
import { FC, ReactElement } from "react";
import { CiMail, CiPhone, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";

export const Header: FC = (): ReactElement => {
  return (
    <div className="flex w-full items-center justify-around bg-e1purple h-10 text-white">
      <div className="flex space-x-7">
        <div className="flex gap-3 ">
          <CiMail color="white" className="mt-1 " />
          mhhasanul@gmail.com
        </div>
        <div className="flex gap-3 ">
          <CiPhone className="mt-1 " />
          (12345)67890
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex gap-2">
          English <IoIosArrowDown className="mt-1" />
        </div>
        <div className="flex gap-2">
          USD <IoIosArrowDown className="mt-1" />
        </div>
        <div className="flex gap-1">
          Login <MdOutlinePerson className="mt-1" />
        </div>
        <div className="flex gap-1">
          Wishlist <CiHeart className="mt-1" />
        </div>
        <div>
          <CiShoppingCart className="" size={"23"} />
        </div>
      </div>
    </div>
  );
};
