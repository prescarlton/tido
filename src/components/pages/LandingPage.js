import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {


    return (
        <div className='landingPage'>
            <nav className='landingPage__topBar'>
                <div className='landingPage__topBar__left'>
                    <h2 className='landingPage__topBar__brand'>tido</h2>
                    <ul className='landingPage__topBar__nav'>
                        <li className='landingPage__topBar__navLink'>Features</li>
                        <li className='landingPage__topBar__navLink'>Pricing</li>
                        <li className='landingPage__topBar__navLink'>Resources</li>
                    </ul>
                </div>
                <div className='landingPage__topBar__right'>
                    <ul className='landingPage__topBar__nav'>
                        <Link to='/login'>
                            <li className='landingPage__topBar__navLink'>Login</li>
                        </Link>
                        <Link to='/signup'>
                            <li className='landingPage__topBar__navLink landingPage__topBar__navLink--special'>Sign up</li>
                        </Link>
                    </ul>
                </div>

            </nav>
            <div className='landingPage__content'>
                <h1>See what's to do with tido.</h1>
                <Link to='/signup'><button className='button button--action button--wide'>join now</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;