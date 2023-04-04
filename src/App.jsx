import React from "react";
import { Route, BrowserRouter as Router,  Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDisplay from './pages/ProjectDisplay';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from './pages/Profile';
import Experience from "./pages/Experiences";
const App = () => { 
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
