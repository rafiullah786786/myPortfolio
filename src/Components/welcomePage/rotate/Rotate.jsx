import React from "react";
import classes from "./Rotate.module.css";
import shape from "../../../img/shape.PNG";

function Rotate() {
  return (
    <div className={classes.rightShape}>
      <img
        className="mx-auto d-block "
        style={{ "margin-top": "126px" }}
        src={shape}
        alt=""
      />
      <div className={classes.title}>360° Solution for Asset Management</div>

      <div className={classes.disc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );
}

export default Rotate;
