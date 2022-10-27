import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

function Home() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setItems(json);
          setLoading(false);
          console.log(items)
        });
    
      return () => {};
    }, []);
    
    if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <div className="container-fluid">
      <h1 className='text-center'>Welcome to your favorite shop</h1>
      <img
        src="../images/store-owner-packs-a-bag-for-her-customer.jpeg"
        alt=""
      />
      {/* some of our products are */}
      <div className="container content">
        <div className='row '>
        

                {items.map((item,i)=>{
                    return(
                     <CardComponent image={item.image} price={item.price} key={i}/>
                    )
                })}
        
            
            
        </div>
      </div>
    </div>
  );
}

export default Home;
