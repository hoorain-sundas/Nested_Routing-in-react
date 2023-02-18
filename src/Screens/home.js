import React from "react";
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    const location = useLocation();
    console.log(location);
    return (
    <>
    <h1 className="text-center m-5">Welcome to the world of ReactJS </h1>  
    <div className="text-center m-5 border fs-2">
        <p className="shadow rounded">{location.state.fname}</p>
        <p className="shadow rounded">{location.state.lname}</p>
        <p className="shadow rounded">{location.state.email}</p>
        <p className="shadow rounded">{location.state.password}</p>

    </div>
    
    </>
    )
}  
   
export default Home;  
