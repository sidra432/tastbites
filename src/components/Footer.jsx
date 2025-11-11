import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        color: "#fff",
        padding: "15px 40px",
        fontSize: "0.9rem",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Social Icons on Left */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1877F2", fontSize: "1.5rem" }}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#C13584", fontSize: "1.5rem" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", fontSize: "1.5rem" }}
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright in Center */}
      <div style={{ textAlign: "center", flex: 1, fontWeight: "bold" }}>
        &copy; {new Date().getFullYear()} TastyBite. All rights reserved.
      </div>

      {/* Placeholder div to balance right side */}
      <div style={{ width: "90px" }}></div>
    </footer>
  );
};

export default Footer;
