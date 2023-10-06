import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

  const logInStatus = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  const logOutHandler = () =>{
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userID');
    localStorage.removeItem('name');
    navigate('/');
  }

  return (
    <div className={classes.logOutButton}>
    { logInStatus &&
      <button  onClick={logOutHandler}>Logout</button>
    }
    </div>

  )
}

export default Navigation