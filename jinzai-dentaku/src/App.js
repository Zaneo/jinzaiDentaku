import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const AcademicVisaForm = lazy(() => import("./AcademicVisaForm"))

function DefaultPage() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <p1>Testing Github Pages with react and github actions</p1>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback = {DefaultPage}>
        <Routes>
          <Route path="/academic" component={AcademicVisaForm} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
