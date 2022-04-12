import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import App from '../../App';
import auth from '../../firebase.init';

const Signup = () => {
    // const auth = getAuth(App);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conPass, SetConpass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePass = event =>{
        setPass(event.target.value);
    }
    const handleConPass = event =>{
        SetConpass(event.target.value);
    }

    if(user){
        navigate('/shop');
    }
    const formSubmit = event =>{
        event.preventDefault();
        if(pass !== conPass){
            setError('Password mismatch');
            return;
        }
        createUserWithEmailAndPassword(email, pass);
    }
    return (
        <div className='login'>
            <form action="" onSubmit={formSubmit}>
                <h2 className='text'>Register</h2>
                <div className='input-grp'>
                    <label htmlFor="text">Name: </label>
                    <input className='input' type="text" name="" id="" />

                </div>
                <div className='input-grp'>
                    <label htmlFor="email">Email: </label>
                    <input onBlur={handleEmail} required className='input' type="email" name="" id="" />

                </div>
                <div className="input-grp">
                    <label htmlFor="password">Password: </label>
                    <input onBlur={handlePass} required className='input' type="password" name="" id="" />
                </div>
                <div className="input-grp">
                    <label htmlFor="password">Confirm Password: </label>
                    <input onBlur={handleConPass} required className='input' type="password" name="" id="" />
                </div>
                <p style={{color: 'red', textAlign: 'center'}}>{error}</p>
                <input className='submit' type="submit" value="Signup" />
                <p className='text'>Already Joined? <Link to='/login'>Login Now</Link></p>
                <div className='line'>
                    <hr className='hr' />
                    <p>OR</p>
                    <hr className='hr' />
                </div>
                <button className='submit'>Signup With Google</button>


            </form>
        </div>
    );
};

export default Signup;