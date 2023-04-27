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

  const gotoSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  return (
    <div className="p-1  bg-white">
      <div className="max-w-[72rem] mx-auto md:flex ">

      <section
          className="hidden md:inline-block border-r border-r-neutral-200 px-2"
          >
          <div className=" flex items-center ">
          <div >
          </div>
          <p className="text-xl font-bold ml-8">Shop-it</p>
          </div>
          <div className="py-2 flex flex-col justify-between h-full">
          <div >
          <h3 className="font-bold text-lg text-orange-600">Products. =&gt;</h3>
          <ul className="flex flex-col gap-4 mt-2">
                <li>Shirts</li>
                <li>Watches</li>
                <li>Gown</li>
                <li>Shorts</li>
                <li>Caps/Hats</li>
                <li>Shoes - [sneakers, heels]</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="px-2 py-1 hidden sm:inline-block w-max">
          <Image src={slider} alt="imagine" className="w-max sm:h-60 md:h-80 object-cover object-center"/>
        </div>

      <div style={{}} className=" flex w-auto flex-col sm:hidden">
        <div className="scroller flex w-auto gap-2 overflow-x-scroll overflow-y-hidden sm:overflow-hidden  ">
          {slides.map((slide, slideIndex) => (
            <>
              <Image
                key={slideIndex}
                src={slide.imgUrl}
                alt={slide.imgAlt}
                className="w-48 sm:w-48 sm:h-60 rounded-md mb-1"
              />
            </>
          ))}
        </div>
      </div>

    </div>
    </div>
  );
};

export default Carousel;
