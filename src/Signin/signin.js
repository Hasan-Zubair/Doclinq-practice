import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Alert } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import LoginDoctorImage from "../assets/images/image 3.png";
import "../assets/CSS/sign.css";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let newErrors = { email: "", password: "" };
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      if (storedEmail === formData.email && storedPassword === formData.password){
        alert("Login Successful")
      }else{
        localStorage.setItem("email", formData.email)
        localStorage.setItem("password", formData.password)
        alert("Form submitted and credentials stored")
      }

      setFormData({email: "", password: ""})
    }

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="glassdiv">
          <h1 className="heading">
            Empowering Practices
            <br /> with <span className="boldHeading">AI Solutions</span>{" "}
          </h1>
          <div className="image">
            <img src={LoginDoctorImage} alt="Doctor" className="image" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <h2 className="loginHeading">Login to DOCLINQ</h2>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <TextField
            label="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={
              errors.email && (
                <Alert
                  severity="error"
                  icon={<ErrorOutline fontSize="small" />}
                >
                  {" "}
                  {errors.email}{" "}
                </Alert>
              )
            }
            fullWidth
          />
          <TextField
            label="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={
              errors.password && (
                <Alert
                  severity="error"
                  icon={<ErrorOutline fontSize="small" />}
                >
                  {" "}
                  {errors.password}{" "}
                </Alert>
              )
            }
            autoComplete="off"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#1dbeb9" }}
            fullWidth
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Signin;
