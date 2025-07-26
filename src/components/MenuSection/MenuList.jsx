import React from "react";
import data from "../../data.json";

const MenuList = () => {
  const sectionStyle = {
    marginBottom: "40px",
  };
  const headerStyle = {
    backgroundColor: data.theme.color,
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
  };
  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
  };
  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 0",
    borderBottom: "1px solid #ccc",
  };
  const priceStyle = {
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: 1.6,
        background: "#f8f8f8",
        color: "#333",
      }}
    >
      <h1 style={{ color: data.theme.color }}>
        {data.welcome.businessname} Menu
      </h1>

      {/* Signature Smoothies */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Signature Smoothies</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Daisy Duke (Strawberry, Watermelon, Pomegranate)</span>
            <span style={priceStyle}>$12.00</span>
          </li>
          <li style={itemStyle}>
            <span>L A Sunrise (Strawberry, Orange, Pineapple)</span>
            <span style={priceStyle}>$9.00</span>
          </li>
          <li style={itemStyle}>
            <span>Peach on the Beach (Peach, Mango, Pina Colada)</span>
            <span style={priceStyle}>$12.00</span>
          </li>
          <li style={itemStyle}>
            <span>Berry Blitz (Blueberry, Raspberry, Vanilla)</span>
            <span style={priceStyle}>$10.00</span>
          </li>
        </ul>
      </div>

      {/* Loaded Teas */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Loaded Teas</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Tropical Thunder (Passion Fruit, Pineapple, Green Tea)</span>
            <span style={priceStyle}>$9.00</span>
          </li>
          <li style={itemStyle}>
            <span>Galaxy Pop (Cherry, Blue Raspberry, Aloe)</span>
            <span style={priceStyle}>$9.00</span>
          </li>
          <li style={itemStyle}>
            <span>Island Energy (Peach, Guava, Herbal Tea Base)</span>
            <span style={priceStyle}>$9.00</span>
          </li>
        </ul>
      </div>

      {/* Protein Coffee */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Protein Coffee</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Mocha Power (Mocha, Protein Blend, Iced Coffee)</span>
            <span style={priceStyle}>$8.00</span>
          </li>
          <li style={itemStyle}>
            <span>Vanilla Wake-Up (Vanilla, Almond Milk, 15g Protein)</span>
            <span style={priceStyle}>$8.00</span>
          </li>
        </ul>
      </div>

      {/* Feel Better Shots */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Feel Better Shots</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Immune Boost Shot (Vitamin C, Zinc, Elderberry)</span>
            <span style={priceStyle}>$5.00</span>
          </li>
          <li style={itemStyle}>
            <span>Focus Shot (L-Theanine, B12, Green Tea Extract)</span>
            <span style={priceStyle}>$5.00</span>
          </li>
        </ul>
      </div>

      {/* Protein Snacks */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Protein Snacks</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Chocolate Peanut Butter Bar</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Almond Crunch Energy Bites (3‑pack)</span>
            <span style={priceStyle}>$3.50</span>
          </li>
        </ul>
      </div>

      {/* Add-Ons & Boosters */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Add-Ons & Boosters</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Add Collagen</span>
            <span style={priceStyle}>$1.00</span>
          </li>
          <li style={itemStyle}>
            <span>Add Extra Protein</span>
            <span style={priceStyle}>$1.50</span>
          </li>
          <li style={itemStyle}>
            <span>Add Fiber Blend</span>
            <span style={priceStyle}>$1.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
