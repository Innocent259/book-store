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
    <div className="container-lg ps-3">
      <h2 className="title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="col-md-7">
            <input
              className="w-100 bg-white"
              type="text"
              name="title"
              value={bookData.title}
              placeholder="Book title"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              className="w-100 bg-white"
              type="text"
              name="author"
              value={bookData.author}
              placeholder="Author"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary fw-bold w-100 " type="submit">ADD NEW BOOK</button>
          </div>
        </div>
      </form>
    </div>
  );
}
