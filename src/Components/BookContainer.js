import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookDetails from './BookDetails';

export default function BooksContainer() {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <>
      <ul>
        {Object.entries(books).map(([id, book]) => (
          <BookDetails
            key={id}
            id={id}
            title={book[0].title}
            author={book[0].author}
            category={book[0].category}
          />
        ))}
      </ul>
    </>
  );
}
