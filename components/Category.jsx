import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Link from "next/link";
import CategoryItem from "./CategoryItem";

const Category = ({ sneakers,shorts,glasses }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="bg-white mt-1">
      <div className="max-w-[72rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-2 text-black">
          <Link href="/sneakers">
            <CategoryItem category={sneakers} />
          </Link>
          <Link href="/shorts">
            <CategoryItem category={shorts} />
          </Link>
          <Link href="/glasses">
            <CategoryItem category={glasses} />
          </Link>
          <Link href="/sneakers">
            <CategoryItem category={sneakers} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
