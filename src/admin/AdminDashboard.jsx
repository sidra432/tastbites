import React from "react";
import AdminSidebar from "./AdminSidebar";
import Chart from "./components/Chart";

import OrderTable from "./components/OrderTable";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      
      <AdminSidebar />

      <div className="admin-main">
        <h2>Dashboard Overview</h2>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="card"><h3>120</h3><p>Reservations</p></div>
          <div className="card"><h3>45</h3><p>Orders Today</p></div>
          <div className="card"><h3>32</h3><p>Dishes</p></div>
          <div className="card"><h3>500+</h3><p>Customers</p></div>
        </div>

        <Chart />
        <OrdersTable />

      </div>
    </div>
  );
};

export default AdminDashboard;
