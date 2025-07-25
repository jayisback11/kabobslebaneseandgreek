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

      {/* Appetizers */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Appetizers</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Meat Head Eggroll</span>
            <span style={priceStyle}>$12.00</span>
          </li>
          <li style={itemStyle}>
            <span>Garlic Knots</span>
            <span style={priceStyle}>$11.00</span>
          </li>
          <li style={itemStyle}>
            <span>Meatballs Marinara</span>
            <span style={priceStyle}>$12.00</span>
          </li>
          <li style={itemStyle}>
            <span>Fried Ravioli</span>
            <span style={priceStyle}>$11.00</span>
          </li>
          <li style={itemStyle}>
            <span>Fried Mozzarella</span>
            <span style={priceStyle}>$11.00</span>
          </li>
          <li style={itemStyle}>
            <span>Focaccia Bread</span>
            <span style={priceStyle}>$12.00</span>
          </li>
        </ul>
      </div>

      {/* Salads */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Salads</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>The Bistro Salad (S 6 / L 12)</span>
            <span style={priceStyle}></span>
          </li>
          <li style={itemStyle}>
            <span>Sensation Salad</span>
            <span style={priceStyle}>$11.00</span>
          </li>
          <li style={itemStyle}>
            <span>Bistro Wedge Salad</span>
            <span style={priceStyle}>$13.00</span>
          </li>
          <li style={itemStyle}>
            <span>Caesar Salad (S 6 / L 12)</span>
            <span style={priceStyle}></span>
          </li>
          <li style={itemStyle}>
            <span>House Italian (S 6 / L 12)</span>
            <span style={priceStyle}></span>
          </li>
          <li style={itemStyle}>
            <span>Blue Cheese Wedge Salad</span>
            <span style={priceStyle}>$13.00</span>
          </li>
          <li style={itemStyle}>
            <span>Caprese Salad</span>
            <span style={priceStyle}>$11.00</span>
          </li>
        </ul>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Add Grilled Chicken + Garlic Bread</span>
            <span style={priceStyle}>$6.00</span>
          </li>
          <li style={itemStyle}>
            <span>Add Shrimp + Garlic Bread</span>
            <span style={priceStyle}>$7.00</span>
          </li>
        </ul>
      </div>

      {/* Soup */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Soup</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Homemade Tomato Basil (Cup / Bowl)</span>
            <span style={priceStyle}>$5.00 / $7.00</span>
          </li>
        </ul>
      </div>

      {/* Pasta */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Pasta</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Chicken Parmesan</span>
            <span style={priceStyle}>$19.00</span>
          </li>
          <li style={itemStyle}>
            <span>Eggplant Parmesan</span>
            <span style={priceStyle}>$17.00</span>
          </li>
          <li style={itemStyle}>
            <span>Spaghetti & Meatballs</span>
            <span style={priceStyle}>$17.00</span>
          </li>
          <li style={itemStyle}>
            <span>Eggplant Meatball Rotatini</span>
            <span style={priceStyle}>$19.00</span>
          </li>
          <li style={itemStyle}>
            <span>Classic Lasagna</span>
            <span style={priceStyle}>$19.00</span>
          </li>
          <li style={itemStyle}>
            <span>Spinach & Artichoke Baked Ziti</span>
            <span style={priceStyle}>$17.00</span>
          </li>
          <li style={itemStyle}>
            <span>Ravioli & Meatballs</span>
            <span style={priceStyle}>$17.00</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Alfredo</span>
            <span style={priceStyle}>$17.00</span>
          </li>
          <li style={itemStyle}>
            <span>Pesto Chicken Penne</span>
            <span style={priceStyle}>$19.00</span>
          </li>
          <li style={itemStyle}>
            <span>Shrimp Primavera</span>
            <span style={priceStyle}>$19.00</span>
          </li>
          <li style={itemStyle}>
            <span>Shrimp Florentine Ravioli</span>
            <span style={priceStyle}>$19.00</span>
          </li>
          <li style={itemStyle}>
            <span>Shrimp Alfredo</span>
            <span style={priceStyle}>$18.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
