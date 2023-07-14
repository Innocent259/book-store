import React from 'react'

export default function BookDetails({book}) {
    console.log(book)
  return (
    <div>
      <p>{book.author}</p>
    </div>
  )
}
