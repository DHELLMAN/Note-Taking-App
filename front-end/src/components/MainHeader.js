import React from 'react'
import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = () => {

  const userName = localStorage.getItem('name');
  
  const heading = userName ? `${userName}'s Personal Notes App ` : 'WELCOME TO NOTES APP';
  
  return (
    <header className={classes.header}>
      <div>
        <h1>{heading}</h1>
      </div>
      <div className={classes.logOut}>
        <Navigation/>
      </div>
    </header>
  )
}

export default MainHeader