import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [userData, setUserData] = useState(
        {
            fname: "", lname: "", email: "", password:"",
        }
        
    );
    let name, value;
    const handleInputs = (e) => {
        name= e.target.name;
        value= e.target.value;
        setUserData({...userData , [name]: value});
        // setUserData(e.target.value)
        console.log(userData)
    }
    const navigate = useNavigate();
    const moveToHome = (data) => {
        console.log(data)
        navigate("/home", {
            state: data,
        })
    }

    return (
    <div className="text-center mt-5 shadow rounded container pt-3 pb-3">
        <h1>Sign Up</h1> <br></br>
    <form >
       <div className="p-2 m-2 fs-4">
        <input type="text" placeholder="First Name" 
        value={userData.fname} onChange={handleInputs}
        name="fname" id="fname" />
       </div>

       <div className="p-2 m-2 fs-4"> 
        <input type="text" placeholder="Last Name" 
        value={userData.lname} onChange={handleInputs}
        name="lname" id="lname" />
       </div>

       <div className="p-2 m-2 fs-4">
        <input type="email" placeholder="Email" 
        value={userData.email} onChange={handleInputs}
        name="email" id="email" />
       </div>
       
       <div className="p-2 m-2 fs-4">
        <input type="password" placeholder="Password" 
        value={userData.password} onChange={handleInputs}
        name="password" id="password" />
       </div>
       <br></br>
       <button onClick={()=>{moveToHome(userData)}} 
       className="p-2 ps-4 pe-4 fs-5 m-2 bg-success border-0 rounded-pill text-center" 
       type="submit">Sign Up</button>
    </form> 
    </div>)
}  
 // <TextField id="outlined-basic" label="Enter first Name" variant="outlined" />
 //<TextField id="outlined-basic" label="Enter Last Name" variant="outlined" />
 // <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
 // <TextField id="outlined-basic" label="Enter Password" variant="outlined" />

 // <Button variant="contained">Sign Up</Button>  
export default SignUp;  