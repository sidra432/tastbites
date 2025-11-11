import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const featuredDishes = [
    {
      name: "Chicken Biryani",
      img: "src/assets/project images/chicken biryani.jpg",
      price: 1200,
    },
    {
      name: "Beef Burger",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
      price: 950,
    },
    {
      name: "Pasta Alfredo",
      img: "src/assets/project images/pasta aldferdo.jpg",
      price: 1100,
    },
    {
      name: "Chocolate Cake",
      img: "src/assets/project images/chocolate cake.jpg",
      price: 600,
    },
  ];

  const reviews = [
    {
      name: "Ayesha Khan",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Best food in town! Love the ambiance and quick service.",
    },
    {
      name: "Ali Raza",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The taste was amazing, and online delivery was super fast.",
    },
    {
      name: "Sana Malik",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Highly recommend their desserts and coffee!",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80')",
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "50px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h1 style={{ color: "#ff7b00", fontSize: "4rem", fontWeight: "bold" }}>
            Welcome to TastyBite
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            Delicious meals, cozy atmosphere, and fast online delivery!
          </p>
          <div style={{ marginTop: "20px" }}>
            <Link
              to="/menu"
              className="btn"
              style={{
                backgroundColor: "#ff7b00",
                color: "#fff",
                padding: "10px 20px",
                marginRight: "10px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              View Menu
            </Link>
            <Link
              to="/reservation"
              className="btn"
              style={{
                backgroundColor: "#555",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Reserve Table
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured-dishes" style={{ padding: "80px 20px", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", color: "#ff7b00", marginBottom: "50px", fontSize: "2.5rem" }}>
          Featured Dishes
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {featuredDishes.map((dish, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.3s",
              }}
              className="dish-card"
            >
              <img src={dish.img} alt={dish.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3 style={{ marginBottom: "10px", color: "#555" }}>{dish.name}</h3>
                <p style={{ color: "#ff7b00", fontWeight: "bold" }}>Rs. {dish.price} PKR</p>
                <Link
                  to="/reservation"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "8px 20px",
                    backgroundColor: "#ff7b00",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
    {/* Reviews Section */}
{/* Reviews Section */}
{/* Reviews Section */}
<section
  className="reviews"
  style={{ padding: "80px 0", backgroundColor: "#fff", textAlign: "center" }}
>
  <h2
    style={{
      color: "#ff7b00",
      marginBottom: "50px",
      fontSize: "2.5rem",
      fontWeight: "bold",
    }}
  >
    Customer Reviews
  </h2>

  <div style={{ maxWidth: "100%", overflow: "hidden" }}>
    <Slider
      dots={false}
      arrows={false}
      infinite={true}
      autoplay={true}
      autoplaySpeed={0}
      speed={9000}
      cssEase="linear"
      slidesToShow={3}
      slidesToScroll={1}
      centerMode={true}         // 🟢 centers and adds space
      centerPadding="15px"      // 🟢 small visible gap
      pauseOnHover={true}
      rtl={false}               // left ➜ right
      responsive={[
        { breakpoint: 992, settings: { slidesToShow: 2, centerPadding: "10px" } },
        { breakpoint: 600, settings: { slidesToShow: 1, centerPadding: "0px" } },
      ]}
    >
      {[
        {
          name: "Ayesha Khan",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          text: "Best food in town! Love the ambiance and quick service.",
        },
        {
          name: "Ali Raza",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          text: "The taste was amazing, and online delivery was super fast.",
        },
        {
          name: "Sana Malik",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
          text: "Highly recommend their desserts and coffee!",
        },
        {
          name: "Hassan Raza",
          img: "https://randomuser.me/api/portraits/men/45.jpg",
          text: "Wonderful experience, excellent staff, and tasty food!",
        },
        {
          name: "Fatima Noor",
          img: "https://randomuser.me/api/portraits/women/50.jpg",
          text: "Great ambiance and amazing dishes. My family loved it!",
        },
        {
          name: "Bilal Ahmed",
          img: "https://randomuser.me/api/portraits/men/56.jpg",
          text: "The desserts are just incredible, and the staff is super friendly!",
        },
      ].map((review, index) => (
        <div key={index} style={{ padding: "0 10px" }}> {/* 🟢 small horizontal gap */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "15px",
              border: "1px solid #ccc",
              textAlign: "center",
              padding: "25px 15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              height: "100%",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={review.img}
              alt={review.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #ff7b00",
                margin: "0 auto 15px",
                display: "block",
              }}
            />
            <p
              style={{
                fontStyle: "italic",
                color: "#555",
                marginBottom: "10px",
                minHeight: "80px",
              }}
            >
              "{review.text}"
            </p>
            <h4 style={{ marginTop: "5px", color: "#ff7b00" }}>{review.name}</h4>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>




    </div>
  );
};

export default Home;
