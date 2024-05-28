import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductComp = (product)=> {
  const history = useNavigate();
  const handleBuy = (id) => {
    history(`/payment/${id}`);
  };

 return  <div className="product">
              <div>
                <h3>{product.product.title}</h3>
                <h3>{product.product.description}</h3>
                <h3>
                  <strong>${product.product.price}</strong>
                </h3>
                <br />
              </div>
              <button className="buy-btn" onClick={() => handleBuy(product.product.id)}>Buy now</button>
          </div>
}

const Products = () => {
  const [products,setProducts]=useState([]);
   useEffect(()=>{
    async function fetchProducts(){
      const res =await fetch("http://localhost:8080/events");
      const data = await res.json();
      if(data){
        setProducts(data.products);
        console.log("data:",data);
        console.log("products:",products)
      }
    }
    fetchProducts();
   },[]);
  

  return (
    <div>
      <h2>Buy Products </h2>
      <div className="products">
        {products && products.map(product => <ProductComp key ={product.id} product={product} />) } 
      </div>
   </div>
  );
};

export default Products;