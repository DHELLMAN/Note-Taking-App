import React, { useEffect } from 'react'
import MainHeader from './MainHeader'
import { Outlet, useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const navigate = useNavigate();
  const logInStatus = localStorage.getItem('isLoggedIn');
  useEffect(()=>{
    const locationInvalid = window.location.pathname!=='/signup' && window.location.pathname!=='/login';
    if(!logInStatus && locationInvalid){
      navigate('/');
    }
  },[logInStatus,navigate]);

  return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
  )
}

export default RootLayout