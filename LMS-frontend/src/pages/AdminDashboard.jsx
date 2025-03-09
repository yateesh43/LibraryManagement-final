import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/AdminDashboard.css";

const AdminDashboard = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />  
      
      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1>Welcome, Admin</h1>

          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            <div className="card">Total Users: 150</div>
            <div className="card">Active Users: 120</div>
            <div className="card">Total Books: 1200</div>
            <div className="card">Available Books: 850</div>
            <div className="card">Books Borrowed: 300</div>
            <div className="card">Books Rented: 50</div>
            <div className="card">Overdue Books: 25</div>
            <div className="card">Total Genres: 48</div>
          </div>

          {/* Recent Activity Section */}
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <ul>
              <li><strong>John Doe</strong> borrowed <em>"The Great Gatsby"</em></li>
              <li><strong>Emma Watson</strong> returned <em>"1984"</em></li>
              <li><strong>Michael Smith</strong> rented <em>"The Alchemist"</em></li>
              <li><strong>Sophia Johnson</strong> borrowed <em>"Harry Potter"</em></li>
            </ul>
          </div>

          {/* Charts/Graphs Section (Placeholder) */}
          <div className="dashboard-charts">
            <h2>Library Statistics</h2>
            <p>[Charts and Graphs can be integrated here]</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
