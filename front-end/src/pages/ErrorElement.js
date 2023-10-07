import React from 'react'
import classes from './Error.module.css';
import MainHeader from '../components/MainHeader';
import { NavLink } from 'react-router-dom';

const ErrorElement = () => {
  return (
    <>
        <MainHeader/>
        <div className={classes.wrapper}>
            <div>
                <h1>Page Not Found. Please Try After Some Time.</h1>
            </div>
            <div className={classes.homeLink}>
                <NavLink to='/'>Back To Home</NavLink>
            </div>
        </div>
    </>
  )
}

export default ErrorElement