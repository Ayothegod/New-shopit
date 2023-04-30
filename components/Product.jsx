import slider from "utils/asset/slider.png";
import sliderfs from "utils/asset/slider_FS.png";
import imager from "utils/asset/20220425_205815.jpg";
import imagine from "utils/asset/20220506_041426.jpg";
import imaginate from "utils/asset/20220519_195313.jpg";
import ima from "utils/asset/20220525_230857.jpg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";

const Product = ({ sneakers }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  // console.log(sneakers);
  // console.log(products);

  return (
    <div className="p-1  bg-white mt-1 ">
      <div className="max-w-[72rem] mx-auto flex flex-col ">
        <div className="flex  justify-between items-center">
          <p className="font-bold text-xl text-neutral-800">New Arrival</p>
          <p className="text-neutral-500 font-medium text-sm">SEE MORE</p>
        </div>

        <div className="flex gap-2 overflow-scroll overflow-y-hidden scroller  py-2 ">
          {sneakers.map((sneaker) => (
            <>
            <Link href={`/prod/${sneaker.slug.current}`}>
              <div>
                <div className="w-60 h-60 relative rounded-md overflow-hidden">
                  <Image
                    src={urlFor(sneaker.image).url()}
                    alt={sneaker.title}
                    fill
                    className="w-full h-full absolute object-cover object-center"
                  />
                </div>
                <div>
                  <p className="font-medium text-neutral-700 text-lg">{sneaker.title}</p>
                </div>
              </div>
            </Link>
            </>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

{
  /* <div style={{}} className=" flex w-auto flex-col sm:hidden">
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
      </div> */
}
