import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/AdminDashboard.css";

const Navbar = ({ isSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="navbar">
      <h2>Admin Panel</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="profile">
        {/* <span>Admin</span> */}
        <img
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
          alt="Admin Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
