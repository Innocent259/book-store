import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

export default function BookDetails({ id, title, author }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div className="row">
        <div className="col-md-6">
          <h2>{title}</h2>
          <h5>{author}</h5>
          <span>
            <button className="btn btn-primary" type="button">
              Comment
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleRemoveBook}
            >
              Remove
            </button>
          </span>
        </div>
        <div className="col-md-6">
          <div className="right-content">
            <h3>Current Chapter</h3>
            <p>Chapter 7</p>
            <button className="btn btn-info" type="button">
              Update Progress
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
BookDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
