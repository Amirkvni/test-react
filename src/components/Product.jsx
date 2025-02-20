import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  let productID = useParams().productID;
  console.log(productID);

  return <div>Product</div>;
}

export default Product;
