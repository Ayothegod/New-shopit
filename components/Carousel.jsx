import Image from "next/image";
import { useState } from "react";
import slider from "utils/asset/slider.png";
import sliderfs from "utils/asset/slider_FS.png";
import imager from "utils/asset/20220425_205815.jpg";
import imagine from "utils/asset/20220506_041426.jpg";
import imaginate from "utils/asset/20220519_195313.jpg";
import ima from "utils/asset/20220525_230857.jpg";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";


const Carousel = ({firstProduct}) => {
  console.log(firstProduct)

    function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }



  return (
    <div className="p-1  bg-white">
      <div className="max-w-[72rem] mx-auto md:flex ">

      <section
          className="hidden md:inline-block border-2 border-neutral-300 mx-1 px-1 min-w-[16rem]"
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

        {/* <div className="hidden mx-1 my-0 sm:inline-block">
          <Image src={urlFor(firstProduct[0].image).url()} alt="imagine" className="sm:h-48 md:h-80 object-cover object-center w-screen" fill/>
        </div> */}

        <div>

        
        <p>New Arrival</p>
       <div className="flex gap-2 overflow-scroll overflow-y-hidden scroller py-2 ">
          {firstProduct.map((product) => (
            <div>
              <div className="w-48 h-48 sm:h-48 sm:w-48 md:w-80 md:h-80 relative rounded-md overflow-hidden border border-neutral-300">
                <Image
                  src={urlFor(product.image).url()}
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
    </div>
  );
};

export default Carousel;
