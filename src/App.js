import { useEffect,  useState } from "react"
import { Link } from "react-router-dom"

const App = () => {

  const [students, setStudents] = useState([])
  const [studentName, setStudentname] = useState("")
  const [studentAge, setStudentAge] = useState(null)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    const request = await fetch('http://localhost:5000/students')
    const response = await request.json()
    setStudents(response)
  }

  const postStudent = async (e) => {
    e.preventDefault()

    const student = {
      name: studentName,
      age: studentAge
    }

    const request = await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(student)
    })

    const response = await request.json()
  }

  const getName = e => {
    setStudentname(e.target.value)
  }

  const getAge = e => {
    setStudentAge(e.target.value)
  }



  return(
  <>
    <section className="">
      <ul>
        {students.map(student => {
          return <Link>{student.name}</Link>
        })}
      </ul>
      <form onSubmit={postStudent}>
        <input type='text' onChange={getName}/>
        <input placeholder="age" type="text" onChange={getAge} />
        <button type="submit">Submit</button>
      </form>
    </section>
  </>
  )
}

export default App