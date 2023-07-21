import React from 'react';
import BookContainer from './BookContainer';
import NewBook from './NewBook';

export default function BookApp() {
  return (
    <div className="container-lg">
      <BookContainer />
      <hr />
      <NewBook />
    </div>
  );
}
