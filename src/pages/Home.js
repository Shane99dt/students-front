import { Link } from "react-router-dom"


const Home = () => {
  return(
    <>
      <h1 className="text-4xl">Home</h1>
      <Link to={'/students'}><button className="border-2 px-2 py-1 rounded-md mt-10 hover:bg-gray-500/50 font-medium">View students</button></Link>
    </>
  )
}

export default Home