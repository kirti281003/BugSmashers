import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions/userAction";
import { useEffect, useState } from "react";
import axios from "axios";


function SubLogin()
{
    const[email,setLoginEmail]=useState("");
    const [password,setLoginPassword]=useState("");
    const{user,error,isAuthenticated}=useSelector(state=>state.user)
    const config={
        headers:{"Content-Type":"application/json"}
    }
    const loginSubmit=()=>{
        window.location.href="/"
    axios.post("/api/v1/login",{email,password},config)

    }
   
    

    // const dispatch=useDispatch();
    // const loginSubmit=()=>{
    //     dispatch(login(email,password))

    // }
    // console.log(isAuthenticated);
    // useEffect(()=>{
    //    if(isAuthenticated)
    //    {
    //     window.location.href="/me"
    //    }

    // },[isAuthenticated])
return (
    <form >
        <input type="text" name="name" placeholder="Enter Your Name" onChange={(e)=>setLoginEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Enter Password" onChange={(e)=>setLoginPassword(e.target.value)}/>
        <input type="submit" name="submit" onClick={loginSubmit}/>
    </form>
)
}
export default SubLogin