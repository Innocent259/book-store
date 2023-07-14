import React from 'react'
import BooksList from './BooksList'
import NewBook from './NewBook'

export default function BookApp() {
  return (
    <div>
      {/* <Navbar /> */}
      <BooksList />
      <NewBook />
    </div>
  )
}
