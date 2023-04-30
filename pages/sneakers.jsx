import Head from "next/head";
// import { useSession, signOut, getSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaProducts from "@/components/SchemaProducts";
import Body from "@/components/Body";
import { client } from "@/utils/client";


export default function Sneakers({sneakers}) {

console.log({sneakers});
  return (
    <>
    <Head>
        <title>Shop It | sneakers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
            <SchemaProducts sneakers={sneakers}/>
        <Footer/>
      </main>
    </>
  );

}

export async function getStaticProps() {

  const sneakers = await client.fetch(`*[_type == "sneakers"] | order(_createdAt desc){
    _id,title,image,slug,price,_createdAt,offPrice
  } `)
  return {
    props: {
      sneakers,
    },
  };
}
