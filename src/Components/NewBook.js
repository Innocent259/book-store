import React, { useState } from 'react';

export default function NewBook() {
  const [bookData, setBookData] = useState({
    book: '',
    author: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookData({
      book: '',
      author: '',
    });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="book"
          value={bookData.book}
          placeholder="Book title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          value={bookData.author}
          placeholder="Author"
          onChange={handleInputChange}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}
