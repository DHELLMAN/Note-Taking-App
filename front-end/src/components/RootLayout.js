import React, { useEffect } from 'react'
import MainHeader from './MainHeader'
import { Outlet, useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const navigate = useNavigate();
  const logInStatus = localStorage.getItem('isLoggedIn');
  const location = window.location.pathname;
  console.log(location);
  useEffect(()=>{
    const locationInvalid = location!=='/signup' && location!=='/login';
    if(!logInStatus && locationInvalid){
      navigate('/');
    }
  },[logInStatus,location,navigate]);

  return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
  )
}

export default RootLayout