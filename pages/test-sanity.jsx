import { createClient } from "next-sanity";

export default function TestSanity({ watches }) {
  console.log(watches);
  return (
    <>
      <main>
        <h2>pets</h2>
        {/* {watches.length > 0 && 

          <ul>
            {watches.map((watch) => (
              <li key={watch._id}>{watch?.name}</li>
            ))}
          </ul>

        } */}

        {
          watches.map(watch => (
            <>
            <p>{watch.title}</p>
            <p>{watch.description}</p>
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

// const client = createClient();
const client = createClient({
  projectId: "s2h76ee6",
    dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export async function getStaticProps() {
  

  const watches = await client.fetch(`*[_type == "watches"]`);
  
  return {
      props: {
      watches
    }
};
}
//   const pets = [
//      {
//       _createdAt: "2022-03-08T09:28:00Z",
//       _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
//       _rev: "xnBg0xhUDzo561jnWODd5e",
//       _type: "pet",
//       _updatedAt: "2022-03-08T09:28:00Z",
//       name: "Capybara"
//     } 
//   ];
