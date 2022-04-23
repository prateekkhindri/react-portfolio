import React from "react";
import second from "../../assets/logo.png";

export const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <!-- Inserting our logo --> */}
          <img src={second} alt="logo" width="100px" />
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
    //   {/* <!-- Hero Background --> */}
  );
};
