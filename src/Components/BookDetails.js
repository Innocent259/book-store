import React from 'react';
import PropTypes from 'prop-types';

export default function BookDetails({ book }) {
  return (
    <li>
      {book.author}
    </li>
  );
}
BookDetails.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }).isRequired,
};
