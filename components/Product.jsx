import slider from "utils/asset/slider.png";
import sliderfs from "utils/asset/slider_FS.png";
import imager from "utils/asset/20220425_205815.jpg";
import imagine from "utils/asset/20220506_041426.jpg";
import imaginate from "utils/asset/20220519_195313.jpg";
import ima from "utils/asset/20220525_230857.jpg";
import Image from "next/image";
import { Slideshow } from "@mui/icons-material";
import ImageBox from "./ImageBox";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "first product",
      description: "first product description",
      price: 21.45,
      imgUrl: slider,
      imgAlt: "slider",
    },
    {
      id: 2,
      title: "second product",
      description: "second product description",
      price: 73278.3,
      imgUrl: imager,
      imgAlt: "slider",
    },
    {
      id: 3,
      title: "third product",
      description: "third product description",
      price: 130.5,
      imgUrl: imaginate,
      imgAlt: "slider",
      imgAlt: "imaginate",
    },
    {
      id: 4,
      title: "fourth product",
      description: "fourth product description",
      price: 34.0,
      imgUrl: ima,
      imgAlt: "slider",
      imgAlt: "ima",
    },
    {
      id: 5,
      title: "fifth product",
      description: "fifth product description",
      price: 34.0,
      imgUrl: imagine,
      imgAlt: "slider",
      imgAlt: "ima",
    },
    {
      id: 6,
      title: "sixth product",
      description: "sixth product description",
      price: 34.0,
      imgUrl: imager,
      imgAlt: "slider",
      imgAlt: "ima",
    },
  ];
  // console.log(products);

  return (
    <div className="p-1  bg-white mt-1 ">
      <div className="max-w-[72rem] mx-auto md:flex ">
        {/* <div  className=" flex w-auto flex-col sm:hidden">
           {products.map((slide, slideIndex) => (
            <>
              <Image
                key={slideIndex}
                src={slide.imgUrl}
                alt={slide.imgAlt}
                className="w-48 sm:w-48 sm:h-60 rounded-md mb-1"
              />
            </>
          ))}
        </div> */}

        <div style={{}} className=" flex w-auto flex-col sm:hidden">
          <div className="scroller flex w-auto gap-2 overflow-x-scroll overflow-y-hidden sm:overflow-hidden ">
            {/* {products.map((slide, slideIndex) => (
              <>
                <ImageBox slide={slide} slideIndex={slideIndex}/>
              </>
            ))} */}
          </div>
        </div>
        <div className="flex gap-2 overflow-scroll overflow-y-hidden scroller my-2 py-2 px-2">
          {products.map((product) => (
            <div>
              <div className="w-60 h-60 relative rounded-md overflow-hidden">
                <Image
                  src={product.imgUrl}
                  alt={product.imgAlt}
                  fill
                  className="w-full h-full absolute object-cover object-center"
                />
              </div>
              <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="my-4">Hello</p>
      </div>
    </div>
    // </div>
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
