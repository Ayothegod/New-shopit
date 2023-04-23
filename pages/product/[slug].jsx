import { Router, useRouter } from "next/router"



const slug = () => {
  const router = useRouter()
  // const {id} = router.query
  const id = router.query.slug
  console.log(id);

  return (
    <div>
      {id}
      Hello
    </div>
  )
}

export default slug