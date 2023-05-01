import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";

const Product = ({ products,name,goto }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="p-1  bg-white mt-1 ">
      <div className="max-w-[72rem] mx-auto flex flex-col ">
        <div className="flex  justify-between items-center">
          <p className="font-bold text-xl text-orange-600">{name}</p>
          <Link href={`/${goto}`}>
            <p className="text-neutral-500 font-medium text-sm">SEE MORE</p>
          </Link>
        </div>

        {products && (
          <div className="flex gap-2 overflow-scroll overflow-y-hidden scroller  py-2 ">
            {products.map((product) => (
              <>
                <Link href={`/item/${product.slug.current}`}>
                  <div>
                    <div className="w-60 h-60 relative rounded-md overflow-hidden">
                      <Image
                        src={urlFor(product?.image).url()}
                        alt={product.title}
                        fill
                        className="w-full h-full absolute object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-700 text-lg">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
