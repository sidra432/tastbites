import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(`Message Sent!\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
    reset();
  };

  return (
    <div>
      {/* Contact Info + Form */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#f5f5f5",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#ff7b00", marginBottom: "20px" }}>Our Contact Info</h2>
          <p><strong>Address:</strong> 123 TastyBite Street, Food City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@tastybite.com</p>
          <p><strong>Opening Hours:</strong> Mon-Sun: 10:00 AM - 11:00 PM</p>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: "1 1 500px",
            backgroundColor: "#f5f5f5",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#ff7b00", marginBottom: "20px" }}>Send Us a Message</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                minHeight: "120px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#ff7b00",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ marginTop: "50px", width: "100%", height: "400px" }}>
        <iframe
          title="TastyBite Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086876249729!2d-122.41941548468152!3d37.77492977975902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74b51207%3A0x7f02b1c51f6c3d44!2sRestaurant!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
