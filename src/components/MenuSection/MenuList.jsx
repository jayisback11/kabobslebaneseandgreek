import React from "react";
import data from "../../data.json";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const buttonStyle = {
    backgroundColor: data.theme.color,
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "bold",
    marginBottom: 10,
  };

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px", // optional spacing
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
      <h1 style={{ color: data.theme.color, textAlign: "center" }}>
        {data.welcome.businessname} Menu
      </h1>

      {data.menu.menufilelink && (
        <div style={centerStyle}>
          <a href="/menu.pdf" download style={buttonStyle}>
            <FontAwesomeIcon
              icon={faDownload}
              size="lg"
              style={{ marginRight: 5 }}
            />
            Download Menu
          </a>
        </div>
      )}

      {Object.entries(data.menu.sections).map(([section, items]) => (
        <div style={sectionStyle} key={section}>
          <h2 style={headerStyle}>{section}</h2>
          <ul style={listStyle}>
            {items.map((item, idx) => (
              <li style={itemStyle} key={idx}>
                <span>{item.name}</span>
                <span style={priceStyle}>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
