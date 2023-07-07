import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaProducts from "@/components/SchemaProducts";
import Body from "@/components/Body";
import { client } from "@/utils/client";


export default function Sneakers({glasses}) {

console.log({glasses});
  return (
    <>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
        omo x2
            <SchemaProducts pageproducts={glasses} name="Glasses"/>
        <Footer/>
      </main>
    </>
  );

}

export async function getStaticProps() {

  const glasses = await client.fetch(`*[_type == "glasses"] | order(_createdAt desc){
    title,slug,image,price
  } `)
  return {
    props: {
      glasses,
    },
  };
}

