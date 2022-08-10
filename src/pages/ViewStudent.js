import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ViewStudent = () => {

  const params = useParams()
  const [student, setStudent] = useState([])
  const {id} = params

  useEffect(() => {
    fetchStudent()
  }, [])

  const fetchStudent = async () => {
    const request = await fetch(`http://localhost:5000/students/${id}`)
    const response = await request.json()
    setStudent(response)
  }


  return(
    <>
      <h1>{student.name}</h1>
      <h4>{student.age}</h4>
      <Link to={'/students'} >Go Home</Link>
    </>
  )
}

export default ViewStudent