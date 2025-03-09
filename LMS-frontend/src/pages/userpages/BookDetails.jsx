import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/User.css";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const book = location.state?.book;
  const previousPage = location.state?.from || "/user/books";

  if (!book) {
    return <h2 className="error-text">Book not found!</h2>;
  }

  const handleAddToCart = () => {
    addToCart(book);
    toast.success(`${book.title} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    setTimeout(() => navigate(previousPage), 2000);
  };

  return (
    <div className="book-details-container">
      <div className="book-image-container">
        <img src={book.imgUrl} alt={book.title} className="book-image" />
      </div>
      <div className="book-info">
        <h1 className="book-title">{book.title}</h1>
        <h3 className="book-author">by {book.author}</h3>
        <p className="book-genre">
          <strong>Genre:</strong> {book.genre || "Unknown"}
        </p>
        <p className="book-description">
          {book.description || "No description available."}
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
