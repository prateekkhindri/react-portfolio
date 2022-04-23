import React from "react";
import second from "../../assets/p1.png";
import { Container, Row, Col } from "react-bootstrap";
import { MainLayout } from "../../layout/MainLayout";

export const Projects = () => {
  return (
    <MainLayout>
      <div>
        <section id="projects" className="projects py-5">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            Projects
          </div>
          <div className="pro-content">
            {/* <!-- Container here again will give space on the left and right of the page --> */}
            {/* <!-- mt-5 is the margin top which will push the content down --> */}
            <Container className="container mt-5">
              <Row className=" mt-5 py-5">
                {/* <!-- col-md divides the content equally from a 12 grid --> */}
                {/* <!-- As long as we do not provide a number the space is equally divided --> */}
                <Col md={6}>
                  <img
                    src={second}
                    alt="Portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </Col>
                <Col md={6} className="mt-5 mt-md-0">
                  <h2>My Portfolio website</h2>
                  <div className="links fs-3">
                    <a href="#" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>{" "}
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
                </Col>
              </Row>
              <Row className="mt-5 py-5">
                {/* <!-- col-md divides the content equally from a 12 grid --> */}
                {/* <!-- As long as we do not provide a number the space is equally divided --> */}
                {/* <!-- order-md-1 changes the order --> */}
                <Col md={6} className="order-md-1">
                  <img
                    src={second}
                    alt="Portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </Col>
                <Col md={6} className="mt-5 mt-md-0">
                  <h2>My Portfolio website</h2>
                  <div className="links fs-3">
                    <a href="#" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>{" "}
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
                </Col>
              </Row>
              <Row className="mt-5 py-5">
                {/* <!-- col-md divides the content equally from a 12 grid --> */}
                {/* <!-- As long as we do not provide a number the space is equally divided --> */}
                <Col md={6}>
                  <img
                    src={second}
                    alt="Portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </Col>
                <Col md={6} className="mt-5 mt-md-0">
                  <h2>My Portfolio website</h2>
                  <div className="links fs-3">
                    <a href="#" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>{" "}
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
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
