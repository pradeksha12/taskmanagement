import React from 'react'
import './Adminregister.css'
export default function Adminregister() {
  return (
    <div className='regis'>
    <div className='register'>
      <h2>Admin Register </h2>
      <div class="form-group">
            <label for="fname">Name</label>
            <br></br>
            <input type="text" id="fname" name="fname" required></input>
            <br></br>
            {/* <label for="lname"></label>
            <br></br>
            <input type="text" id="lname" name="lname" required></input>
            <br></br> */}
            <label for="email">Email Address</label>
            <br></br>
            <input type="email" id="email" name="email" required></input>
            <br></br>
            <label for="orgname">Organization Name</label>
            <br></br>
            <input type="text" id="orgname" name="orgname" required></input>
      </div>
      <div class="form">
            <label for="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password" required></input>
            <br></br>
            <label for="repassword">Re-enter Password</label>
            <br></br>
            <input type="password" id="repassword" name="repassword" required></input>
            <p></p>
            <p>Already have an a account?<a href="/"> Login</a> here.</p>
        </div>
        <button type="submit" class="button-login">REGISTER</button>

    </div>
    </div>
  )
}
