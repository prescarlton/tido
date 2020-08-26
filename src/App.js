import React from 'react';

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import { withAuthenticator } from 'aws-amplify-react';

const App = () => {
  return (
      <AppRouter />
  );
}

export default withAuthenticator(App, {includeGreetings: true});
