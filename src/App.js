// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNav } from "./components/top-nav/TopNav";
import { Projects } from "./components/projects/Projects";
import { AboutMe } from "./components/about-me/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Skills } from "./components/skills/Skills";
import { Hero } from "./components/hero/Hero";
import { HomePage } from "./layout/HomePage";

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>404 Page not found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
