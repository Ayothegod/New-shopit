import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Image from "next/image";

const slug = ({ sneaker }) => {

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  console.log(sneaker);

  return (
    <article>
      Hello
      <h1>{sneaker?.slug?.current}</h1>
      <h1>{sneaker?.title}</h1>
      {sneaker?.image && <img src={urlFor(sneaker?.image).url()} alt="hello" />}
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const sneaker = await client.fetch(
    `
    *[_type == "sneakers" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      sneaker,
    },
  };
}

export default slug;