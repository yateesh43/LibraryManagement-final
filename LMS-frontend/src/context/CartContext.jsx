import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedBorrowed = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setCart(storedCart);
    setBorrowedBooks(storedBorrowed);
  }, []);

  // Save cart to localStorage when it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save borrowed books to localStorage when it updates
  useEffect(() => {
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
  }, [borrowedBooks]);

  // Add to Cart
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // Remove from Cart
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Borrow Books Function
  const borrowBooks = () => {
    const borrowedWithDates = cart.map((book) => ({
      ...book,
      borrowedDate: new Date().toISOString().split("T")[0], // Current Date
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 Week Later
        .toISOString()
        .split("T")[0],
    }));

    setBorrowedBooks((prev) => [...prev, ...borrowedWithDates]);
    setCart([]); // Empty cart after borrowing
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, borrowBooks, borrowedBooks }}
    >
      {children}
    </CartContext.Provider>
  );
};
