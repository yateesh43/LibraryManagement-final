import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/AdminDashboard.css";

const Reports = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const books = [
    { genre: "Fiction", count: 20 },
    { genre: "Non-Fiction", count: 15 },
    { genre: "Mystery", count: 10 },
    { genre: "Fantasy", count: 12 },
    { genre: "Dystopian", count: 8 },
    { genre: "Classic", count: 5 },
    { genre: "Science Fiction", count: 7 },
    { genre: "Biography", count: 6 }
  ];

  const statusData = [
    { status: "Available", count: 50 },
    { status: "Unavailable", count: 30 }
  ];

  const users = [
    { status: "Active", count: 70 },
    { status: "Inactive", count: 30 }
  ];

  const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300", "#581845"];

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1>Library Reports</h1>
          <div className="reports-grid">
            
            {/* Total Books and Users */}
            <div className="report-card">📚 Total Books: 80</div>
            <div className="report-card">👤 Total Users: 100</div>

            {/* Books by Genre Pie Chart */}
            <div className="chart-container">
              <h2>Books by Genre</h2>
              <PieChart width={400} height={300}>
                <Pie data={books} dataKey="count" nameKey="genre" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {books.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            {/* Books by Status Bar Chart */}
            <div className="chart-container">
              <h2>Books Status</h2>
              <BarChart width={400} height={300} data={statusData}>
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#FF5733" />
              </BarChart>
            </div>

            {/* Users Active vs Inactive */}
            <div className="chart-container">
              <h2>Users Status</h2>
              <PieChart width={400} height={300}>
                <Pie data={users} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
                  {users.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
