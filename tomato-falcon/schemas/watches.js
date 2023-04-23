

export default {
  name: "watches",
  type: "document",
  title: "watches",
  fields: [
    {
      name:"title",
      type:"string",
      title:"title"
    },
    {
      name:"description",
      type:"text",
      title:"description"
    },
    {
    name:"slug",
    type:"slug",
    title:"slug"
  },
  ],
};
