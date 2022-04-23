import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import second from "../../assets/logo.png";

export const TopNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={second} alt="logo" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* Delete the NavDropdown */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-md navbar-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
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
