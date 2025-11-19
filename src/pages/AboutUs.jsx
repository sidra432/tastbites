import React, { useState, useEffect } from "react";
import { FaUtensils, FaLeaf, FaClock, FaStar, FaSmile, FaUsers, FaAward } from "react-icons/fa";
import img1 from "../assets/project images/background2.avif";
import img2 from "../assets/project images/background 3.webp";
import img3 from "../assets/project images/restu background1.jpg";
import chefImg from "../assets/project images/chef team.jpg";

const HeroCarousel = () => {
  const images = [img1, img2, img3];
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

// ✅ Stats Section (Grey background)
const Stats = () => {
  const stats = [
    { icon: <FaSmile />, number: "500+", label: "Happy Customers" },
    { icon: <FaUtensils />, number: "200+", label: "Delicious Dishes" },
    { icon: <FaUsers />, number: "20+", label: "Expert Staff" },
    { icon: <FaAward />, number: "15+", label: "Years of Excellence" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f2f2f2",
        color: "#333",
        padding: "60px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {stats.map((item, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", color: "#ff7b00" }}>{item.icon}</div>
          <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>{item.number}</h2>
          <p style={{ fontSize: "1rem" }}>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

// ✅ Mission & Vision
const MissionVision = () => {
  return (
    <section style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#ff7b00",
          marginBottom: "40px",
          fontSize: "2rem",
        }}
      >
        Our Mission & Vision
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <div
          style={{
            flex: "1 1 400px",
            background: "#f2f2f2",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#ff7b00" }}>Our Mission</h3>
          <p style={{ color: "#444", lineHeight: "1.7" }}>
            To serve high-quality food that brings people together and celebrates the
            love for authentic flavors. We aim to create memorable dining experiences
            where every dish reflects our dedication to quality, innovation, and warmth.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 400px",
            background: "#f2f2f2",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#ff7b00" }}>Our Vision</h3>
          <p style={{ color: "#444", lineHeight: "1.7" }}>
            To be recognized as a leading restaurant brand that values people, passion,
            and perfection. We envision expanding globally while maintaining our
            commitment to fresh, flavorful, and heartwarming food experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

// ✅ Chef / Team Highlight
const ChefHighlight = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
        backgroundColor: "#eaeaea",
        gap: "40px",
      }}
    >
      <div style={{ flex: "1 1 450px" }}>
        <img
          src={chefImg}
          alt="Our Chef Team"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <div style={{ flex: "1 1 450px" }}>
        <h2
          style={{
            color: "#ff7b00",
            marginBottom: "20px",
            borderLeft: "5px solid #ff7b00",
            paddingLeft: "10px",
          }}
        >
          Meet Our Master Chefs
        </h2>
        <p style={{ color: "#333", lineHeight: "1.8" }}>
          At <strong>TastyBite</strong>, our chefs are the heart and soul of every dish.
          Trained in some of the world’s finest kitchens, our culinary experts bring a
          perfect blend of tradition and creativity to your plate. Each chef adds a
          unique signature touch, ensuring every meal is both visually stunning and
          bursting with flavor.
        </p>
        <p style={{ color: "#333", lineHeight: "1.8", marginTop: "15px" }}>
          From crafting delicate desserts to grilling the juiciest meats, our chefs
          believe cooking is an art that connects people. Their teamwork, precision, and
          love for fresh ingredients help us deliver an unforgettable dining experience
          every time you visit.
        </p>
      </div>
    </section>
  );
};

// ✅ Why Choose Us (Grey background)
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
    <section style={{ padding: "70px 20px", backgroundColor: "#f2f2f2" }}>
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
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ fontSize: "2.2rem", color: "#ff7b00", marginBottom: "15px" }}>
              {reason.icon}
            </div>
            <h3 style={{ marginBottom: "10px", color: "#333" }}>{reason.title}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem" }}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div>
      <HeroCarousel />
      <ChefHighlight />
      <MissionVision />
      <Stats />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
