import React, { useEffect } from 'react'
import MainHeader from './MainHeader'
import { Outlet, useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const navigate = useNavigate();
  const logInStatus = localStorage.getItem('isLoggedIn');
  const location = window.location.pathname;
  useEffect(()=>{
    const locationInvalid = location!=='/signup' && location!=='/login';
    if(!logInStatus && locationInvalid){
      navigate('/');
    }
    if(logInStatus && (location==='/signup' || location==='/login' || location==='/')){
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userID');
      localStorage.removeItem('name');
    }
  },[logInStatus,location,navigate]);

  const beforeUnloadListener = (event) => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userID');
    localStorage.removeItem('name');
};

  window.addEventListener("beforeunload", beforeUnloadListener);

  return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
  )
}

export default RootLayout