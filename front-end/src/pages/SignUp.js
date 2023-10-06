import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from './SignUp_Login.module.css';
import { BASE_URL } from '../services/helper';

const SignUp = () => {

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const signupHandler = async (event)=>{
        event.preventDefault();
        setLoading(prevState=>!prevState);
        console.log('Signup submit working');
        const formData = event.target;
        const userData = {
            username: formData.username.value,
            email: formData.email.value,
            contact: formData.number.value,
            password: formData.password.value
        }

        const newUser = await axios.post(`${BASE_URL}/user/signup`,userData);
        setLoading(prevState=>!prevState);
        window.alert(newUser.data.msg);
        if(newUser.data.status){
            navigate('/login');
        }
    }
    return (
        <header>
            <nav className={classes.card}>
                {loading ? <h1>Analyzing your details...</h1>
                :
                <form className={classes['form-control']} onSubmit={signupHandler} method='post'>
                    <div>
                        <label htmlFor='username'>Name</label>
                        <input type='text' name='username' id='username'/>
                    </div>
                    <div>
                        <label htmlFor='email'>E-Mail</label>
                        <input type='email' name='email' id='email'/>
                    </div>
                    <div>
                        <label htmlFor='number'>Contact</label>
                        <input type='number' name='number' id='number'/>
                    </div>
                    <div>
                        <label htmlFor='pass'>Password</label>
                        <input type='password' name='password' id='pass'/>
                    </div>
                    <div>
                        <button className={classes.btn} type='submit'>Register</button>
                        <a href='/login'>Already registered? Login here...</a>
                    </div>
                </form>
                }
            </nav>
        </header>
    )
}

export default SignUp