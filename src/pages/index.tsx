import { MainPage } from "@/features/mainpage";
import { FeaturedProduct } from "@/features/mainpage/FeaturedProduct";
import { Header } from "@/features/mainpage/Header";
import { MainSection } from "@/features/mainpage/MainSection";
import { Navbar } from "@/features/navbar/navbar";

import { Josefin_Sans } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
const joseSans = Josefin_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={` flex-col  ${joseSans.className}`}>
      <AnimatedCursor
        innerSize={7}
        outerSize={10}
        color="110, 52, 129"
        outerAlpha={1}
        innerScale={2.5}
        outerScale={2}
      />
      <MainPage />
    </main>
  );
}
