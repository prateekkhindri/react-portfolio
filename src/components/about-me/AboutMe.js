import React from "react";
import { Col, Row } from "react-bootstrap";
import second from "../../assets/b.jpg";
import { MainLayout } from "../../layout/MainLayout";

export const AboutMe = () => {
  return (
    <MainLayout>
      <div>
        <section id="about" className="container">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            About Me
          </div>
          <Row className="mt-5">
            <Col md={4} className="text-center mb-3">
              <img src={second} alt="" className="" width="70%" />
            </Col>
            <Col md={8}>
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
            </Col>
          </Row>
        </section>
      </div>
    </MainLayout>
  );
};
