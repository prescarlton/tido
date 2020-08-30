import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = (props) => {

    const [nameValue, setNameValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsernameValue(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }

    return (
        <div className='signupPage'>
            <div className='signupPage__left'>
                <h1>tido</h1>
                <h3>You've never been productive like this before.</h3>
            </div>
            <div className='signupPage__right'>
                <p className='signupPage__loginLink'>Already have an account? <Link to='/login' className='link'>Sign in</Link></p>
                <form className='signupPage__form'>
                    <h1 className='signupPage__form--title'>Create an account.</h1>
                    <div className='signupPage__form--row'>
                        <div className='signupPage__inputGroup'>
                            <label for='name'>Name</label>
                            <input
                                name='name'
                                className='signupPage__input'
                                value={nameValue}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className='signupPage__inputGroup'>
                            <label for='username'>Username</label>
                            <input
                                name='username'
                                className='signupPage__input'
                                value={usernameValue}
                                onChange={handleUsernameChange}
                            />
                        </div>
                    </div>
                    <div className='signupPage__form--row'>
                        <div className='signupPage__inputGroup'>
                            <label for='email'>Email Address</label>
                            <input
                                name='email'
                                className='signupPage__input'
                                type='email'
                                value={emailValue}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>
                    <div className='signupPage__form--row'>
                        <div className='signupPage__inputGroup'>
                            <label for='name'>Password</label>
                            <input
                                name='password'
                                className='signupPage__input'
                                type='password'
                                value={passwordValue}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>
                    <button className='button button--action button--wide'>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;