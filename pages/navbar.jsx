import Image from "next/image";
import { useState } from "react";
import slider from "utils/asset/slider.png";
import sliderfs from "utils/asset/slider_FS.png";
import imager from "utils/asset/20220425_205815.jpg"
import imagine from "utils/asset/20220506_041426.jpg"
import imaginate from "utils/asset/20220519_195313.jpg"
import ima from "utils/asset/20220525_230857.jpg"


const Carousel = () => {
  const slides = [
    { imgUrl: slider, imgAlt: "slider" },
    { imgUrl: sliderfs, imgAlt: "sliderfs" },
    { imgUrl: imager, imgAlt: "imager" },
    { imgUrl: imagine, imgAlt: "imagine" },
    { imgUrl: imaginate, imgAlt: "imaginate" },
    { imgUrl: ima, imgAlt: "ima" },
  ];
  const [currentIndex,setCurrentIndex] = useState(0)
  const gotoPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1    
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  // const interval = setInterval(() => {
  //   gotoNext()
  // }, 5000)
  // console.log(interval);

  const gotoSlide = slideIndex => {
    setCurrentIndex(slideIndex)  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <button className="font-semibold text-6xl mr-4" onClick={gotoPrevious}>-</button>
      <div className="">
        <Image
          src={slides[currentIndex].imgUrl}
          alt={slides[currentIndex].imgAlt}
          className="h-48 w-48  rounded-md overflow-hidden object-cover  hover:scale-110 transition duration-500"
          />
          <div className="flex items-center justify-center gap-4">

          {
            slides.map((slide,slideIndex) => (
              <button key={slideIndex} className="flex" onClick={() => gotoSlide(slideIndex)}>0</button>
            ))
          }
          </div>
      </div>
          <button className="font-semibold text-6xl ml-4" onClick={gotoNext}>+</button>
    </div>
  );
};

export default Carousel;

  const gotoPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1    
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
