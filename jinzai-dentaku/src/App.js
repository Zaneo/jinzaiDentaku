import React, { Component, Suspense } from 'react';
import preval from 'preval.macro'

import {
  Routes,
  Route,
  HashRouter as Router,
} from 'react-router-dom'

import './App.css';
import logo from './logo.svg';

import NavigationBar from './NavigationBar';
const AcademicVisaForm = React.lazy( () =>  import('./routes/AcademicVisaForm'));

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/academic" element={<AcademicVisaForm />}/>
            <Route path="/" element={<div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Build Date: {preval`module.exports = new Date().toLocaleString();`}
                    </p>
                  </header>
                </div>}>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    )
  }
}

export default App;