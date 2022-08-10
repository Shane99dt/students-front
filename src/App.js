import { useEffect,  useState } from "react"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import AddStudentForm from "./pages/AddStudentForm"
import Home from "./pages/Home"
import Success from "./pages/Success"
import ViewStudent from "./pages/ViewStudent"

const App = () => {

  // const [students, setStudents] = useState([])
  // const [studentName, setStudentname] = useState("")
  // const [studentAge, setStudentAge] = useState(null)

  // useEffect(() => {
  //   fetchStudents()
  // }, [])

  // const fetchStudents = async () => {
  //   const request = await fetch('http://localhost:5000/students')
  //   const response = await request.json()
  //   setStudents(response)
  // }

  // const postStudent = async (e) => {
  //   e.preventDefault()

  //   const student = {
  //     name: studentName,
  //     age: studentAge
  //   }

  //   const request = await fetch('http://localhost:5000/students', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(student)
  //   })

  //   const response = await request.json()
  // }

  // const getName = e => {
  //   setStudentname(e.target.value)
  // }

  // const getAge = e => {
  //   setStudentAge(e.target.value)
  // }



  return(
  <>
    {/* <section className="">
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
    </section> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<AddStudentForm/>}/>
        <Route path="/students/:id" element={<ViewStudent/>}/>
        <Route path="/students/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App