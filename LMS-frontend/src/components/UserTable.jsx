import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../assets/AdminDashboard.css"; // Ensure styles are applied

const UserTable = ({ users, deleteUser }) => {
  const getStatusClass = (status) => {
    if (!status) {
      return "status-default"; // Return a default class if status is undefined or falsy
    }

    switch (status.toLowerCase()) {
      case "active":
        return "status-active";
      case "inactive":
        return "status-inactive";
      default:
        return "status-default";
    }
  };

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={user.email}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <span className={`status-badge ${getStatusClass(user.status)}`}>
                  {user.status || "Unknown"} {/* Default status if undefined */}
                </span>
              </td>
              <td>
                <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
