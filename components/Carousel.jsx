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
          className="hidden md:inline-block border-2 border-neutral-300 mx-1 px-1 w-[20rem]"
          >
          <div className="flex flex-col justify-between">
          <div >
          <h3 className="font-bold text-lg text-orange-600">Products.</h3>
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

        <div className="hidden mx-1 sm:inline-block">
          <Image src={slider} alt="imagine" className="sm:h-48 md:h-80 object-cover object-center w-screen"/>
        </div>


       <div className="flex gap-2 overflow-scroll overflow-y-hidden scroller my-2 py-2 sm:hidden">
          {slides.map((product) => (
            <div>
              <div className="w-48 h-48 relative rounded-md overflow-hidden">
                <Image
                  src={product.imgUrl}
                  alt={product.imgAlt}
                  fill
                  className="w-full h-full absolute object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

    </div>
    </div>
  );
};

export default Carousel;
