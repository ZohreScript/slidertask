import { FaCode, FaLaptop, FaMoon } from "react-icons/fa";
import { SliderItem } from "../types/slider.type";
import slide1 from "../../../../public/images/slide (1).jpg"
import slide2 from "../../../../public/images/slide (2).jpg";
import slide3 from "../../../../public/images/slide (3).jpg";
import slide4 from "../../../../public/images/slide (4).jpg";
const sliderData: SliderItem[] = [
  {
    image: slide1,
    buttons: [
      { text: "ثبت سفارش" },
      { text: "دمو" },
    ],
    icons: [FaMoon, FaLaptop, FaCode], 
  },
  {
    image:slide2,
    buttons: [
      { text: "مشاهده پروژه" },
    ],
    icons: [FaMoon, FaLaptop],
  },
  {
    image: slide3,
    buttons: [
      { text: "مشاهده پروژه" },
      { text: "دمو" },
    ],
    icons: [FaLaptop],
  },
  {
    image: slide4,
    buttons: [
      { text: "ثبت سفارش" },
      { text: "دمو" },
    ],
    icons: [FaMoon],
  },
  {
    image: slide1,
    buttons: [
      { text: "ثبت سفارش" },
      { text: "دمو" },
    ],
    icons: [FaMoon, FaLaptop, FaCode], 
  },
  {
    image:slide2,
    buttons: [
      { text: "مشاهده پروژه" },
    ],
    icons: [FaMoon, FaLaptop],
  },
  {
    image: slide3,
    buttons: [
      { text: "مشاهده پروژه" },
      { text: "دمو" },
    ],
    icons: [FaLaptop],
  },
  {
    image: slide4,
    buttons: [
      { text: "ثبت سفارش" },
      { text: "دمو" },
    ],
    icons: [FaMoon],
  },
  
];

export default sliderData;
