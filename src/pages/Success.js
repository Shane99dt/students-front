import { Link, useParams } from "react-router-dom"


const Success = () => {
  const params = useParams()
  const { name } = params


  return(
    <>
      <h2><span className="font-medium">{name}</span> has been added successfully</h2>
      <Link to={'/students'}>All students</Link>
    </>
  )
}

export default Success