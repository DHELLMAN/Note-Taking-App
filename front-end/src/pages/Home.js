import React from 'react';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.mainDiv}>
    <header className={classes.card}>
      <h1>Please Login or Sign Up to Continue...</h1>
      <div className={classes.links}>
        <div>
          <a href='/login'>Login</a>
        </div>
        <div>  
          <a href='/signup'>Sign Up</a>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Home
