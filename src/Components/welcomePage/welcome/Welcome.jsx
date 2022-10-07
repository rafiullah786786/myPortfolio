import React from "react";
import Login from "../login/Login";
import Rotate from "../rotate/Rotate";

function Welcome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6" style={{ "background-color": "#f5f5f5" }}>
          <Login />
        </div>
        <div className="col-md-6">
          <Rotate />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
