import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import About from "./pages/About"
import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
