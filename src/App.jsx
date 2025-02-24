// src/App.jsx
import Home from "./pages/home/home";
import "./globalize.css";
import "./index.scss";
import Cadastro from "./pages/cadastro/cadastro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AudioPlayer from "./components/audioPlayer/audioPlayer"; // Importe o componente de áudio

function App() {
  return (
    <>
      <Router>
        <AudioPlayer /> {/* Componente que controla o áudio */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
