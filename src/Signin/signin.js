import React from "react";
import LoginDoctorImage from "../assets/images/image 3.png";
import "../assets/CSS/sign.css";

const Signin = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div>
          <h1 className="heading">
            Empowering Practices with{" "}
            <span className="boldHeading">AI Solutions</span>{" "}
          </h1>
          <div className="image">
            <img src={LoginDoctorImage} alt="Doctor" className="image" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <h2 className="loginHeading">Login to DOCLINQ</h2>
        <form className="credentials">
          <label htmlFor="username" className="userName">
            Enter your username <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="username" className="userName">
            Enter your username <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="username" name="username" required />
        </form>
      </div>
    </div>
  );
};

export default Signin;
