import React, { useState } from "react";

const Reservation = () => {
  const [reserved, setReserved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "60px 20px",
        backgroundColor: "#f5f5f5",
        minHeight: "80vh",
        boxSizing: "border-box",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Left: Form or Thank You Message */}
      <div
        style={{
          flex: "1 1 400px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          minHeight: "400px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!reserved ? (
          <>
            <h2 style={{ color: "#ff7b00", marginBottom: "20px" }}>
              Reserve Your Table
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                textAlign: "left",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="number"
                name="guests"
                placeholder="Guests"
                value={formData.guests}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <button type="submit" style={buttonStyle}>
                Reserve Now
              </button>
            </form>
          </>
        ) : (
          <div
            style={{
              color: "#333",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              padding: "20px",
              opacity: reserved ? 1 : 0,
              transform: reserved ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease, transform 0.8s ease",
            }}
          >
            <h2 style={{ color: "#ff7b00", fontSize: "1.8rem" }}>🎉 Thank You!</h2>
            <p>
              Your table has been successfully reserved for{" "}
              <strong>{formData.guests}</strong> guest(s) on{" "}
              <strong>{formData.date}</strong> at{" "}
              <strong>{formData.time}</strong>.
            </p>
            <p>We’ve sent a confirmation email to {formData.email}.</p>

            <button
              onClick={() => setReserved(false)}
              style={{
                marginTop: "20px",
                backgroundColor: "#ff7b00",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background 0.3s ease",
              }}
            >
              Make Another Reservation
            </button>
          </div>
        )}
      </div>

      {/* Right: Image */}
      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <img
          src="src/assets/project images/reserved.jpg"
          alt="Restaurant Interior"
          style={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
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
  fontSize: "15px",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#ff7b00",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background 0.3s ease",
};

export default Reservation;
