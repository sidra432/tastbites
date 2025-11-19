import React from "react";
import { Link } from "react-router-dom"; // ✅ Important
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#2e2e2e",
      color: "#fff",
      padding: "50px 20px 20px",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    heading: { color: "#ff7b00" },
    text: { color: "#ccc", lineHeight: "1.6" },
    links: { listStyle: "none", padding: 0 },
    link: {
      textDecoration: "none",
      color: "#ccc",
      display: "block",
      margin: "8px 0",
      transition: "color 0.3s ease",
    },
    contactLink: { color: "#ff7b00", textDecoration: "none" },
    socialIcon: {
      marginRight: "12px",
      fontSize: "22px",
      color: "#ccc",
      transition: "color 0.3s ease, transform 0.2s ease",
      cursor: "pointer",
    },
    bottom: {
      textAlign: "center",
      borderTop: "1px solid #444",
      marginTop: "30px",
      paddingTop: "15px",
      color: "#aaa",
      fontSize: "14px",
    },
  };

  const hoverColor = "#ff7b00";

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About */}
        <div>
          <h2 style={styles.heading}>TastyBite</h2>
          <p style={styles.text}>
            Delicious meals made with love and fresh ingredients. Taste the
            happiness with every bite!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.links}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/menu" style={styles.link}>Menu</Link></li>
            <li><Link to="/about" style={styles.link}>About Us</Link></li>
            <li><Link to="/reservation" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={styles.heading}>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@tastybite.com" style={styles.contactLink}>
              info@tastybite.com
            </a>
          </p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Lahore, Pakistan</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 style={styles.heading}>Follow Us</h3>
          <div>
            <FaFacebook
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.color = hoverColor)}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            />
            <FaInstagram
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.color = hoverColor)}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            />
            <FaTwitter
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.color = hoverColor)}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            />
            <FaYoutube
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.color = hoverColor)}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.bottom}>
        <p>© 2025 TastyBite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
