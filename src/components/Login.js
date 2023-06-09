import {auth} from '../firebase'
import "../index.css"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
    const register=e=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((r)=>{
            document.getElementById("final-message").innerHTML="<h4>You are successfully registered</h4>"
        }).catch(err=>{
            alert(err.message)
        })
        setemail("")
        setpassword("")
    }
    const login=async e=>{
        e.preventDefault();
        try{
        const user=await signInWithEmailAndPassword(auth,email,password)
        console.log(user.user.uid)
        const check=document.getElementById("temp")
        check.innerHTML="Loading...👻"
        setTimeout(()=>navigate("/new"),3000)
        }
        catch(err){
            alert(err.message)
        }
        setpassword("")
        setemail("")
    }
  return (
    <div className="box">
    <center>
    <div className="main-container">
    <h4 className="head">Task Manager✍🏼</h4>
      <input className="email" type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email..."/>
      <input className="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="password"/>
      <button type="submit" className="register" onClick={register}>Register</button>
      <button type="submit" className="login" onClick={login}>Login</button>
      <p id="final-message"></p>
      <p id="temp"></p>
    </div>
    </center>
    </div>
  )
}

export default Login;
