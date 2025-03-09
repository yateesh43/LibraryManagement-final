import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api"; // Import API call function
import "../assets/Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await registerUser(formData);
      setSuccess(response.data); // API returns a success message
      setTimeout(() => navigate("/login"), 2000); // Redirect after success
    } catch (err) {
      setError(err.response?.data || "Registration failed. Try again.");
    }
  };

  return (
    <div id="container">
      <img src="https://packetprep.com/images/login_graphics/one.png" alt="Register Icon" />
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="tb" placeholder="Enter your email"
            value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="tb" placeholder="Enter your username"
            value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="tb" placeholder="Enter your password"
            value={formData.password} onChange={handleChange} required />
        </div>
        <button id="register-btn" type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
        {error && <div id="error-message">{error}</div>}
        {success && <div id="success-message">{success}</div>}
      </form>
    </div>
  );
};

export default Register;
