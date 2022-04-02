import React from 'react';
import './App.css';
import Router from './components/Router';


function App() {
  return (
    <div className='app bg-dark'>
      <Router></Router>
    </div>
  );
}

export default React.memo(App);
