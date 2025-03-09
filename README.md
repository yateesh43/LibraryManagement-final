# Library Management System

## Overview
The **Library Management System** is a full-stack web application designed to manage library resources efficiently. It includes features for user authentication, book management, cart functionality, and an admin dashboard for managing library operations.

This project consists of:
- **Backend:** Spring Boot (JWT-based authentication, MySQL database, REST APIs)
- **Frontend:** React (Vite, CSS, API integration)

## Features
### User Features
- User registration and login (JWT authentication)
- View available books and search by category
- Add books to the cart
- Checkout process
- View borrowing history

### Admin Features
- Manage books (Add, Update, Delete)
- View user activity
- Generate reports on book borrowings and user statistics
- Role-based access control (Admin/User)

## Tech Stack
### Backend (Spring Boot)
- **Spring Boot 3** - Backend framework
- **Spring Security & JWT** - Authentication and authorization
- **MySQL** - Database for storing user and book details
- **Spring Data JPA** - ORM for database interactions
- **Maven** - Dependency management

### Frontend (React + Vite)
- **React.js** - Frontend library
- **Vite** - Build tool for fast development
- **CSS** - UI styling
- **Axios** - API calls
- **React Router** - Client-side navigation

## Installation Guide
### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yateesh43/LibraryManagement-final.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd libraryManagement-backend
   ```
3. Configure the `application.properties` file with MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/library_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
4. Build and run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Clone the frontend repository:
   ```sh
   git clone https://github.com/yateesh43/libraryManagement-frontend.git
   ```
2. Navigate to the frontend directory:
   ```sh
   cd libraryManagement-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the React application:
   ```sh
   npm run dev
   ```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate and get JWT token

### Books
- `GET /api/books` - Fetch all books
- `POST /api/books` - Add a new book (Admin only)
- `PUT /api/books/{id}` - Update book details (Admin only)
- `DELETE /api/books/{id}` - Remove a book (Admin only)

### Cart
- `POST /api/cart` - Add book to cart
- `GET /api/cart` - View cart items
- `DELETE /api/cart/{id}` - Remove book from cart

## Future Enhancements
- Implement book return system
- Add user profile management
- Enhance the reporting dashboard

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit changes and push.
4. Create a Pull Request.

## License
This project is open-source under the MIT License.

## Contact
For any queries, contact **Vuppala Yateesh** at vuppalayateesh@gmail.com.

