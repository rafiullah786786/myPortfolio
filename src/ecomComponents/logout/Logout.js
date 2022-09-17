import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      localStorage.removeItem("token");
      props.propsdata(false);
      console.log("token has been removed ");
      navigate("/home");
    }
  }, [navigate]);
  return <div></div>;
}

export default Logout;
