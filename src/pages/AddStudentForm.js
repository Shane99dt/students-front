import { Link } from "react-router-dom"
import { useEffect,  useState } from "react"


const AddStudentForm = (props) => {

  const [studentName, setStudentname] = useState("")
  const [studentAge, setStudentAge] = useState()

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



  // const {onSubmit, onChangeName, onChangeAge, studentAge, studentName} = props
  return(
    <>
      <form onSubmit={postStudent} className="">
        <input placeholder="Name" type='text' onChange={getName} value={studentName} />
        <input placeholder="age" type="number" onChange={getAge} value={studentAge}/>
        <button type="submit">Submit</button>
      </form>
      <Link to={'/'}>Go to Home</Link>
    </>
  )
}

export default AddStudentForm