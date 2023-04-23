import { Router, useRouter } from "next/router"
// import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import {client} from "@/utils/client"


// const router = useRouter()
// // const {id} = router.query
// const id = router.query.slug
// console.log(id);


// function urlFor (source) {
//   return imageUrlBuilder(client).image(source)
// }

const slug = ({short}) => {
  console.log(short);
  
  return (
    <article>
      <h1>{short?.slug?.current}</h1>
      {/* <Image src={} alt="hello"/> */}
    </article>
  )
}


export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const short = await client.fetch(`
    *[_type == "shorts" && slug.current == $slug][0]
  `, { slug })
  
  return {
    props: {
      short
    }
  }
}

export default slug