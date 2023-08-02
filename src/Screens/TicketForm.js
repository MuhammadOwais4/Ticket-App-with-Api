import { Box, Button, TextField, Typography,Select,InputLabel,MenuItem,FormControl,} from "@mui/material";
import axios from "axios";
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as React from 'react';

function TicketForm() {
    const [age, setAge] = React.useState('');
    const [course, setCourse] = React.useState('');
    console.log(age,"my data");
    console.log(course,"my data");
    // console.log(Ticketstatus,"my data");
    // console.log(Description,"my data");

    const handleChange = (event) => {
      setAge(event.target.value);
     

    };
    const handleCourse =(event)=>{
      setCourse(event.target.value)
    }
  
    const Backend = "http://localhost:5000/api/ticket";
    //GET DATA
    const GetData = () => {
        axios.get(Backend)
            .then((res) => console.log(res.data) )
            
            .catch((err) => console.log(err))
    }
    useEffect(()=>{
      GetData();
    },[])
    let navigate = useNavigate()
    // Post Data

    const [Tickettitle, setTickettitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Tickettype, setTickettype] = useState("")
    const [Ticketstatus, setTicketstatus] = useState("")
    // const TicketData = {
    //     Tickettitle,
    //     Description,
    //     Tickettype,
    //     Ticketstatus,
    // }
    const Submit = () => {
      axios.post(`http://localhost:5000/api/ticket${age}`)
      .then((res) => {console.log(res.data)
        navigate('/TicketData')
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
        <div className='Ticket info'>
                <Box marginLeft={50} borderRadius={20} marginTop={5} padding={20} boxShadow={17}  width={400} height={350}>
      <Typography fontStyle="inherit" marginTop={-16} variant='h2' textAlign="center" fontFamily="monospace">Ticket info</Typography> <br />
  <TextField label=" Tickettitle" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setTickettitle(e.target.value)} />
                <TextField label=" Description" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setDescription(e.target.value)} />
                 <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{marginBottom:"1.2em", width:"35em",marginLeft:"-5em"}} onChange={(e) => setTickettype<(e.target.value)}>Tickettype</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Ages"
          onChange={handleCourse}
          sx={{marginBottom:"1.2em", width:"35em",marginLeft:"-5em"}}
        >
          <MenuItem value={"Developer"}>Development</MenuItem>
          <MenuItem value={"seo"}>Seo</MenuItem>
          <MenuItem value={"marketing"}>Marketing</MenuItem>
          <MenuItem value={"Operations"}>Operations</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{marginBottom:"1.2em", width:"35em",marginLeft:"-5em"}}onChange={(e) => setTicketstatus(e.target.value)} >Ticket status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{marginBottom:"1.2em", width:"35em",marginLeft:"-5em"}}
        >
          <MenuItem value={"New"}>New</MenuItem>
          <MenuItem value={"Assigned"}>Assigned</MenuItem>
          <MenuItem value={"Working"}>Working</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
          <MenuItem value={"Verified"}>Verified</MenuItem>
          <MenuItem value={"Deployed"}>Deployed</MenuItem>
        </Select>
      </FormControl>
                <Button variant="contained" color="primary" sx={{fontWeight:"bold",fontSize:"1.2em",marginLeft:"-1em",borderRadius:"10px", width:"22em" }} onClick={() => Submit()}>Submit</Button>
                </Box>
                </div>   
        </>
    )
}
export default TicketForm