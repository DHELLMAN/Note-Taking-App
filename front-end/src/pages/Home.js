import React from 'react';
import classes from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className={classes.mainDiv}>
    <header className={classes.card}>
      <h1>Please Login or Sign Up to Continue...</h1>
      <div>
        <div>
          <NavLink className={classes.links} to='/login'>Login</NavLink>
        </div>
        <div>  
          <NavLink className={classes.links} to='/signup'>Sign Up</NavLink>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Home
