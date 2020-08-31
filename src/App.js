import React, { useEffect } from 'react';

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { setUserLoggedIn } from './actions/auth';

const App = (props) => {

  const checkUserLoggedIn = async () => {
    try {
      const authedUser = await Auth.currentAuthenticatedUser();
      console.log('user is logged in!')
      props.logUserIn()
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    checkUserLoggedIn();
  }, [])

  return (
    <AppRouter />
  );
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: () => {
      dispatch(setUserLoggedIn(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
