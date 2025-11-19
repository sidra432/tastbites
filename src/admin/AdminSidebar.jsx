import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Admin</h2>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/menu">Manage Menu</Link></li>
        <li><Link to="/admin/add-dish">Add Dish</Link></li>
        <li><Link to="/admin/login">Logout</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
