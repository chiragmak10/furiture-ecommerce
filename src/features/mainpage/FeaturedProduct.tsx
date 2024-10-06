import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { featuredProductMockData } from "@/mockdata";
import Image from "next/image";
import { TbGardenCart } from "react-icons/tb";
import { HiHeart } from "react-icons/hi";

export const FeaturedProduct = () => {
  return (
    <div className="flex-row align-middle w-full justify-center">
      <label className="flex justify-center text-3xl text-e1offNavyBlue my-9">
        Featured Product
      </label>
      <div className="flex-col justify-center mt-10 w-[60%] h-5/6 mx-auto">
        <Swiper
          modules={[Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={17}
          autoplay={true}
          className=""
          height={80}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {featuredProductMockData.map((product) => {
            return (
              <SwiperSlide
                key={product.id}
                className=" flex  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex-col  bg-white  items-center align-middle">
                  <div className="flex   gap-2 absolute top-2 left-2">
                    <div className="absolute  flex flex-col gap-2">
                      <div className="rounded-full bg-gray-200  p-1">
                        <TbGardenCart size={20} className=" " />
                      </div>
                      <div className="rounded-full bg-gray-200  p-1">
                        <HiHeart size={20} className="" />
                      </div>
                    </div>
                  </div>
                  <Image
                    className="bg-slate-50 p-6 bg-cover"
                    src={product.thumbnail}
                    alt="product-image"
                    width={270}
                    height={270}
                  />
                </div>
                <p className="text-center font-semibold mb-2">{product.name}</p>
                <div className="flex justify-center mb-3">
                  <div className="bg-e1pink w-3 h-1 mx-1"></div>
                  <div className="bg-e1offNavyBlue w-3 h-1 mx-1"></div>
                  <div className="bg-cyan-300 w-3 h-1 mx-1"></div>
                </div>

                <p className="text-center text-gray-400 text-sm">
                  {product.code}
                </p>
                <p className="text-center text-sm text-gray-400 mb-2">
                  {product.price}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
