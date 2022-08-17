import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ViewStudent = () => {

  const params = useParams()
  const [student, setStudent] = useState([])
  const { name } = params

  useEffect(() => {
    fetchStudent()
  }, [])

  const fetchStudent = async () => {
    const request = await fetch(`http://localhost:5000/students/${name}`)
    const response = await request.json()
    setStudent(response)
  }


  return(
    <>
      <h1>Name : <span className="font-medium capitalize">{student.name}</span></h1>
      <h4>Age : {student.age}</h4>
      <Link to={'/students'}><button className="border-2 px-2 py-1 rounded-md hover:bg-gray-500/50 font-medium mt-5">Go Home</button></Link>
    </>
  )
}

export default ViewStudent