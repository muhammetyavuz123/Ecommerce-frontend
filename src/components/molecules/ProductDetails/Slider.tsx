/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { InfoCard } from "./InfoCard";
import Image from "next/image";

const images = [
  "/png/1.jpg",
  "/png/2.jpg",
  "/png/3.jpg",
  "/png/4.png",
  "/png/3.jpg",
];
export const Slider: FC<{}> = ({}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <>
      <div className=" ">
        <div className="flex justify-center items-center w-full h-[450px] relative ">
          <Image
            src={selectedImage}
            alt={selectedImage}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 mt-8 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="  flex justify-center items-center w-full h-28 relative "
              style={{
                border: selectedImage === image ? "4px solid blue" : "",
              }}
            >
              <Image
                src={image}
                alt={image}
                layout="fill"
                objectFit="cover"
                quality={100}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
