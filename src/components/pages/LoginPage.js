import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { setCognitoUser } from '../../actions/auth';

const LoginPage = (props) => {

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [amplifyErrorMsg, setAmplifyErrorMsg] = useState('');
    const [usernameError, setUsernameErrorValue] = useState(false);
    const [passwordError, setPasswordErrorValue] = useState(false);
    const [loadingLogin, setLoadingLoginValue] = useState(false);

    const handleUsernameChange = (e) => {
        setUsernameValue(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }

    const amplifySignIn = () => {
        setAmplifyErrorMsg('');
        if (usernameValue && passwordValue) {
            setLoadingLoginValue(true);
            console.log('loading')
            // setCognitoAwsUser({ user: { username: username } });
            // handleIsLoadingLogin(true);
            console.log(usernameValue)
            Auth.signIn(usernameValue, passwordValue)
                .then((userData) => {
                    console.log(userData)
                    setCognitoUser(userData);
                    setLoadingLoginValue(false);
                })
                .catch((err) => {
                    console.log(err)
                    // setCognitoAwsUser({ user: { username: username } });
                    setAmplifyErrorMsg(err.message);
                    setLoadingLoginValue(false);
                    // Auth.verifyUserAttribute(user, 'phone_number') // 'email'
                    //     .then((res) => {
                    //         console.log('Verify success: ', res);
                    //     })
                    //     .catch((err) => {
                    //         console.log('Verify error: ', err);
                    //     });
                    // Auth.resendSignUp(username)
                    //     .then((res) => {
                    //         console.log(res);
                    //     })
                    //     .catch((err) => {
                    //         console.log(err);
                    //     });

                    // if (err.code === 'UserNotConfirmedException') {
                    //     // The error happens if the user didn't finish the confirmation step when signing up
                    //     // In this case you need to resend the code and confirm the user
                    //     // About how to resend the code and confirm the user, please check the signUp part
                    // } else if (err.code === 'PasswordResetRequiredException') {
                    //     // The error happens when the password is reset in the Cognito console
                    //     // In this case you need to call forgotPassword to reset the password
                    //     // Please check the Forgot Password part.
                    // } else if (err.code === 'NotAuthorizedException') {
                    //     // The error happens when the incorrect password is provided
                    // } else if (err.code === 'UserNotFoundException') {
                    //     // The error happens when the supplied username/email does not exist in the Cognito user pool
                    // } else {
                    //     // console.log(err);
                    // }
                });

        } else {
            if (!usernameValue) {
                setUsernameErrorValue(true);
            } else {
                setUsernameErrorValue(false);
            }
            if (!passwordValue) {
                setPasswordErrorValue(true);
            } else {
                setPasswordErrorValue(false);
            }
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        amplifySignIn();
    }

    return (
        <div className='loginPage'>
            <div className='loginPage__left'>
                <p className='loginPage__SignupLink'>Don't have an account yet? <Link to='/signup' className='link'>Sign up</Link></p>
                <form
                    className={loadingLogin ? 'loginPage__form loginPage__form--loading' : 'loginPage__form'}
                    onSubmit={formSubmit}>
                    <div className='loginPage__form--row'>
                        <h1 className='loginPage__form--title'>Log in.</h1>
                        <p className='loginPage__amplifyErrorMsg'>{amplifyErrorMsg}</p>
                    </div>

                    <div className='loginPage__form--row'>
                        <div className='loginPage__inputGroup'>
                            <label for='username'>Username</label>
                            <input
                                name='username'
                                className='signupPage__input'
                                onChange={handleUsernameChange}
                            />
                        </div>
                    </div>
                    <div className='loginPage__form--row'>
                        <div className='loginPage__inputGroup'>
                            <label for='password'>Password</label>
                            <input
                                name='password'
                                className='signupPage__input'
                                type='password'
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>

                    <button
                        className='button button--action button--wide'
                        type='submit'
                        disabled={loadingLogin}
                    >
                        {
                            loadingLogin ? 'loading...' : 'Log in'
                        }
                    </button>
                </form>
            </div>
            <div className='loginPage__right'>
                <h1>tido</h1>
                <h3>You've never been productive like this before.</h3>
            </div>
        </div>
    )
}

export default LoginPage;