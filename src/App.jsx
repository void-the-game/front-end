import Home from "./pages/home/home"
import "./globalize.css"
import "./index.scss"
import Cadastro from "./pages/cadastro/cadastro"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  </Router>    
  )
}

export default App
