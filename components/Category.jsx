import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";


const Category = ({sneakers}) => {
    function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="bg-white mt-1">
      <div className="max-w-[72rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-2 text-black">
          {
            sneakers && 
            <div>
              {/* <p>{sneakers[0]?.title}</p> */}
              <Link href="/sneakers">
                  <div className="w-auto h-20 md:h-24 relative rounded-md overflow-hidden border border-neutral-300">
                    <Image
                      src={urlFor(sneakers[0]?.image).url()}
                      alt={sneakers[0]?.title}
                      fill
                      className="w-full h-full absolute object-cover object-center"
                    />
                    <p>{sneakers[0]?._type}</p>
                  </div>

                </Link>
            </div>
          }
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
        </div>
      </div>

      {/* 
      {firstProduct.map((product) => (
              <div>
                <Link href={`/prod/${product.slug.current}`}>
                  <div className="w-48 h-48 sm:h-48 sm:w-48 md:w-80 md:h-80 relative rounded-md overflow-hidden border border-neutral-300">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.imgAlt}
                      fill
                      className="w-full h-full absolute object-cover object-center"
                    />
                    <p>{product?._type}</p>
                  </div>

                </Link>
              </div>
            ))}
       */}
    </div>
  );
};


export default Category;
