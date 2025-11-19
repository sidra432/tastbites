import React from "react";
import "./admin.css";

const AdminLogin = () => {
  return (
    <div className="login-container">
      <h2>Admin Login</h2>

      <form>
        <input type="text" placeholder="Admin Username" required />
        <input type="password" placeholder="Password" required />

        <button>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
