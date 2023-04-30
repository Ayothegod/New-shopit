import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";

const SchemaProducts = ({ sneakers }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  // console.log(sneakers);
  // console.log(products);

  return (
    <div className="p-1  bg-white mt-1 ">
      <div className="max-w-[72rem] mx-auto flex flex-col ">
        <div className="flex items-center">
          <p className="font-bold text-xl text-orange-600">Shoes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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

export default SchemaProducts;
