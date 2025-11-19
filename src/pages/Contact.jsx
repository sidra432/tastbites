import React, { useState } from "react";

const Contact = () => {
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedItems, setSelectedItems] = useState([{ dish: "", quantity: 1 }]);
  const [bill, setBill] = useState(null);
  const [thankYou, setThankYou] = useState(false); // new state for thank-you message

  const menuItems = {
    "Chicken Biryani": 1200,
    "Beef Burger": 950,
    "Pasta Alfredo": 1100,
    "Chocolate Cake": 600,
    "Pizza": 1500,
    "Grilled Sandwich": 700,
    "Mutton Karahi": 1800,
    "Zinger Burger": 850,
    "Fried Rice": 950,
    "Club Sandwich": 650,
    "French Fries": 400,
    "Cold Coffee": 450,
    "Strawberry Shake": 500,
    "Tandoori Chicken": 1700,
    "Cheese Naan": 250,
  };

  const handleDishChange = (index, field, value) => {
    const updated = [...selectedItems];
    updated[index][field] = field === "quantity" ? parseInt(value) : value;
    setSelectedItems(updated);
  };

  const addDish = () => {
    setSelectedItems([...selectedItems, { dish: "", quantity: 1 }]);
  };

  const removeDish = (index) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const calculateBill = (e) => {
    e.preventDefault();

    let total = 0;
    const items = selectedItems.map((item) => {
      const price = menuItems[item.dish] || 0;
      const itemTotal = price * item.quantity;
      total += itemTotal;
      return { ...item, price, itemTotal };
    });

    setBill({
      ...order,
      items,
      total,
      date: new Date().toLocaleString(),
      orderId: Math.floor(100000 + Math.random() * 900000),
    });

    setThankYou(true); // show thank-you message
  };

  const printChallan = () => window.print();

  return (
    <div
      style={{
        padding: "50px 20px",
        maxWidth: "750px",
        margin: "0 auto",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff7b00", textAlign: "center", marginBottom: "30px" }}>
        Contact & Order Form
      </h1>

      <form
        onSubmit={calculateBill}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          required
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
          style={{ width: "100%", margin: "8px 0 15px", padding: "8px" }}
        />

        <label>Email:</label>
        <input
          type="email"
          required
          value={order.email}
          onChange={(e) => setOrder({ ...order, email: e.target.value })}
          style={{ width: "100%", margin: "8px 0 15px", padding: "8px" }}
        />

        <label>Phone:</label>
        <input
          type="tel"
          required
          value={order.phone}
          onChange={(e) => setOrder({ ...order, phone: e.target.value })}
          style={{ width: "100%", margin: "8px 0 15px", padding: "8px" }}
        />

        <label>Message:</label>
        <textarea
          rows="3"
          value={order.message}
          onChange={(e) => setOrder({ ...order, message: e.target.value })}
          placeholder="Your message or special instructions..."
          style={{ width: "100%", margin: "8px 0 20px", padding: "8px" }}
        />

        <h3 style={{ color: "#ff7b00" }}>Order Details</h3>

        {selectedItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <label>Dish:</label>
            <select
              value={item.dish}
              required
              onChange={(e) => handleDishChange(index, "dish", e.target.value)}
              style={{ width: "100%", margin: "8px 0", padding: "8px" }}
            >
              <option value="">Select Dish</option>
              {Object.keys(menuItems).map((dish) => (
                <option key={dish} value={dish}>
                  {dish} - Rs. {menuItems[dish]}
                </option>
              ))}
            </select>

            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleDishChange(index, "quantity", e.target.value)}
              style={{ width: "100%", margin: "8px 0", padding: "8px" }}
            />

            {selectedItems.length > 1 && (
              <button
                type="button"
                onClick={() => removeDish(index)}
                style={{
                  background: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addDish}
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          + Add Another Dish
        </button>

        <button
          type="submit"
          style={{
            background: "#ff7b00",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate Bill
        </button>
      </form>

      {/* ✅ Thank You Message */}
      {thankYou && (
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            background: "#d4edda",
            color: "#155724",
            borderRadius: "8px",
            textAlign: "center",
            border: "1px solid #c3e6cb",
            fontWeight: "500",
          }}
        >
          🎉 Thank you for your order! Your delicious meal is being prepared. 🍽️
        </div>
      )}

      {bill && (
        <div
          style={{
            background: "#f8f8f8",
            marginTop: "40px",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#ff7b00", textAlign: "center" }}>TastyBite Restaurant</h2>
          <p style={{ textAlign: "center", color: "#555" }}>Order Challan</p>
          <hr />

          <p><strong>Order ID:</strong> {bill.orderId}</p>
          <p><strong>Date:</strong> {bill.date}</p>
          <p><strong>Name:</strong> {bill.name}</p>
          <p><strong>Email:</strong> {bill.email}</p>
          <p><strong>Phone:</strong> {bill.phone}</p>

          <h3 style={{ color: "#ff7b00" }}>Ordered Items:</h3>
          <ul>
            {bill.items.map((item, i) => (
              <li key={i}>
                {item.dish} ({item.quantity} × Rs.{item.price}) = Rs.{item.itemTotal}
              </li>
            ))}
          </ul>

          <h3 style={{ color: "#ff7b00" }}>Total Bill: Rs. {bill.total}</h3>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={printChallan}
              style={{
                background: "#555",
                color: "#fff",
                padding: "8px 15px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Print Challan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
