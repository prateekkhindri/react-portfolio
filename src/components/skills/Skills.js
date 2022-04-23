import React from "react";

export const Skills = () => {
  return (
    <div>
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
    </div>
  );
};
