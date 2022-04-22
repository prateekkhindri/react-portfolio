// import logo from './logo.svg';
import "./App.css";

import Button from "react-bootstrap/Button";

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="">
      <div className="wrapper">
        {/* <!-- Navbar --> */}
        <div id="top-nav" className="top-nav">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                {/* <!-- Inserting our logo --> */}
                <img src="./assets/logo.png" alt="logo" width="100px" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {/* <!-- ms-auto aligns the the content to the right of the page --> */}
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- Hero Background --> */}
          <div className="hero">
            <div className="container">
              <div className="row mt-5 py-3">
                {/* <!-- Below md takes 12 grid --> */}
                {/* <!-- So, we add "md-6" to both the div classNamees below  --> */}
                <div className="col-md-6 text-end d-flex justify-content-center order-md-2 text-center">
                  {/* <!-- width= 80% and className= "ml-auto" helps keep the image in the center if the image is too large or small --> */}
                  <img
                    src="./assets/b.jpg"
                    alt="myphoto"
                    className="ml-auto img-fluid"
                  />
                </div>

                <div className="col-md-6 pt-5">
                  <h4>Hi 👋, I am Prateek Khindri</h4>
                  <h1>Full stack developer</h1>
                  <p className="mt-5 text-danger custom">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit illum aspernatur eaque dolor autem impedit facere
                    laborum, sed ab at iste obcaecati dolores, quis quaerat et
                    velit itaque facilis. Necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Skills section --> */}
        {/* <!-- Adding container to the className will push the content to the right --> */}
        <section className="container skills mt-5 py-5">
          {/* <!-- mt-5 and py-5 pushes the content down --> */}
          <div className="sec-title fs-1 fw-bolder text-center m-auto">
            Skills
          </div>
          {/* <!-- If we have more skills listed we can add "flex-wrap" to the className below which will wrap the content to the next line --> */}
          <div className="sec-content fs-1 mt-5 d-flex justify-content-between">
            <span className="d-flex flex-column align-items-center">
              <i className="fab fa-html5 text-danger"></i> HTML{" "}
            </span>
            <span className="d-flex flex-column align-items-center">
              <i className="fab fa-css3 text-primary"></i> CSS{" "}
            </span>
            <span className="d-flex flex-column align-items-center">
              <i className="fab fa-js text-warning"></i> JavaScript
            </span>
          </div>
        </section>

        {/* <!-- Project Section --> */}
        <section id="projects" className="projects py-5">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            Projects
          </div>
          <div className="pro-content">
            {/* <!-- Container here again will give space on the left and right of the page --> */}
            {/* <!-- mt-5 is the margin top which will push the content down --> */}
            <div className="container mt-5">
              <div className="row mt-5 py-5">
                {/* <!-- col-md divides the content equally from a 12 grid --> */}
                {/* <!-- As long as we do not provide a number the space is equally divided --> */}
                <div className="col-md-6">
                  <img
                    src="./assets/p1.png"
                    alt="Portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h2>My Portfolio website</h2>
                  <div className="links fs-3">
                    <a href="#" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-chrome"></i>
                    </a>
                  </div>
                  <div className="mt-3 fw-bold">Tech: HTML, CSS</div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque dolores doloribus molestiae, maiores sit vitae
                    dolorem, nostrum soluta eius rem minima error dolorum aut
                    quasi ad incidunt natus? Nisi, similique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Hic explicabo facere corporis porro aut, consequuntur
                    incidunt deserunt et dolores, maiores placeat sunt ea
                    aperiam molestiae tempora ut. Consequatur, quo quaerat!
                  </p>
                </div>
              </div>
              <div className="row mt-5 py-5">
                {/* <!-- col-md divides the content equally from a 12 grid --> */}
                {/* <!-- As long as we do not provide a number the space is equally divided --> */}
                {/* <!-- order-md-1 changes the order --> */}
                <div className="col-md-6 order-md-1">
                  <img
                    src="./assets/p1.png"
                    alt="Portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h2>My Portfolio website</h2>
                  <div className="links fs-3">
                    <a href="#" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-chrome"></i>
                    </a>
                  </div>
                  <div className="mt-3 fw-bold">Tech: HTML, CSS</div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque dolores doloribus molestiae, maiores sit vitae
                    dolorem, nostrum soluta eius rem minima error dolorum aut
                    quasi ad incidunt natus? Nisi, similique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Hic explicabo facere corporis porro aut, consequuntur
                    incidunt deserunt et dolores, maiores placeat sunt ea
                    aperiam molestiae tempora ut. Consequatur, quo quaerat!
                  </p>
                </div>
              </div>
              <div className="row mt-5 py-5">
                {/* <!-- col-md divides the content equally from a 12 grid --> */}
                {/* <!-- As long as we do not provide a number the space is equally divided --> */}
                <div className="col-md-6">
                  <img
                    src="./assets/p1.png"
                    alt="Portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h2>My Portfolio website</h2>
                  <div className="links fs-3">
                    <a href="#" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-chrome"></i>
                    </a>
                  </div>
                  <div className="mt-3 fw-bold">Tech: HTML, CSS</div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque dolores doloribus molestiae, maiores sit vitae
                    dolorem, nostrum soluta eius rem minima error dolorum aut
                    quasi ad incidunt natus? Nisi, similique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Hic explicabo facere corporis porro aut, consequuntur
                    incidunt deserunt et dolores, maiores placeat sunt ea
                    aperiam molestiae tempora ut. Consequatur, quo quaerat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About Me --> */}
        <section id="about" className="container">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            About Me
          </div>
          <div className="row mt-5">
            <div className="col-md-4 text-center mb-3">
              <img src="./assets/b.jpg" alt="" className="" width="70%" />
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                provident veritatis expedita soluta voluptates qui harum nobis
                neque sequi. Odio qui, saepe commodi quae deleniti magni
                perferendis ducimus accusamus officiis.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur dolores necessitatibus nobis incidunt quo ea explicabo
                aliquid ut reiciendis nam dolor exercitationem neque, quaerat
                cum quos non aliquam voluptas nemo!
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Contact Me --> */}
        <section id="contact" className="container mt-5">
          <div className="contact-icons rounded">
            <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
              Contact Me
            </div>
            <div className="icons mt-5">
              <a href="tel:0449931142">
                <i className="fas fa-mobile-alt"></i>
              </a>
              <a href="mailto:prateek.khindri90@gmail.com" target="_blank">
                <i className="fas fa-envelope-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/prateek-khindri-10/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/prateek.khindri.5/"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/khindri_prateek" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}

        <footer className="text-center py-5 mt-5 bg-dark text-light">
          &copy; Copy right, All rights reserved || Made with 💕 by Prateek
          Khindri
          <a href="#top-nav">
            <div className="up">
              <i className="fas fa-chevron-up"></i>
            </div>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
