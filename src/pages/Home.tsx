import React from 'react';
import { Link } from 'react-router-dom';
import { pageUrl } from '../router';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={pageUrl.blog}>
          go to blog page
        </Link>
      </header>
    </div>
  );
}