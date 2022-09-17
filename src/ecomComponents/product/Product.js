import axios from "axios";
import React from "react";
import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { pid } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pid]);
  console.log(product);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <p> {product.title}</p>
          <p> {product.price}</p>
          <p> {product.description}</p>
          <p> {product.category}</p>
          <img
            src={product.image}
            width="600px"
            height={"500px"}
            style={{ borderRadius: "30px" }}
            className="img-fluid"
            alt={product.title}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Product);
