import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { singleProduct, fetchSingleProduct } = useContext(ProductsContext);

  useEffect(() => {
    fetchSingleProduct(`/api/products/${id}`);
  }, [id]);
  console.log(singleProduct);

  return (
    <div>
      <h1>g</h1>
    </div>
  );
};

export default SingleProduct;
