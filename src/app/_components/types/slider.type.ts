import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type Button = {
    text: string;
  };
  
  export type SliderItem = {
    image: StaticImageData; 
    buttons: Button[]; 
    icons: IconType[];
  };
  