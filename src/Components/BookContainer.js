import React from 'react';
import BookDetails from './BookDetails';

export default function BookContainer() {
  const booksData = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <>
      <ul>
        { booksData.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
}
