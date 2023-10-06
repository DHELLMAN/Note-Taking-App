import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <header>
      <h1>Please Login to continue...</h1>
      <div>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <div>  
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
    </header>
  )
}

export default Home
