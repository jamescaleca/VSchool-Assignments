import React, { useContext } from 'react'
import AuthForm from './AuthForm.js'
import { DataContext } from '../contexts/dataProvider.js'


export default function Auth() {
    const { toggle, toggleForm, handleSignup, handleLogin } = useContext(DataContext)

    return (
        <div className='auth-container'>
            <h1 id='site-title'>COVID-19 Vax-to-Case</h1>
            { !toggle ? 
                <div>
                    <AuthForm handleSubmit={handleSignup} btnText='Sign up' />
                    <p onClick={toggleForm}>Already a member?</p>
                </div>
            :
                <div>
                    <AuthForm handleSubmit={handleLogin} btnText='Login' />
                    <p onClick={toggleForm}>Not a member?</p>
                </div>
            }
        </div>
    )
}