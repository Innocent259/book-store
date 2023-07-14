import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import BookDetails from './BookDetails';
import Progress from './Progress';


export default function BookContainer() {
  const booksData = [
    {
      id: 1,
      categorie: 'Action',
      book: 'The Hunger Games',
      author: 'Suzanne Collins',
      pages: 20,
    },
    {
      id: 2,
      categorie: 'Science fiction',
      book: 'Dune',
      author: 'Frank Herbert',
      pages: 300,
    },
    {
      id: 3,
      categorie: 'Economy',
      book: 'Capital in the Twenty First Century',
      author: 'Suzanne Collins',
      pages: 50,
    },
  ]
  return (
    <div>
      { booksData.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))
      }
      <Progress />
    </div>
  )
}
