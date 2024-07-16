// src/DetailsPage.js
import React from "react";
import "./details.css";

function Details() {
  return (
    <div className="details-container">
      <h2>Details</h2>
      <div className="details-info">
        <div className="info-group">
          <label htmlFor="name">Name:</label>
          <p id="name">John Doe</p>
        </div>
        <div className="info-group">
          <label htmlFor="email">Email:</label>
          <p id="email">john_doe@example.com</p>
        </div>
        <div className="info-group">
          <label htmlFor="phone">Phone:</label>
          <p id="phone">(123) 456-7890</p>
        </div>
        <div className="info-group">
          <label htmlFor="address">Address:</label>
          <p id="address">123 Main St, Anytown, USA</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
