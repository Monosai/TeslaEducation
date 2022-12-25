import React from 'react'
import './Register.css';
import swal from 'sweetalert';

function Register() {
    
    function signup(e){

        swal("Good job!", "You create account", "success");

        var username = document.getElementById('username').value;
        var pass = document.getElementById('password').value;
    
        var user ={
            username: username,
            password:pass,
        };
        
        var json = JSON.stringify(user);
        localStorage.setItem(username,json);
        console.log('user added');
        }
  return (
    <>
    <div className='box'>
<div className='form'>
    <h2>Sign up</h2>
    <div className='inputBox'>
<input id='username' type='text' required='required'/>
<span>Username</span>
<i></i>
    </div>
    <div className='inputBox'>
<input id='password' type='password' required='required'/>
<span>Password</span>
<i></i>
    </div>
    <div className='links'>
        <a href='Login.js'>Sign in</a>
    </div>
    <input onClick={signup} type="Submit" value='Create'/>
</div>
</div>
    </>
  )
}

export default Register