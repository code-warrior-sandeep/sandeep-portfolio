import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<>
                  <Hero /> 
                  <About/>
                  <Project/>
                  <Contact/>
                </>} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
        
      </Router>
    </>
  );
}

export default App;
