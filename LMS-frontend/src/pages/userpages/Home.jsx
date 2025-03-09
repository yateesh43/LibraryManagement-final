// src/pages/user/Home.jsx
import React from "react";
import UserNavbar from "../../components/userComponents/UserNavbar";
import "../../assets/User.css";

const Home = () => {
  return (
    <div className="main">
      <UserNavbar />
      <section className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Welcome to the Library Management System</h1>
          <p>Explore a wide range of books, manage your categories, and keep track of your borrowed books easily.</p>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Vast Collection</h3>
              <p>Browse thousands of books across multiple genres.</p>
            </div>
            <div className="feature-card">
              <h3>Easy Borrowing</h3>
              <p>Borrow books online and keep track of due dates effortlessly.</p>
            </div>
            <div className="feature-card">
              <h3>Personalized Profile</h3>
              <p>Manage your borrowed books, wishlist, and history in one place.</p>
            </div>
          </div>
        </div>

        {/* Trending Books Section */}
        <div className="trending-books">
          <h2>Trending Books</h2>
          <div className="books-list">
            <div className="book-card">
              <img src="https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg" alt="Book Cover" />
              <h4>The Great Gatsby</h4>
              <p>F. Scott Fitzgerald</p>
            </div>
            <div className="book-card">
              <img src="https://i.pinimg.com/736x/e0/ab/3d/e0ab3d634e60a1e073e9f1ffd12cb54f.jpg" alt="Book Cover" />
              <h4>1984</h4>
              <p>George Orwell</p>
            </div>
            <div className="book-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" alt="Book Cover" />
              <h4>To Kill a Mockingbird</h4>
              <p>Harper Lee</p>
            </div>
          </div>
        </div>

        {/* User Testimonials */}
        <div className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>"This library system is a game-changer! It's so easy to find and borrow books."</p>
              <h4>- Sarah L.</h4>
            </div>
            <div className="testimonial">
              <p>"I love the personalized profile feature. It helps me keep track of my reading history."</p>
              <h4>- Michael R.</h4>
            </div>
            <div className="testimonial">
              <p>"A fantastic system for book lovers! The vast collection is impressive."</p>
              <h4>- Emily W.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
