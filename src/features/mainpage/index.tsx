import { Footer } from "../footer";
import { LatestProduct } from "../latestProduct";
import { Navbar } from "../navbar/navbar";
import { WhatShopexOffers } from "../shopex";
import { FeaturedProduct } from "./FeaturedProduct";
import { Header } from "./Header";
import { MainSection } from "./MainSection";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <MainSection />
      <FeaturedProduct />
      <LatestProduct />
      <WhatShopexOffers />
      <Footer />
    </>
  );
};
