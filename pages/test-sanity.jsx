import { createClient } from "next-sanity";
import Link from "next/link";
import { client } from "@/utils/client";
import imageUrlBuilder from "@sanity/image-url";


export default function TestSanity({ sneakers }) {
  // console.log( firstProd)

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <>
      <h2>Products</h2>
      <main className="flex  justify-between p-8">
        <div className="cursor-pointer flex flex-col gap-10">
          {sneakers.map((watch) => (
            <>
              <Link href={`/products/sneakers/${watch.slug.current}`}>
                 <img src={urlFor(watch.image).url()}/> 
                <p>{watch.title}</p>
                <p>{watch.description}</p>
                <p>{watch.slug.current}</p>
              </Link>
            </>
          ))}
        </div>

      </main>
    </>
  );
}

export async function getStaticProps() {
  const sneakers = await client.fetch(`*[_type == "sneakers"] | order(_createdAt desc){
    _id,title,image,slug,price,_createdAt,offPrice
  }`);

  

  return {
    props: {
      sneakers,
    },
  };
}
