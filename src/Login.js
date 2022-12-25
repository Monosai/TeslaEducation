import React from 'react'
import Register from './Register';
import swal from 'sweetalert';
import './Login.css';
function Login() {
  function loginFunc(){

    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

var user = localStorage.getItem(username);
var data = JSON.parse(user);
console.log(data);

if(user == null){
  console.log('wrong username');
  swal ( "Loginda xato bor" ,  ":/" ,  "error" )
}
else if(username==data.username && pass==data.password){
console.log('logged in');

}
else{
  console.log('wrong password');
  swal ( "Parolda xato bor" ,  ":/" ,  "error" )
}
  }
  return (
<>
<div className='box'>
<div className='form'>
    <h2>Sign in</h2>
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
        <a href='https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid'>Forgot password</a>
        <a href='Register.js'>Create account</a>
    </div>
    <input onClick={loginFunc} type="Submit" value='Login'/>
</div>
</div>
</>
  )
}

export default Login