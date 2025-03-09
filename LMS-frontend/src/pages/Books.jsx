import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BookModal from "../components/BookModal";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import "../assets/AdminDashboard.css";

const Books = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/books/all");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        toast.error("Failed to load books");
      }
    };

    fetchBooks();
  }, []);

  const openModal = (book = null) => {
    setCurrentBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addOrUpdateBook = async (book) => {
    try {
      let response;
      if (book.id) {
        response = await api.put(`/books/update/${book.id}`, book);
        setBooks((prevBooks) => prevBooks.map((b) => (b.id === book.id ? response.data : b)));
        toast.info(`Book updated: ${book.title}`);
      } else {
        response = await api.post("/books/create", book);
        setBooks((prevBooks) => [...prevBooks, response.data]);
        toast.success(`Book added: ${book.title}`);
      }
    } catch (error) {
      console.error("Error saving book:", error);
      toast.error("Failed to save book");
    }
    closeModal();
  };

  const deleteBook = async (id) => {
    const bookToDelete = books.find((book) => book.id === id);
    if (window.confirm(`Are you sure you want to delete \"${bookToDelete?.title}\"?`)) {
      try {
        await api.delete(`/books/delete/${id}`);
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        toast.error(`Book deleted: ${bookToDelete?.title}`);
      } catch (error) {
        console.error("Error deleting book:", error);
        toast.error("Failed to delete book");
      }
    }
  };

  const filteredBooks = books.filter((book) =>
    [book.title, book.author, book.genre, book.status].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1>Books List</h1>
          <p>Showing {filteredBooks.length} books</p>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="clear-search-btn">
                Clear
              </button>
            )}
          </div>

          <button className="add-book-btn" onClick={() => openModal()}>Add New Book</button>
          <table className="books-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td><img src={book.imgUrl} alt={book.title} className="book-image" /></td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.status}</td>
                  <td>
                    <FaEdit className="action-icon edit-icon" title="Edit" onClick={() => openModal(book)} />
                    <FaTrash className="action-icon delete-icon" title="Delete" onClick={() => deleteBook(book.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <BookModal isOpen={isModalOpen} onClose={closeModal} onSave={addOrUpdateBook} bookData={currentBook} />
      <ToastContainer />
    </div>
  );
};

export default Books;
