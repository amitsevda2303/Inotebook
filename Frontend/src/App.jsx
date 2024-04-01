import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NoteState from "./Context/Notes/NotesState";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Footer from "./Component/Footer";
import { DashBoard } from "./Component/DashBoard";
import ParticlesBackground from "./Component/ParticlesBackground";
import { Toaster } from "react-hot-toast";
import "./App.css";
function App() {
  const location = useLocation();
  return (
    <>
      {!(location.pathname === "/Login" || location.pathname === "/SignUp") && (
        <ParticlesBackground />
      )}
      <NoteState>
        <Navbar />
        <Toaster
          position="top-right"
          background="#060417"
          reverseOrder={false}
        />

        <div className="container">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </NoteState>
    </>
  );
}

export default App;
