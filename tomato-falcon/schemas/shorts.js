export default {
  name: "shorts",
  title: "shorts",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
      description: "title or name of the product",
    },
    {
      name: "description",
      type: "string",
      title: "description",
      description: "description of the products",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      description: "slug to get individual products",
    },
    {
      name: "categories",
      type: "array",
      title: "categories",
      of:[{type:"string"}],
      description: "can add any number of categories",
    },
    {
      name: "rating",
      type: "number",
      title: "rating",
      description: "numbers only, 1 - 5",
    },
    {
      type: "image",
      name: "image",
      title: "image",
      description: "add image, compulsory",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "caption",
        },
      ],
    },
  ],
};
