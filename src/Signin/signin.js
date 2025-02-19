import React, { useState } from "react";
import LoginDoctorImage from "../assets/images/image 3.png";
import "../assets/CSS/sign.css";
import { Button, IconButton, InputAdornment, TextField, Alert } from "@mui/material";
import { Visibility, VisibilityOff, ErrorOutline } from "@mui/icons-material";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [formError, setFormError] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    const usernameRegex = /^[a-zA-Z0-9]{3,}$/; // At least 3 characters, alphanumeric
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number

    if (!usernameRegex.test(username)) {
      errors.username = "Username must be at least 3 characters long and contain only letters and numbers.";
      valid = false;
    }

    if (!passwordRegex.test(password)) {
      errors.password = "Password must be at least 8 characters long and contain at least one letter and one number.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFormError("");
      alert('Login Successful');
    } else {
      setFormError("Please fill in all required fields correctly.");
    }
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
        <form className="credentials" onSubmit={handleSubmit}>
          {formError && (
            <Alert severity="error" icon={<ErrorOutline />}>
              {formError}
            </Alert>
          )}
          <label htmlFor="username" className="userName">
            Enter your username <span style={{ color: "red" }}>*</span>
          </label>
          <TextField
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
            sx={{
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                "& fieldset": {
                  borderColor: "#CCCCCC",
                },
                "&:hover fieldset": {
                  borderColor: "#CCCCCC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#CCCCCC",
                },
              },
            }}
          />

          <label htmlFor="password" className="userName">
            Enter your password <span style={{ color: "red" }}>*</span>
          </label>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            required
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            sx={{
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                "& fieldset": {
                  borderColor: "#CCCCCC",
                },
                "&:hover fieldset": {
                  borderColor: "#CCCCCC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#CCCCCC",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#1DBEB9", borderRadius: "16px" }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;