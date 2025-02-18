import React, { useState } from "react";
import LoginDoctorImage from "../assets/images/image 3.png";
import "../assets/CSS/sign.css";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>{
    setShowPassword
  }

  return (
    <div className="container">
      <div className="left-section">
        <div className="glassdiv">
          <h1 className="heading">
            Empowering Practices
            <br /> with{" "}
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
          <TextField 
            fullWidth 
            required 
            margin="normal" 
            variant="outlined" 
            sx={{ 
              backgroundColor: 'white', 
              '& .MuiOutlinedInput-root': {
                borderRadius: '16px',
                '& fieldset': {
                  borderColor: '#CCCCCC',
                },
                '&:hover fieldset': {
                  borderColor: '#CCCCCC',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#CCCCCC',
                },
              },
            }}
          />

          <label htmlFor="password" className="userName">
            Enter your password <span style={{ color: "red" }}>*</span>
          </label>
          <TextField 
            fullWidth 
            type="password" 
            required 
            margin="normal" 
            variant="outlined" 
            sx={{ 
              backgroundColor: 'white', 
              '& .MuiOutlinedInput-root': {
                borderRadius: '16px',
                '& fieldset': {
                  borderColor: '#CCCCCC',
                },
                '&:hover fieldset': {
                  borderColor: '#CCCCCC',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#CCCCCC',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                  aria-label="toggel password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge = 'end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" size="large" sx={{backgroundColor: '#1DBEB9', borderRadius: '16px'}}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;