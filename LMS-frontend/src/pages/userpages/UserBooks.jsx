import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/userComponents/UserNavbar";
import BookCard from "../../components/userComponents/BookCard";
import api from "../../services/api";
import "../../assets/User.css";

const UserBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/books/all"); // Fetch books from backend
        setBooks(response.data);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      <UserNavbar />
      <section className="books-container">
        <div className="books-header">
          <h1 className="section-title">Explore Our Books</h1>
          <input
            type="text"
            placeholder="Search books..."
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="books-grid">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
            ) : (
              <p>No books found.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserBooks;
