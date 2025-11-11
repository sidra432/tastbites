import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuData = [
    {
      category: "Starters",
      items: [
        { name: "Chicken Wings", price: 650, img: "src/assets/project images/chicken wings.jpg" },
        { name: "Garlic Bread", price: 450, img: "src/assets/project images/garlic bread.jpg" },
        { name: "Mozzarella Sticks", price: 500, img: "src/assets/project images/mozrella sticks.jpg" },
        { name: "Caesar Salad", price: 550, img: "src/assets/project images/ceaser salad.jpg" },
      ],
    },
    {
      category: "Chinese",
      items: [
        { name: "Chicken Chow Mein", price: 950, img: "src/assets/project images/chicken chow mein.jpg" },
        { name: "Beef Fried Rice", price: 900, img: "src/assets/project images/beef fried rice.jpg" },
        { name: "Sweet & Sour Chicken", price: 1000, img: "src/assets/project images/sweet and sour chieken.jpg" },
        { name: "Kung Pao Prawns", price: 1200, img: "src/assets/project images/kang pao prawns.jpg" },
      ],
    },
    {
      category: "Desi",
      items: [
        { name: "Chicken Karahi", price: 1100, img: "src/assets/project images/chicken karaho.jpg" },
        { name: "Mutton Biryani", price: 950, img: "src/assets/project images/mutton biryani.jpg" },
        { name: "Seekh Kebab", price: 800, img: "src/assets/project images/seekh kababa.jpg" },
        { name: "Daal Tadka", price: 600, img: "src/assets/project images/daall.jpg" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", price: 600, img: "src/assets/project images/chocolate lava cake.jpg" },
        { name: "Cheesecake", price: 650, img: "src/assets/project images/cheese cake.jpg" },
        { name: "Gulab Jamun", price: 350, img: "src/assets/project images/gulab ajaman.jpg" },
        { name: "Ice Cream Sundae", price: 450, img: "src/assets/project images/ice cream sun.jpg" },
      ],
    },
    {
     category: "Pizza",
    items: [
      { name: "Margherita Pizza", price: "Rs. 950", img: "src/assets/project images/margerita pizza.jpg" },
      { name: "Pepperoni Pizza", price: "Rs. 1100", img: "src/assets/project images/peprco pizza.jpg" },
      { name: "BBQ Chicken Pizza", price: "Rs. 1200", img: "src/assets/project images/bbq c pizza.jpg" },
      { name: "Veggie Pizza", price: "Rs. 900", img: "src/assets/project images/vegan piozza.jpg" },
    ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Fresh Lime Soda", price: 250, img: "src/assets/project images/fresh lime soda.jpg" },
        { name: "Mango Shake", price: 400, img: "src/assets/project images/mango shake.jpg" },
        { name: "Cold Coffee", price: 450, img: "src/assets/project images/cold coffe.jpg" },
        { name: "Mint Lemonade", price: 300, img: "src/assets/project images/mint lemonda.jpg" },
        { name: "Lemonade", price: 250, img: "src/assets/project images/lemonda.jpg" },
        { name: "Orange Juice", price: 300, img: "src/assets/project images/orajge juice.jpg" },
         { name: "Strawbery Shake", price: 200, img: "src/assets/project images/strabery shake.jpg" },
        { name: "Chocolate Shake", price: 200, img: "src/assets/project images/choolte milk shake.jpg" },
          
      ],
    },
   
  ];

  return (
    <div
  className="menu-page"
  style={{
    padding: "60px 20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  }}
>
  <style>
    {`
      /* --- Animations --- */
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-40px); }
        to { opacity: 1; transform: translateX(0); }
      }

      /* --- Title (Our Menu) --- */
      .menu-title {
        position: relative;
        display: inline-block;
        color: #333;
        font-size: 2.8rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 50px;
        transition: color 0.4s ease;
        animation: fadeInLeft 1s ease;
      }

      .menu-title::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 0;
        height: 4px;
        background-color: #ff7b00;
        transition: width 0.4s ease;
      }

      .menu-title:hover {
        color: #ff7b00;
      }

      .menu-title:hover::after {
        width: 100%;
      }

      /* --- Category Titles --- */
      .category-title {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 600;
        color: #555;
        position: relative;
        display: inline-block;
        transition: color 0.3s ease;
        margin-bottom: 35px;
      }

      .category-title::after {
        content: "";
        position: absolute;
        width: 0;
        height: 3px;
        left: 0;
        bottom: -6px;
        background-color: #ff7b00;
        transition: width 0.4s ease;
      }

      .category-title:hover {
        color: #ff7b00;
      }

      .category-title:hover::after {
        width: 100%;
      }

      /* --- Menu Cards --- */
      .menu-card {
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        text-align: center;
        transition: all 0.4s ease;
        animation: fadeInUp 1s ease forwards;
        border: 2px solid transparent;
      }

      .menu-card:hover {
        transform: translateY(-10px);
        border-color: #ff7b00;
        box-shadow: 0 10px 25px rgba(255,123,0,0.3);
      }

      .menu-card img {
        transition: transform 0.4s ease;
      }

      .menu-card:hover img {
        transform: scale(1.05);
      }

      .order-btn {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 20px;
        background-color: #ff7b00;
        color: #fff;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .order-btn:hover {
        background-color: #333;
        transform: scale(1.05);
      }
    `}
  </style>

  {/* Main Title */}
  <div style={{ textAlign: "center" }}>
    <h1 className="menu-title">Our Menu</h1>
  </div>

  {menuData.map((section, i) => (
    <div key={i} style={{ marginBottom: "70px" }}>
      <div style={{ textAlign: "center" }}>
        <h2 className="category-title">{section.category}</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {section.items.map((item, index) => (
          <div key={index} className="menu-card">
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px", color: "#555" }}>
                {item.name}
              </h3>
              <p style={{ color: "#ff7b00", fontWeight: "bold" }}>
                Rs. {item.price} PKR
              </p>
              <Link to="/reservation" className="order-btn">
                Order Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


  );
};

export default Menu;
