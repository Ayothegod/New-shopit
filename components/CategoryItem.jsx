import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";


const CategoryItem = ({category}) => {
        function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div>
        {
            category && 
            <div>
              {/* <p>{category[0]?.title}</p> */}
                  <div className="w-auto h-20 md:h-24 relative rounded-md overflow-hidden border border-neutral-300">
                    <Image
                      src={urlFor(category[8]?.image).url()}
                      alt={category[8]?.title}
                      fill
                      className="w-full h-full absolute object-cover object-center"
                    />
                    <p className="absolute inset-0 grid place-items-center uppercase font-bold backdrop-brightness-50 text-white  ">{category[8]?._type}</p>
                  </div>

            </div>
          }
    </div>
  )
}

export default CategoryItem