import Home from "./pages/home/home"
import "./globalize.css"
import "./index.scss"
import Cadastro from "./pages/cadastro/cadastro"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
