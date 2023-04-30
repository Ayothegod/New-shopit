import Head from "next/head";
import { useSession, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
import { createClient } from "next-sanity";
import { client } from "@/utils/client";
import imageUrlBuilder from "@sanity/image-url";
import { useStore } from "@/utils/store";

export default function Home({sneakers,firstProduct}) {

// console.log({firstProduct});
// console.log({sneakers});

  return (
    <>
    <Head>
        <title>Shop It</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#ddd6d6] min-h-screen ">
        <Header/>
        <Body sneakers={sneakers} firstProduct={firstProduct}/>
        <Footer/>
      </main>
    </>
  );

}

export async function getStaticProps() {

  const sneakers = await client.fetch(`*[_type == "sneakers"] | order(_createdAt desc){
    _id,title,image,slug,price,_createdAt,offPrice
  } `)
  const firstProduct = await client.fetch(`*[_type in ["shorts", "sneakers","glasses","watches"] && position == "first" ]{
    image,slug
  } `)

  return {
    props: {
      sneakers,firstProduct
    },
  };
}




// const { data: session } = useSession()
// const router = useRouter()
// console.log(session);
// const signout = () => {
//   signOut({callbackUrl:"http://localhost:3000/signin"})
// }

// {
//   /* Signed in as {session.user.name}
//   <br />
//   <Image src={session.user.image} className='w-20 h-20' width={20} height={20} alt='github image'/>
//   <button className="p-2 bg-red-600" onClick={signout}>Sign out</button> */
// }
