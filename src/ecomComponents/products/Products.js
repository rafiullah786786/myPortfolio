import React, { memo, useEffect, useState } from "react";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("https://fakestoreapi.com/products", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);
  return (
    <div>
      <div className="container-fluid">
        <div className="row  mt-5">
          {products.map((item) => (
            <div className="col-sm-4 ml-5 mt-5 justify-content-center">
              <div>
                <div className={classes.containercss}>
                  <div className={classes.card}>
                    <div className={classes.imgBx}>
                      <img
                        className={classes.img}
                        src={item.image}
                        alt="product "
                      />
                    </div>
                    <div className={classes.contentBx}>
                      <p>{item.title}</p>
                      <div className={classes.size}>
                        <h3>{"Price " + item.price}</h3>
                      </div>
                      <div className={classes.color}>
                        <h3>{item.category}</h3>
                      </div>
                      <Link to={`/product/${item.id}`}>view details</Link>
                      <Link to="/">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Products);
