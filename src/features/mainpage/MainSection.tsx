import Image from "next/image";
import { FC, ReactElement } from "react";
import { AttentionSeeker } from "react-awesome-reveal";
export const MainSection: FC = (): ReactElement => {
  return (
    <section className="bg-e1pantonePurple w-full grid grid-columns-3 grid-flow-col h-4/6 pb-11">
      <Image
        className="ml-6"
        src={"/image-lamp.png"}
        width={300}
        height={300}
        alt="chair-image"
      />

      <div className=" flex flex-col w-5/6 mt-[24%] -ml-[10%]">
        <div className="text-e1pink font-semibold text-xs ">
          Best Furniture Collection for your Castle...
        </div>
        <div className="text-5xl mt-3">
          New Furniture Collection Trends in 2024
        </div>
        <div className="mt-3 text-sm text-gray-400 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          blanditiis soluta dolor sit amet consectetur...
        </div>
        <AttentionSeeker effect="headShake" delay={3000} triggerOnce={false}>
          <button className="w-32 mt-4 text-white bg-e1pink h-14">
            Shop Now
          </button>
        </AttentionSeeker>
      </div>
      <AttentionSeeker effect="pulse">
        <Image
          style={{
            borderRadius: "18% 59% 42% 52% / 28% 35% 25% 71%",
          }}
          className="bg-[#f7e7ff] -ml-[30%] mt-16"
          src={
            "/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room.png"
          }
          width={450}
          height={450}
          alt="chair-image"
        />
      </AttentionSeeker>
    </section>
  );
};
