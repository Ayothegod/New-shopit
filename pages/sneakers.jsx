import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaProducts from "@/components/SchemaProducts";
import Body from "@/components/Body";
import { client } from "@/utils/client";


export default function Sneakers({sneakers}) {

  return (
    <>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
            <SchemaProducts pageproducts={sneakers} name="Sneakers"/>
        <Footer/>
      </main>
    </>
  );

}

export async function getStaticProps() {

  const sneakers = await client.fetch(`*[_type == "sneakers"] | order(_createdAt desc){
    title,slug,image,price
  } `)
  return {
    props: {
      sneakers,
    },
  };
}
