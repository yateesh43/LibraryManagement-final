import React from "react";
import UserNavbar from "../../components/userComponents/UserNavbar";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, borrowBooks, borrowedBooks } = useCart();

  const handleBorrowBooks = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add books before borrowing!", { autoClose: 2000 });
      return;
    }

    borrowBooks();
    toast.success("Books borrowed successfully!", { autoClose: 2000 });
  };

  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
    toast.info("Book removed from cart!", { autoClose: 1500 });
  };

  const handleClearCart = () => {
    if (cart.length === 0) {
      toast.warn("Cart is already empty!", { autoClose: 1500 });
      return;
    }

    clearCart();
    toast.success("Cart cleared successfully!", { autoClose: 1500 });
  };

  return (
    <div className="main">
      <UserNavbar />
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty!</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.imgUrl} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h3 className="book-title">{item.title}</h3>
                    <p className="book-author"><strong>Author:</strong> {item.author}</p>
                    <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-actions">
              <button className="borrow-books-btn" onClick={handleBorrowBooks}>Borrow Books</button>
              <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
            </div>
          </>
        )}

        {/* Borrowed Books Section */}
        {borrowedBooks.length > 0 && (
          <div className="borrowed-books-section">
            <h2>Borrowed Books</h2>
            <ul className="borrowed-books-list">
              {borrowedBooks.map((book, index) => (
                <li key={index} className="borrowed-book">
                  <img src={book.imgUrl} alt={book.title} className="borrowed-book-image" />
                  <div className="borrowed-book-info">
                    <h3>{book.title}</h3>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Borrowed Date:</strong> {book.borrowedDate}</p>
                    <p><strong>Deadline:</strong> {book.deadline}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
