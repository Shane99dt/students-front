import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


const AddStudentForm = (props) => {

  const [studentName, setStudentname] = useState("")
  const [studentAge, setStudentAge] = useState(0)
  const navigate = useNavigate()

  const postStudent = async (e) => {
    e.preventDefault()

    if(studentName && studentAge>0){

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

      if(request.status === 201){
        navigate(`/students/success/${student.name}`)
      }else{
        alert(`${request.status} ${request.statusText}`)
      }

    }else{
      alert('Please fill all fields & age must be higher than 0')
    }
  }

  const getName = e => {
    setStudentname(e.target.value)
  }

  const getAge = e => {
    setStudentAge(e.target.value)
  }


  return(
    <>
      <form onSubmit={postStudent} className="flex flex-col gap-2">
        <input placeholder="Name" type='text' onChange={getName} value={studentName} className="py-1 px-2 rounded-md"/>
        <input placeholder="age" type="number" onChange={getAge} value={studentAge} className="py-1 px-2 rounded-md"/>
        <button type="submit" className="border-2 px-2 py-1 rounded-md hover:bg-gray-500/50 font-medium mt-5">Submit</button>
      </form>
      <Link to={'/'}><button className="border-2 px-2 py-1 rounded-md hover:bg-gray-500/50 font-medium mt-5">Go Home</button></Link>
    </>
  )
}

export default AddStudentForm