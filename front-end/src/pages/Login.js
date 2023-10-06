import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './SignUp_Login.module.css';
import { BASE_URL } from '../services/helper';

const Login = () => {

  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async(event)=>{
    event.preventDefault();
    setLoading(prevState=>!prevState);
    const formData = event.target;
    const userData = {
        email: formData.email.value,
        password: formData.password.value
    }

    const user = await axios.post(`${BASE_URL}/user/login`,userData);
    setLoading(prevState=>!prevState);
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
      {loading ? <h1>Checking Credentials...</h1>
                :
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
        }
      </nav>
    </header>
  )
}

export default Login
