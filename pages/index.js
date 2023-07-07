import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
import { client } from "@/utils/client";
import imageUrlBuilder from "@sanity/image-url";
import { useStore } from "@/utils/store";

export default function Home(
  {sneakers,firstProduct,shorts,watches,glasses}
  ) {
    const [sneaker, setSneakers] = useStore((state) => [state.sneakers, state.setSneakers])
    console.log(sneaker);
    // console.log({sneakers,firstProduct,shorts,watches,glasses})

  return (
    <>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
        <Body 
        // sneakers={sneakers} firstProduct={firstProduct} watches={watches} glasses={glasses} shorts={shorts} 
        /> 
        <Footer/>
      </main>
    </>
  );

}

// export async function getStaticProps() {

//   const sneakers = await client.fetch(`*[_type == "sneakers"] | order(_createdAt desc){
//     _id,title,image,slug,price,_createdAt,offPrice,_type
//   } `)
//   const watches = await client.fetch(`*[_type == "watches"] | order(_createdAt desc){
//     _id,title,image,slug,price,_createdAt,offPrice,_type
//   } `)
//   const glasses = await client.fetch(`*[_type == "glasses"] | order(_createdAt desc){
//     _id,title,image,slug,price,_createdAt,offPrice,_type
//   } `)
//   const shorts = await client.fetch(`*[_type == "shorts"] | order(_createdAt desc){
//     _id,title,image,slug,price,_createdAt,offPrice,_type
//   } `)

//   const firstProduct = await client.fetch(`*[_type in ["shorts", "sneakers","glasses","watches"] && position == "first" ]{
//     image,slug
//   } `)

//   return {
//     props: {
//       sneakers,firstProduct,shorts,watches,glasses
//     },
//   };
// }
