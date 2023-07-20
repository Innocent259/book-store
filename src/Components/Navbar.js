import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsFillPersonFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg align-items-center navbar-light bg-white">
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          <h1 className="text-primary fw-bold fs-3">Bookstore CMS</h1>
        </Link>
        <button className="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-none d-md-block border border-secondary rounded-circle profile">
          <div className="text-primary fs-3"><BsFillPersonFill /></div>
        </div>
      </div>
    </nav>
  );
}
