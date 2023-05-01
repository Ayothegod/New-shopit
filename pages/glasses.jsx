import Head from "next/head";
// import { useSession, signOut, getSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaProducts from "@/components/SchemaProducts";
import Body from "@/components/Body";
import { client } from "@/utils/client";


export default function Sneakers({glasses}) {

console.log({glasses});
  return (
    <>
    <Head>
        <title>Shop It | shorts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
        omo x2
            {/* <SchemaProducts pageproducts={glasses} name="Shorts"/> */}
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
