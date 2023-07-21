import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function NewBook() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookData.title.trim() !== '' && bookData.author.trim() !== '') {
      dispatch(addBook(bookData));
      setBookData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={bookData.title}
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
        <button className="btn btn-primary btn-sm" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
