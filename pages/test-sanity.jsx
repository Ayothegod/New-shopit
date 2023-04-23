import { createClient } from "next-sanity";

export default function TestSanity({ watches }) {
  console.log(watches);
  return (
    <>
      <main>
        <h2>pets</h2>

        {
          watches.map(watch => (
            <>
            <p>{watch.title}</p>
            <p>{watch.description}</p>
            <p>{watch.slug.current}</p>
            </>
          ))
        }

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
  useCdn: process.env.SANITY_USECDN
});
export async function getStaticProps() {
  
  const watches = await client.fetch(`*[_type == "watches"]`);
  const shirts = await client.fetch(`*[_type == "watches"]`);
  
  return {
      props: {
      watches
    }
};
}
