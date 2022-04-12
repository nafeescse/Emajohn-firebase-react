import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate =  useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);


    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePass = event => {
        setPass(event.target.value);
    }

    const formSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, pass)

    }


    if(user){
        navigate('/shop');
    }
    if (error) {
        return (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    }

    return (
        <div className='login'>
            <form action="" onSubmit={formSubmit}>
                <h2 className='text'>Login</h2>
                <div className='input-grp'>
                    <label htmlFor="email">Email: </label>
                    <input onBlur={handleEmail} className='input' type="email" name="" id="" />

                </div>
                <div className="input-grp">
                    <label htmlFor="password">Password: </label>
                    <input onBlur={handlePass} className='input' type="password" name="" id="" />
                </div>
                <input className='submit' type="submit" value="Logkin" />
                <p className='text'>New to Ema-john? <Link to='/signup'>Register Now</Link></p>
                <div className='line'>
                    <hr className='hr' />
                    <p>OR</p>
                    <hr className='hr' />
                </div>
                <button className='submit'>Signin With Google</button>


            </form>
        </div>
    );
};

export default Login;