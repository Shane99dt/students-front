import { Link } from "react-router-dom"
import { useEffect,  useState } from "react"
import ViewStudent from "./ViewStudent"
import AddStudentForm from "./AddStudentForm"


const Home = () => {

  const [students, setStudents] = useState([])
  const [studentName, setStudentname] = useState("")
  const [studentAge, setStudentAge] = useState()

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

    if(studentName && studentAge){

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

      resetForm()
    }else{
      alert('Please fill all fields')
    }


  }

  const getName = e => {
    setStudentname(e.target.value)
  }

  const getAge = e => {
    setStudentAge(e.target.value)
  }

  const resetForm = () => {
    setStudentname("")
    setStudentAge(0)
  }



  return(
    <>
      <section>
        <article className="flex justify-center my-4 ">
          {/* <form onSubmit={postStudent} className="">
            <input placeholder="Name" type='text' onChange={getName} value={studentName} />
            <input placeholder="age" type="number" onChange={getAge} value={studentAge}/>
            <button type="submit">Submit</button>
          </form> */}
          {/* <AddStudentForm
            onSubmit={postStudent}
            onChangeName={getName}
            onChangeAge={getAge}
            studentAge= {studentAge}
            studentName = {studentName}
          /> */}
          <Link to={'/form'}>Add a Student</Link>
        </article>
        <article className="flex flex-col mt-10">
          {students &&
            (students.map(student => {
              return (
                <>
                  <Link to={`/students/${student.id}`} key={student.id} className="border-2 w-auto" >{student.name}</Link>
                </>
              )
            }))

          }
        </article>
      </section>
    </>
  )
}

export default Home