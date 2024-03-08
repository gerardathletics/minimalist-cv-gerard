import React, { useState } from "react";

const styles = {
  row: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "6px",
    fontSize: "0.9rem",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  button: {
    background: "transparent",
    border: "1px solid #f2f2f2",
    borderRadius: "4px",
    color: "#444",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    margin: "0 4px 4px 0",
    padding: "6px 6px",
    transition: "all 0.3s ease",
  },
  buttonActive: {
    background: "#444",
    color: "white",
  },
  ul: {
    display: "inline-flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  li: {
    borderRadius: "6px",
    background: "#eee",
    color: "black",
    fontSize: "0.8rem",
    fontWeight: "500",
    padding: "0.2rem 0.6rem",
  },
};

export default function ReactFilterButtons({ skills }) {
  const [filter, setFilter] = useState("");
  const getButtonStyle = (categoryOrLevel) => {
    return filter === categoryOrLevel
      ? { ...styles.button, ...styles.buttonActive }
      : styles.button;
  };
  return (
    <div>
      <button style={getButtonStyle("")} onClick={() => setFilter("")}>
        All
      </button>
      <div style={styles.row}>
        <span style={styles.label}>Categories</span>
        <div style={styles.buttonContainer}>
          {[...new Set(skills.map((skill) => skill.category))].map(
            (category) => (
              <button
                key={category}
                style={getButtonStyle(category)}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Levels</span>
        <div style={styles.buttonContainer}>
          {[...new Set(skills.map((skill) => skill.level))].map((level) => (
            <button
              key={level}
              style={getButtonStyle(level)}
              onClick={() => setFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      <ul style={styles.ul}>
        {skills
          .filter(
            (skill) =>
              filter === "" ||
              skill.category === filter ||
              skill.level === filter
          )
          .map(({ name }) => (
            <li key={name} style={styles.li}>
              <span>{name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
