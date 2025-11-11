import React, { useState, useEffect } from "react";
import { FaUtensils, FaLeaf, FaClock, FaStar } from "react-icons/fa";

// ✅ Hero Carousel (interior design)
const HeroCarousel = () => {
  const images = [
    "src/assets/project images/resturant inside design1.jpg",
    "src/assets/project images/resturant chef.jpg",
    "src/assets/project images/resturant inside design1.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "75vh",
        overflow: "hidden",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: current === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>
      ))}

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          background: "rgba(0,0,0,0.5)",
          padding: "30px 50px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0", color: "#ff7b00" }}>
          About TastyBite
        </h1>
        <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
          Discover our story, passion, and love for food.
        </p>
      </div>
    </div>
  );
};

// ✅ Why Choose Us section
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUtensils />,
      title: "Delicious Food",
      description: "Freshly prepared dishes with authentic taste.",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description: "We use only high-quality and organic ingredients.",
    },
    {
      icon: <FaClock />,
      title: "Quick Service",
      description: "Enjoy fast, friendly service for every order.",
    },
    {
      icon: <FaStar />,
      title: "Top Ratings",
      description: "Highly rated by our beloved customers.",
    },
  ];

  return (
    <section style={{ padding: "70px 20px", backgroundColor: "#f5f5f5" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#ff7b00",
          marginBottom: "40px",
          fontSize: "2rem",
        }}
      >
        Why Choose Us
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {reasons.map((reason, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 250px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ fontSize: "2.2rem", color: "#ff7b00", marginBottom: "15px" }}>
              {reason.icon}
            </div>
            <h3 style={{ marginBottom: "10px" }}>{reason.title}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem" }}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Main About Us Page
const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Our Story Section */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "80px 60px",
          gap: "50px",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 500px", paddingLeft: "30px" }}>
          <h2
            style={{
              color: "#ff7b00",
              marginBottom: "25px",
              fontSize: "2rem",
              borderLeft: "5px solid #ff7b00",
              paddingLeft: "10px",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              lineHeight: "1.8",
              color: "#333",
              fontSize: "1rem",
              textAlign: "justify",
              paddingRight: "15px",
            }}
          >
            Welcome to <strong>TastyBite</strong> — where passion meets flavor!  
            What began as a small family dream has grown into a culinary destination
            known for its taste, ambiance, and hospitality.  
            Our chefs craft every meal with love, using locally sourced ingredients
            and time-honored recipes.  
            From cozy breakfasts to elegant dinners, every bite tells a story of
            dedication and creativity.  
            We blend tradition with innovation to create unforgettable flavors.  
            Our team of skilled professionals ensures every guest feels at home.  
            At TastyBite, food isn’t just nourishment — it’s an experience.  
            Join us and savor the harmony of taste, aroma, and joy.  
            We’re proud to be more than a restaurant — we’re your dining family.  
            Come celebrate your moments with us — one delicious meal at a time!
          </p>
        </div>

        {/* Image */}
        <div style={{ flex: "1 1 500px", paddingRight: "30px" }}>
          <img
            src="src/assets/project images/chef team.jpg"
            alt="Restaurant Team"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
