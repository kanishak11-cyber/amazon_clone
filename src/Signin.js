import React, { useState } from 'react'
import './Signin.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'


function Signin() {
    const history = useHistory();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const signIn = e => {
        e.preventDefault()
        console.log('Sign in')
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        console.log('Register')
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // it succesfully created a user
                // console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => {

                // it failed to create a user
                alert(error.message)
                // console.log(error)
            })
    }
    return (
        <div className="signin">
            <Link to='/'>
                <img
                    className="signin_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon logo"
                />
            </Link>
            <div className="signin_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail/Phone number</h5>
                    <input type="email" placeholder="Email" value={email} onChange=
                        {e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" value={password} onChange=
                        {e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="signin_button">Sign in</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <p>
                    Need help? <Link to='/'>Contact us</Link>
                </p>
                <button onClick={register} className="signin_register_button">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Signin
