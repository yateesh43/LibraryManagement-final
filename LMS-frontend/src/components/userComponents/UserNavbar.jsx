import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../assets/User.css";

const UserNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="user-navbar">
      <div className="logo">Library</div>

      {/* Font Awesome Menu Icon */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/user/home" className={location.pathname === "/user/home" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/user/books" className={location.pathname === "/user/books" ? "active" : ""}>
            Books
          </Link>
        </li>
        <li>
          <Link to="/user/categories" className={location.pathname === "/user/categories" ? "active" : ""}>
            Categories
          </Link>
        </li>
        <li>
          <Link to="/user/cart" className={location.pathname === "/user/cart" ? "active" : ""}>
            Cart
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
