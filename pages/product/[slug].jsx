import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/client";
import Image from "next/image";

const slug = ({ short }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  console.log({"short" :short});

  return (
    <article>
      <h1>{short?.slug?.current}</h1>
      <h1>{short?.title}</h1>
      {short?.image && <img src={urlFor(short?.image).url()} alt="hello" />}
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
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const short = await client.fetch(
    `
    *[_type == "shorts" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      short,
    },
  };
}

export default slug;

