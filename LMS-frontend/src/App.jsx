import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Books from "./pages/Books";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";

import Home from "./pages/userpages/Home";
import UserBooks from "./pages/userpages/UserBooks";
import Categories from "./pages/userpages/Categories";
import Cart from "./pages/userpages/Cart"
import BookDetails from "./pages/userpages/BookDetails";

import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/user/*" element={<UserLayout />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
    </CartProvider>
    
  );
}

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  
  return (
    <div className="admin-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="dashboard" element={<AdminDashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="users" element={<Users isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="books" element={<Books isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="reports" element={<Reports isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </div>
  );
};

const UserLayout = () => {
  return (
    <div className="user-container">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="books" element={<UserBooks />} />
        <Route path="categories" element={<Categories />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/user/home" />} />
      </Routes>
    </div>
  );
};


export default App;
