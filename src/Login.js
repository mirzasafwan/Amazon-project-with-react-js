import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useHistory();
    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)  => {
            //it successfully created a new user with Email and Pwd
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register  = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)  => {
                //it successfully created a new user with Email and Pwd
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to = "/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon"/>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className='Sign__bton'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button type='submit' onClick={register} className='Reg__bton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login