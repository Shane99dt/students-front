import { Link } from "react-router-dom"


const Success = () => {
  return(
    <>
      <p>Success Add</p>
      <Link to={'/students'}>Go to Home</Link>
    </>
  )
}

export default Success