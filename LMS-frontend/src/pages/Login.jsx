import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api"; // Import the API call function
import "../assets/Login.css";

const Login = () => {
  const [username, setUsername] = useState(""); // Changed to username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      
  
      const { token, role } = response.data;
  
      if (!role) {
        setError("Role is missing in API response.");
        return;
      }
  
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
  
      if (role === "ROLE_ADMIN") { // ✅ Updated check
        navigate("/admin/dashboard");
      } else if (role === "ROLE_USER") { // ✅ Updated check
        navigate("/user/home");
      } else {
        setError(`Unauthorized role: ${role}`);
      }
    } catch (err) {
      setError("Invalid username or password.");
    }
  };
  

  return (
    <div id="container">
      <img src="https://packetprep.com/images/login_graphics/one.png" alt="Login Icon" />
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="tb" placeholder="Enter your username"
            value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="tb" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button id="login-btn" type="submit">Login</button>
        <p>Don't have an account? <a href="/register" id="reg">Register now</a></p>
        {error && <div id="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
