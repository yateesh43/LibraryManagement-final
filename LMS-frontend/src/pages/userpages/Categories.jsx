import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/userComponents/UserNavbar";
import BookCard from "../../components/userComponents/BookCard";
import api from "../../services/api"; // Ensure API service is correctly set up
import "../../assets/User.css";

const Categories = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/books/all"); // Adjust endpoint if needed
        setBooks(response.data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Group books by genre dynamically
  const groupedBooks = books.reduce((acc, book) => {
    if (!acc[book.genre]) acc[book.genre] = [];
    acc[book.genre].push(book);
    return acc;
  }, {});

  return (
    <div className="main">
      <UserNavbar />
      <section className="categories-container">
        <h1 className="section-title">Book Categories</h1>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          Object.keys(groupedBooks).map((genre) => (
            <div key={genre} className="genre-section">
              <h2 className="genre-title">{genre}</h2>
              <div className="books-grid-scroll">
                {groupedBooks[genre].map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Categories;
