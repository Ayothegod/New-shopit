import { createClient } from "next-sanity";
import Link from "next/link";

export default function TestSanity({ watches, shorts }) {
  console.log(watches);
  console.log({ shorts: shorts });
  return (
    <>
      <h2>Products</h2>
      <main className="flex  justify-between p-8">
        <div className="cursor-pointer">

          {shorts.map((watch) => (
            <>
          <Link href={`/product/${watch.slug.current}`}>
              <p>{watch.title}</p>
              <p>{watch.description}</p>
              <p>{watch.slug.current}</p>
          </Link>
            </>
          ))}
        </div>
        <div className="">
          {shorts.map((watch) => (
            <>
              <p>{watch.title}</p>
              <p>{watch.description}</p>
              <p>{watch.categories}</p>
              <p>{watch.slug.current}</p>
            </>
          ))}
        </div>

        {/* {!watches.length > 0 && <p>No pets to show</p>} */}

        {/* {!watches.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )} */}
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
  const watches = await client.fetch(`*[_type == "watches"]`);
  const shorts = await client.fetch(`*[_type == "shorts"]`);

  return {
    props: {
      watches,
      shorts,
    },
  };
}
