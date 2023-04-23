import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "s2h76ee6",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});


// const client = sanityClient({
//   projectId: 'your project-id',
//   dataset: 'your dataset',
//   token: 'Sanity build token',
//   apiVersion: 'v1',
//   useCdn: false // `false` if you want to ensure fresh data
// })


// import { createClient } from '@sanity/client'

// export default createClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,
//   apiVersion: process.env.SANITY_APIVERSION,
//   useCdn: process.env.SANITY_USECDN,
// })