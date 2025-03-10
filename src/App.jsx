import Home from "./pages/home/home";
import "./globalize.scss";
import "./index.scss";
import Cadastro from "./pages/cadastro/cadastro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BotaoAudio from "./components/audioPlayer/botaoAudio";

function App() {
  return (
    <>
      <Router>
        <BotaoAudio /> {/* Componente que controla o áudio */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Cadastro />} />
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
