import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoUrl =
    "src/assets/project images/logo.jpg"; // 🍽️ Restaurant logo

  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logoUrl}
          alt="Restaurant Logo"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Navigation Links */}
      <nav
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          fontWeight: "600",
          fontSize: "1.1rem",
        }}
      >
        {["Home", "Menu", "About", "Contact", "Reservation"].map((page) => (
          <Link
            key={page}
            to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#ff7b00")} // hover orange
            onMouseLeave={(e) => (e.target.style.color = "#fff")}     // normal white
          >
            {page}
          </Link>
        ))}
      </nav>
    </header>
  );
};

const linkStyle = {
  color: "#fff", // default white
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default Navbar;
