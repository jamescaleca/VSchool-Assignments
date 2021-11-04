import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../contexts/userProvider'

const initInputs = {userName: '', password: ''}

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <div className='auth-container'>
            <h1 id='site-title'>COVID-19 Vax-to-Case</h1>
            { !toggle ? 
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs, {state: ''}}
                        btnText='Sign up'
                        errMsg={errMsg}
                        toggle={toggle}
                    />
                    <p onClick={toggleForm}>Already a member?</p>
                </>
            :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText='Login'
                        errMsg={errMsg}
                        toggle={toggle}
                    />
                    <p onClick={toggleForm}>Not a member?</p>
                </>
            }
        </div>
    )
}