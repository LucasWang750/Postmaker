import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Create () {
  return (
    <div>
        <h1>Create Your Post</h1>
        <ul className="nav-links">
          <Link to="/auto">
            <li>Auto</li>
          </Link>
          <Link to="/manual">
            <li>Manual</li>
          </Link>
        </ul>
    </div>
  );
}

export default Create;