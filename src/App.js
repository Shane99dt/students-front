import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddStudentForm from "./pages/AddStudentForm"
import Students from "./pages/Students"
import Home from "./pages/Home"
import Success from "./pages/Success"
import ViewStudent from "./pages/ViewStudent"

const App = () => {
  return(
  <>
    <BrowserRouter>
      <div className="p-10">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/form" element={<AddStudentForm/>}/>
          <Route path="/students/:name" element={<ViewStudent/>}/>
          <Route path="/students/success/:name" element={<Success/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </>
  )
}

export default App