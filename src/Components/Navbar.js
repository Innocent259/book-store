import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navigation">
      <h1>Book store</h1>
      <ul className="navigation-list">
        <li>
          <Link className="link" to="/">Quote</Link>
        </li>
        <li>
          <Link className="link" to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}
