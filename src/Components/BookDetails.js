import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

export default function BookDetails({
  id, category, title, author,
}) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div className="row my-5 p-3 bg-white">
        <div className="col-md-6">
          <p className="fs-6 mb-0 text-secondary">{category}</p>
          <div><h2 className="fs-5 mb-0 book-title">{title}</h2></div>
          <div><h5 className="mt-0 fs-6" style={{ color: '#4386bf' }}>{author}</h5></div>
          <span>
            <button className="btn btn-default btn-sm text-primary" type="button">
              Comment
            </button>
            <button
              className="btn btn-default text-primary btn-sm"
              type="button"
              onClick={handleRemoveBook}
            >
              Remove
            </button>
            <button className="btn btn-default btn-sm text-primary" type="button">
              Edit
            </button>
          </span>
        </div>
        <div className="col-md-3 d-flex align-items-center gap-3">
          <div className="rectangle">
            <div className="inner-b" />
          </div>
          <div className="d-flex flex-column text-start">
            <p className="mb-0 progression">64%</p>
            <small className="fs-6 text-muted">completed</small>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <h3 className="fs-6 text-muted">Current Chapter</h3>
            <p>Chapter 7</p>
            <button className="btn btn-primary btn-sm" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

BookDetails.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
