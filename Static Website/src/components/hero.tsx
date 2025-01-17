import { StaticImageData } from "next/image";
import Image from "next/image";

interface heroProps {
  imgData: StaticImageData;
  imgalt: string;
  title: string;
}

export default function Hero(props: heroProps) {
  return (
    <div className="relative h-screen">
      <h1>{}</h1>
      <div className='absolute -z-10 inset-0'>
        <Image className='object-cover' fill src={props.imgData} alt={props.imgalt} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-6xl text-white">
          {props.title}
        </h1>
      </div>
    </div>
  );
}