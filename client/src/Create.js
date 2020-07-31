import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Create () {
  return (
    <div>
        <h1>Create Your Post</h1>
        <ul className="nav-links nav">
          <Link to="/auto">
            <button type="button">Auto</button>
          </Link>
          <Link to="/manual">
            <button type="button">Manual</button>
          </Link>
        </ul>
    </div>
  );
}

export default Create;