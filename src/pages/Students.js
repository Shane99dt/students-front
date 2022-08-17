import { Link } from "react-router-dom"
import { useEffect,  useState } from "react"

const Students = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    const request = await fetch('http://localhost:5000/students')
    const response = await request.json()
    setStudents(response)
  }


  return(
    <>
      <section>
        <article className="flex justify-center my-4 ">
          <Link to={'/form'}><button className="border-2 px-2 py-1 rounded-md hover:bg-gray-500/50 font-medium">Add a Student</button></Link>
        </article>
        <article className="flex flex-col mt-10 m-4">
          {students &&
            (students.map(student => {
              return (
                <Link to={`/students/${student.name}`} key={student.name}><p className="border-2 border-gray-500 rounded-md my-1 p-1 capitalize hover:bg-gray-400/40">{student.name}</p></Link>
              )
            }))
          }
        </article>
      </section>
    </>
  )
}

export default Students