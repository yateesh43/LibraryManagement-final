import React, { useState, useEffect } from "react";

const BookModal = ({ isOpen, onClose, onSave, bookData }) => {
  const [book, setBook] = useState({ id: "", title: "", author: "", genre: "", status: "Available", imgUrl: "" });
  const genres = ["Education","Fiction", "Non-Fiction", "Mystery", "Fantasy", "Dystopian", "Classic", "Science Fiction", "Biography", "Finance", "Self-Help"];

  useEffect(() => {
    if (bookData) {
      setBook(bookData); // Prefill form when editing
    } else {
      setBook({ id: "", title: "", author: "", genre: "", status: "Available", imgUrl: "" });
    }
  }, [bookData]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{bookData ? "Edit Book" : "Add New Book"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
          <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
          <input type="text" name="imgUrl" placeholder="Image URL" value={book.imgUrl} onChange={handleChange} required />
          <select name="genre" value={book.genre} onChange={handleChange} required>
            <option value="">Select Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
          <select name="status" value={book.status} onChange={handleChange}>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <button type="submit">{bookData ? "Update Book" : "Add Book"}</button>
          <button type="button" onClick={onClose} className="close-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BookModal;