import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaProducts from "@/components/SchemaProducts";
import Body from "@/components/Body";
import { client } from "@/utils/client";


export default function Sneakers({shorts}) {

console.log({shorts});
  return (
    <>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
            <SchemaProducts pageproducts={shorts} name="Shorts"/>
        <Footer/>
      </main>
    </>
  );

}

export async function getStaticProps() {

  const shorts = await client.fetch(`*[_type == "shorts"] | order(_createdAt desc){
    title,slug,image,price
  } `)
  return {
    props: {
      shorts,
    },
  };
}

