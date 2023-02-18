import React from "react";
import { TextField, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';


function Login(){
 const navigation = useNavigate();
    return   (
    <div className="text-center shadow rounded container pt-3 pb-3">
        <h1>Login</h1>
        <form action="">
       <div className="p-2 mt-2 mb-2 fs-4">
        <input type="email" placeholder="Email" name="email" id="email" multiple />
       </div>
       <div className="p-2 mt-2 mb-2 fs-4">
        <input type="password" placeholder="Password" name="password" id="password" />
       </div>
       <button className="p-2 ps-4 pe-4 fs-5 mt-2 mb-2 bg-info border-0 rounded-pill text-center" type="submit">Login</button>
       </form>
    
     <button className="bg-success fs-5 p-2 mt-4 mb-4 border-0 rounded-pill" variant="contained" onClick={()=>{navigation("/signup")}}>Create New Account</button>
    </div>
    )
}  
   
export default Login;  