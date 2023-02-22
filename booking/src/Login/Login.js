import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName,setName]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();

    const TextInput=(event)=>{
        if(event.target.name==='userName'){
              setName(event.target.value)       
        }
        else{
            setpassword(event.target.value);
        }
    }
    const loginClick=()=>{

        if(userName=="" && password==""){
            alert("Username and password cannot be empty ")
          }
          else if(userName==""){
                alert("Username cannot be empty")
          }
          else if(password==""){
               alert("Password cannot be empty")
          }
          else if(userName!="" && password!=""){
                navigate('/Home')
          }
    }

  return (
    <div className='login'>
        <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            >
        </Box>
      <div>
        <Box>
            <TextField
            required
            id="outlined-required"
            label="Username"
            name='userName'
            defaultValue=""
            onChange={TextInput}
            />
       </Box><br></br>
       <Box>
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          autoComplete="current-password"
          onChange={TextInput}
        />
        </Box><br></br>
        <Box>
       <Button variant="contained" onClick={()=>loginClick()}>LOGIN</Button>
       </Box>
      </div>
     
      
    
    

    </div>
  )
}

export default Login