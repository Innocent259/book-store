import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export default function BookDetails({ book }) {
  return (
    <li>
      <div className="row">
        <div className="col-md-6">
          <h2>{book.title}</h2>
          <h5>{book.author}</h5>
          <span>
            <button className="btn btn-primary" type="button">Comment</button>
            <button className="btn btn-danger" type="button">Remove</button>
            <button className="btn btn-info" type="button">Edit</button>
          </span>
        </div>
        <div className="col-md-6">
          <div className="right-content">
            <h3>Current Chapter</h3>
            <p>Chapter 7</p>
            <button className="btn btn-info" type="button">Update Progress</button>
          </div>
        </div>
      </div>
    </li>
  );
}
BookDetails.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
