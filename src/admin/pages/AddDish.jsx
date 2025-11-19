import React from "react";

const AddDish = () => {
  return (
    <div className="page-box">
      <h2>Add New Dish</h2>

      <form className="add-form">
        <input type="text" placeholder="Dish Name" required />
        <input type="number" placeholder="Price" required />
        <textarea placeholder="Description"></textarea>

        <button>Save Dish</button>
      </form>
    </div>
  );
};

export default AddDish;
