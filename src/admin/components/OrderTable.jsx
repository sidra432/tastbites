import React from "react";

const OrderTable = () => {
  return (
    <div className="table-section">
      <h3>Latest Orders</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dish</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ali</td>
            <td>Biryani</td>
            <td>2</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Fatima</td>
            <td>Pizza</td>
            <td>1</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Burger</td>
            <td>3</td>
            <td>Cancelled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
