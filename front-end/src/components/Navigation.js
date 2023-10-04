import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

  const logInStatus = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  const logOutHandler = () =>{
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userID');
    navigate('/');
  }

  return (
    <>
    { logInStatus &&
      <button onClick={logOutHandler}>Logout</button>
    }
    </>

  )
}

export default Navigation