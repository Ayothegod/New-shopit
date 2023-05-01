import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";
import {FaCartPlus } from "react-icons/fa";


const SchemaProducts = ({ pageProducts,name}) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="py-4 px-2  bg-white my-4 ">
      <div className="max-w-[72rem] mx-auto flex flex-col ">
        <div className="flex items-center">
          <p className="font-bold text-xl mb-2 text-orange-600">{name}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {pageProducts.map((product) => (
            <div>
            <Link href={`/prod/${product.slug.current}`}>
              <div className="">
                <div className="w-full h-48 sm:w-full sm:h-60 md:w-full md:h-80  relative rounded-md overflow-hidden">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    fill
                    className="w-full h-full absolute object-cover object-center border border-neutral-200"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm text-neutral-600 capitalize">{product.title}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-neutral-900 font-bold">#{product.price}</p>
                    
                  </div>
                </div>
              </div>
            </Link>
            <button className="rounded-md mt-1 bg-orange-600 py-2 px-2 w-full md:w-2/3 text-white font-medium text-sm flex items-center gap-6"><FaCartPlus className="w-5 h-5"/>Add to Cart</button>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default SchemaProducts;
