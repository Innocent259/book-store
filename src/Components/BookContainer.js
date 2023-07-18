import React from 'react';
import { useSelector } from 'react-redux';
import BookDetails from './BookDetails';

export default function BookContainer() {
  const { books } = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {books.map((book) => (
          <BookDetails
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </>
  );
}
