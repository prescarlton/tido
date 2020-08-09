import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import List from './components/organisms/List';
import Sidebar from './components/organisms/Sidebar';
import AppRouter from './routers/AppRouter';


function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
