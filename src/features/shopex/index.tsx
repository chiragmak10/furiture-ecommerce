import React from "react";
import SupportCard from "./supportCard";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaRegLifeRing } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";

export const WhatShopexOffers = () => {
  return (
    <div className="flex w-[100%] h- flex-col items-center align-middle justify-center">
      <p className="font-semibold text-3xl text-e1offNavyBlue my-9">
        What Shopex Offers!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[60%]">
        <SupportCard
          icon={AiOutlineQuestionCircle}
          supportInfo="24/7 Support Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
        <SupportCard
          icon={BiSupport}
          supportInfo="Expert Assistance Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
        <SupportCard
          icon={FaRegLifeRing}
          supportInfo="Customer Care Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
        <SupportCard
          icon={HiSupport}
          supportInfo="Technical Help Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
      </div>
    </div>
  );
};
