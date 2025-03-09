import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import api from "../services/api"; 
import "../assets/AdminDashboard.css";

const Users = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/user/all");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Delete user by ID
const deleteUser = async (id) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    try {
      // Send the user's id, not email, to the backend
      await api.delete(`/user/delete/${id}`);
      setUsers(users.filter((user) => user.id !== id)); // Remove user from list
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  }
};




  // Filter users based on search query (name, email)
  const filteredUsers = users.filter(
    (user) =>
      (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} onSearch={setSearchQuery} />

      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1>User Management</h1>

          {loading ? (
            <p>Loading users...</p>
          ) : (
            <>
              <p>Showing {filteredUsers.length} users</p>

              {/* Search Input & Clear Button */}
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="clear-search-btn">Clear</button>
                )}
              </div>

              {/* User Table Component */}
              <UserTable users={filteredUsers} deleteUser={deleteUser} />
            </>
          )}

          {/* Toast Container */}
          <ToastContainer position="top-right" autoClose={2500} hideProgressBar closeOnClick draggable pauseOnHover theme="colored" />
        </div>
      </div>
    </div>
  );
};

export default Users;
