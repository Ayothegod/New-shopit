import Image from "next/image";
import { useState } from "react";
import slider from "utils/asset/slider.png";
import sliderfs from "utils/asset/slider_FS.png";
import imager from "utils/asset/20220425_205815.jpg";
import imagine from "utils/asset/20220506_041426.jpg";
import imaginate from "utils/asset/20220519_195313.jpg";
import ima from "utils/asset/20220525_230857.jpg";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { imgUrl: slider, imgAlt: "slider" },
    { imgUrl: sliderfs, imgAlt: "sliderfs" },
    { imgUrl: imager, imgAlt: "imager" },
    { imgUrl: imagine, imgAlt: "imagine" },
    { imgUrl: imaginate, imgAlt: "imaginate" },
    { imgUrl: ima, imgAlt: "ima" },
  ];
//   const gotonext = () => {
//     const islastImage = slides.length - 1 === current;
//     const newIndex = islastImage ? 0 : current + 1;
//     setCurrentIndex(newIndex);
//   };
const gotoSlide = slideIndex => {
    setCurrent(slideIndex)
}
  return (
    <div className="p-1 bg-white">
      <p>Carousel</p>
      <div style={{}} className=" flex w-full flex-col ">
        <div className="scroller flex w-full gap-2 overflow-x-scroll overflow-y-hidden sm:overflow-hidden  ">
          {slides.map((slide,slideIndex) => (
            <>
              <Image
                key={slideIndex}
                src={slide.imgUrl}
                alt={slide.imgAlt}
                className="w-48 sm:w-full sm:h-60 rounded-md mb-1"
              />
            </>
          ))}
        </div>
        <div className="flex">
          {slides.map((slide, slideIndex) => (
            <>
              <div key={slideIndex}>
                <button key={slideIndex} className=" cursor-pointer " onClick={() => gotoSlide(slideIndex)}>a</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
