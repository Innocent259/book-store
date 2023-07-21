import React from 'react';
import BookContainer from './BookContainer';
import NewBook from './NewBook';

export default function BookApp() {
  return (
    <div className="container-lg pb-3">
      <div className="books"><BookContainer /></div>
      <hr />
      <NewBook />
    </div>
  );
}
