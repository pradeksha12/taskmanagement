import React from 'react'
import './Mainlogin.css';

//import Register from '../components/Register';

export default function Mainlogin() {
  // const register = console.log("Hai");
  return (
    <div className='app'>
    <div className='login'>
        
       <h2 className='h2'>log into TaskMaster</h2>
       <form className='login-container'>
        <div class="form">
           
            <p>Are you an <a href="/adminlogin"> Admin </a>or <a href="/emplogin"> Employee</a></p>
           
        </div>
      
    </form>
    </div>
    </div>
  );
}
const toDashboard=()=>{
  window.location.href="/dashboard";
}
const handleSubmit=(e)=>{
  e.preventDefault();
  toDashboard();
}
