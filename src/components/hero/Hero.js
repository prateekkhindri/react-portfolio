import React from "react";
import second from "../../assets/b.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row mt-5 py-3">
            {/* <!-- Below md takes 12 grid --> */}
            {/* <!-- So, we add "md-6" to both the div classNamees below  --> */}
            <div className="col-md-6 text-end d-flex justify-content-center order-md-2 text-center">
              {/* <!-- width= 80% and className= "ml-auto" helps keep the image in the center if the image is too large or small --> */}
              <img src={second} alt="myphoto" className="ml-auto img-fluid" />
            </div>

            <div className="col-md-6 pt-5">
              <h4>Hi 👋, I am Prateek Khindri</h4>
              <h1>Full stack developer</h1>
              <p className="mt-5 text-danger custom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                illum aspernatur eaque dolor autem impedit facere laborum, sed
                ab at iste obcaecati dolores, quis quaerat et velit itaque
                facilis. Necessitatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
