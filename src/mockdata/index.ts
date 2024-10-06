import { ReactElement } from "react";

interface FeaturedProductInterface {
    id: string;
    name: string;
    price: string;
    code: string;
    thumbnail: string;
    className: string;
    content: JSX.Element | React.ReactNode | string;
  }
  
  


  export const featuredProductMockData: FeaturedProductInterface[] = [
    {
      id: "1",
      name: "Cantilever chair",
      price: "$19.99",
      code: "ABC123",
      thumbnail: "/image-1169.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "2",
      name: "Cantilever chair",
      price: "$29.99",
      code: "DEF456",
      thumbnail: "/image-1170.png",
      className: "md:col-span-2",
      content:'',
    },
    {
      id: "3",
      name: "Cantilever chair",
      price: "$39.99",
      code: "GHI789",
      thumbnail: "/image-1171.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "4",
      name: "Cantilever chair",
      price: "$49.99",
      code: "JKL012",
      thumbnail: "/image-1174.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "5",
      name: "Cantilever chair",
      price: "$19.99",
      code: "ABC123",
      thumbnail: "/image-1169.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "6",
      name: "Cantilever chair",
      price: "$29.99",
      code: "DEF456",
      thumbnail: "/image-1170.png",
      className: "md:col-span-2",
      content:'',
    },
    {
      id: "7",
      name: "Cantilever chair",
      price: "$39.99",
      code: "GHI789",
      thumbnail: "/image-1171.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "8",
      name: "Cantilever chair",
      price: "$49.99",
      code: "JKL012",
      thumbnail: "/image-1174.png",
      className: "md:col-span-2",
      content: '',
    },
  ];
  


  export const latestProductMockData: FeaturedProductInterface[] = [
    {
      id: "1",
      name: "Cantilever chair",
      price: "$19.99",
      code: "ABC123",
      thumbnail: "/image 23.svg",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "2",
      name: "Cantilever chair",
      price: "$29.99",
      code: "DEF456",
      thumbnail: "/image 1167.svg",
      className: "md:col-span-2",
      content:'',
    },
    {
      id: "3",
      name: "Cantilever chair",
      price: "$39.99",
      code: "GHI789",
      thumbnail: "/image 1168.svg",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "4",
      name: "Cantilever chair",
      price: "$49.99",
      code: "JKL012",
      thumbnail: "/image-1174.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "5",
      name: "Cantilever chair",
      price: "$19.99",
      code: "ABC123",
      thumbnail: "/image-1169.png",
      className: "md:col-span-2",
      content: '',
    },
    {
      id: "6",
      name: "Cantilever chair",
      price: "$29.99",
      code: "DEF456",
      thumbnail: "/image-1170.png",
      className: "md:col-span-2",
      content:'',
    },
  ];
  