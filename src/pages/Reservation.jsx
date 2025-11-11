import React from "react";

const Reservation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
        padding: "60px 20px",
        backgroundColor: "#f5f5f5",
        minHeight: "80vh",
        boxSizing: "border-box",
      }}
    >
      {/* Left: Form */}
      <div
        style={{
          flex: "1 1 400px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#ff7b00" }}>Reserve Your Table</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Name" style={inputStyle} required />
          <input type="email" placeholder="Email" style={inputStyle} required />
          <input type="date" style={inputStyle} required />
          <input type="time" style={inputStyle} required />
          <input type="number" placeholder="Guests" style={inputStyle} required />
          <button type="submit" style={buttonStyle}>Reserve Now</button>
        </form>
      </div>

      {/* Right: Image */}
      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <img
          src="src/assets/project images/reserved.jpg"
          alt="Restaurant Interior"
          style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#ff7b00",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Reservation;
