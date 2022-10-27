import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

function SingleProduct() {
  const { productCategory } = useParams();
  // const [products, setProducts] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //         if(json){
  //           setProducts(json);
  //           setLoading(false);
  //         }
  //     });

  //   return () => {};
  // }, []);

  // const newProducts = products.filter((product) => {
  //   return product.category === 'electronics';
  // });

// console.log(newProducts)

  

  return (
    <div>
      <h1 className="text-center py-3 fs-large">This is a nested route with a {productCategory} route url</h1>
      <Form/>
    </div>
  );
}

export default SingleProduct;
