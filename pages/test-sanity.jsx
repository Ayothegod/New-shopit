import { createClient } from "next-sanity";
import Link from "next/link";

export default function TestSanity({ sneakers }) {
  console.log( sneakers)


  return (
    <>
      <h2>Products</h2>
      <main className="flex  justify-between p-8">
        <div className="cursor-pointer flex flex-col gap-10">
          {sneakers.map((watch) => (
            <>
              <Link href={`/products/sneakers/${watch.slug.current}`}>
                <p>{watch.title}</p>
                <p>{watch.description}</p>
                <p>{watch.slug.current}</p>
              </Link>
            </>
          ))}
        </div>

      </main>
    </>
  );
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_APIVERSION,
  useCdn: process.env.SANITY_USECDN,
});
export async function getStaticProps() {
  const sneakers = await client.fetch(`*[_type == "sneakers"]`);
  // const shorts = await client.fetch(`*[_type == "shorts"]`);

  return {
    props: {
      sneakers
    },
  };
}
