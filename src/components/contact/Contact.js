import React from "react";

export const Contact = () => {
  return (
    <div>
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
    </div>
  );
};
