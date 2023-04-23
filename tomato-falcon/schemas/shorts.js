export default{
    name: "shorts",
  title: "shorts",
  type: "document",
  fields:[
    {
    name:"title",
    type:"string",
    title:"Title-nation",
  },
    {
    name:"description",
    type:"string",
    title:"Description"
  },
  {
    type:"image",
    name:"image",
    title:"image",
    description:"add image, compulsory",
    fields:[
      {
        name:"caption",
        type:"string",
        title:"caption",
      }
    ]
  }
]
}
