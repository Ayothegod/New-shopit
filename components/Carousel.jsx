import Image from "next/image";
import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";

const Carousel = ({ firstProduct }) => {
  console.log(firstProduct);

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="p-1  bg-white">
      <div className="max-w-[72rem] mx-auto md:flex ">
        <section className="hidden md:inline-block border-2 border-neutral-300 mx-1 px-1 min-w-[16rem]">
          <div className="flex flex-col justify-between">
            <div>
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

        <div>
          <p className="text-orange-600 font-semibold text-xl">New Arrival</p>
          <div className="flex gap-2 py-1 overflow-scroll overflow-y-hidden scroller">
            {firstProduct.map((product) => (
              <div>
                <Link href={`/product/${product.slug.current}`}>
                  <div className="w-48 h-48 sm:h-48 sm:w-48 md:w-80 md:h-80 relative rounded-md overflow-hidden border border-neutral-300">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.imgAlt}
                      fill
                      className="w-full h-full absolute object-cover object-center"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
