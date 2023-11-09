import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/Signin"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Header from "./components/Header"

function App() {
 
  return (
    <>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
     </Routes>
    </>
  )
}

export default App
