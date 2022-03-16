import React from 'react';
import preval from 'preval.macro'
import './App.css';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build Date: {preval`module.exports = new Date().toLocaleString();`}.
        </p>
      </header>
    </div>
  );
}