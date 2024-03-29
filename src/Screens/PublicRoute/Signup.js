import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const Backend = "http://localhost:5000/api/user/signup";
  let navigate = useNavigate()
  const [userName, setuserName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const SignupData = {
    userName,
    Email,
    password
  }
  const Submit = () => {
      axios.post(Backend,SignupData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === false) {
            setError(res.data.message);
          } else {
            navigate('/Login');
          }
        })
        .catch((err) => {
          console.log(err);
          setError("An error occurred. Please try again.");
        });
    };
    const PasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const InputChange = (e) => {
      if (Error) {
        setError("");
      }
      if (e.target.name === 'userName') {
        setuserName(e.target.value);
      } else if (e.target.name === 'Email') {
        setEmail(e.target.value);
      } else if (e.target.name === 'password') {
        setPassword(e.target.value);
      }
    }; 
  return (
    <div className='Signup'>
      <Box marginLeft={50} borderRadius={20} marginTop={7} padding={20} boxShadow={17} width={400} height={220}>
        <Typography fontStyle="inherit" marginTop={-13} variant='h2' textAlign="center" fontFamily="monospace">Signup</Typography> <br />
        <TextField label="User Name" marginTop={3} sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }}   name="userName"
          value={userName}
          onChange={InputChange} />
        <TextField label="Email" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }}  name="Email"
          value={Email}
          onChange={InputChange} />
        <TextField
          label="Password"
          sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }}
        name="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={InputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={PasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography marginTop={-3} marginLeft={-6} marginBottom={5} fontSize={18} fontFamily='inherit'>Already have an Account? <Link to='Login'>Login</Link></Typography>
        {Error && <Typography sx={{marginBottom:"10px",marginLeft:"-3em",marginTop:"-12px"}} fontSize={20} color="error">Error:  {Error}</Typography>} 
        <Button variant="contained" color="primary" sx={{ fontWeight: "bold", fontSize: "1.2em", marginLeft: "-1em", borderRadius: "10px", width: "22em" }} onClick={() => Submit()}>Submit</Button>
      </Box>
    </div>
  )
}

export default Signup