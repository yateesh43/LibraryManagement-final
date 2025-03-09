import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/User.css";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const handleViewDetails = () => {
    navigate(`/book/${book.id}`, {
      state: { book, from: location.pathname }, // Pass current route
    });
  };

  return (
    <div className="book-card">
      <img src={book.imgUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <button className="view-btn" onClick={handleViewDetails}>
        View Details
      </button>
    </div>
  );
};

export default BookCard;
