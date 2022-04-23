import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" width="100px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/about-me" className="nav-link">
              About Me
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            {/* Delete the NavDropdown */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-md navbar-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="/">
    //       {/* <!-- Inserting our logo --> */}
    //       <img src={second} alt="logo" width="100px" />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       {/* <!-- ms-auto aligns the the content to the right of the page --> */}
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#projects">
    //             Projects
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#about">
    //             About me
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    //   {/* <!-- Hero Background --> */}
  );
};
