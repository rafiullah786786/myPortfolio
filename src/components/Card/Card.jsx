import React from "react";
import classes from "./Card.module.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className={classes.card} style={{ borderColor: { color } }}>
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
