import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './SignUp_Login.module.css';

const Login = () => {

  const navigate = useNavigate();

  const loginHandler = async(event)=>{
    event.preventDefault();
    console.log('Login submit working');
    const formData = event.target;
    const userData = {
        email: formData.email.value,
        password: formData.password.value
    }

    const user = await axios.post('http://localhost:8000/user/login',userData);
    if(!user.data.status){
      return window.alert(user.data.msg);
    }
    localStorage.setItem('userID',user.data.data.userID)
    localStorage.setItem('isLoggedIn',1);
    localStorage.setItem('name',user.data.data.username);
    navigate('/userDashboard');
  }
  return (
    <header>
      <nav className={classes.card}>
        <form className={classes['form-control']} onSubmit={loginHandler}  method='post'>
          <div>
            <label htmlFor='email'>E-Mail</label>
            <input type='email' name='email' id='email'/>
          </div>
          <div>
            <label htmlFor='pass'>Password</label>
            <input type='password' name='password' id='pass'/>
          </div>
          <div>
            <button className={classes.btn} type='submit'>Login</button>
            <a href='/signup'>New User? Register Here...</a>
          </div>
        </form>
      </nav>
    </header>
  )
}

export default Login
