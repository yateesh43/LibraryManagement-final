import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faBook,
  faChartBar,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/AdminDashboard.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Automatically close sidebar on mobile view
        if (isOpen) {
          toggleSidebar();
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, toggleSidebar]);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <li>
          <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "active" : "")}>
            <FontAwesomeIcon icon={faUsers} /> <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/books" className={({ isActive }) => (isActive ? "active" : "")}>
            <FontAwesomeIcon icon={faBook} /> <span>Books</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reports" className={({ isActive }) => (isActive ? "active" : "")}>
            <FontAwesomeIcon icon={faChartBar} /> <span>Reports</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
