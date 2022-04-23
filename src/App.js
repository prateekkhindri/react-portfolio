// import logo from './logo.svg';
import "./App.css";

// import Button from "react-bootstrap/Button";
import { TopNav } from "./components/top-nav/TopNav";
import { Projects } from "./components/projects/Projects";
import { AboutMe } from "./components/about-me/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Skills } from "./components/skills/Skills";
import { Hero } from "./components/hero/Hero";

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="wrapper">
      <div id="top-nav" className="top-nav">
        {/* <!-- Navbar --> */}
        <TopNav />

        <Hero />
      </div>
      {/* <!-- Skills section --> */}
      {/* <!-- Adding container to the className will push the content to the right --> */}

      <Skills />

      {/* <!-- Project Section --> */}
      <Projects />

      {/* <!-- About Me --> */}

      <AboutMe />

      {/* <!-- Contact Me --> */}
      <Contact />

      {/* <!-- Footer --> */}

      <Footer />
    </div>
  );
}

export default App;
