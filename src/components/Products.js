import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import '../App.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posElec, setPosElec] = useState(0);
  const [posJew,setPosJew] = useState(0);
  const [posMen,setPosMen] = useState(0);
  const [posWomen,setPosWomen] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });

    return () => {};
  }, []);
  const electronics = products.filter((product) => {
    return product.category === "electronics";
  });
//   const jewelery = products.filter((product) => {
//     return product.category === "jewelery";
//   });
//   const mens = products.filter((product) => {
//     return product.category === "men's clothing";
//   });
//   const womens = products.filter((product) => {
//     return product.category === "women's clothing";
//   });

  const item = electronics[posElec];

  const handleNext = () => {
    if (posElec < electronics.length-1) {
      setPosElec((prev) => prev + 1);
    } else {
      setPosElec(0);
    }
  };

  const handlePrev = () => {
    if (posElec > 0) {
      setPosElec((prev) => prev - 1);
    } else {
      setPosElec(0);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">
        Our Products range from various items.
      </h1>
      {loading ? (
        "Loading ..."
      ) : (
        <section className="electronics">
          <h2 className="mb-5">Electronics</h2>
          <div className="product d-flex justify-content-center">
            <div className="mx-auto text-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Card.Body>
                <Card.Text>{item.title}</Card.Text>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="btns ">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              onClick={handlePrev}
            >
              Prev
            </button>

            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </section>
      )}

      {/* <section className="Jewelery">
        <h2 className="mb-5">Jewelery</h2>
        <div className="product d-flex justify-content-center">
          <div className="mx-auto text-center">
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text>${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="btns ">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={handlePrev}
          >
            Prev
          </button>

          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
      <section className="Mens clothing">
        <h2 className="mb-5">Mens clothing</h2>
        <div className="product d-flex justify-content-center">
          <div className="mx-auto text-center">
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text>${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="btns ">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={handlePrev}
          >
            Prev
          </button>

          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
      <section className="Womens clothing">
        <h2 className="mb-5">Womens clothing</h2>
        <div className="product d-flex justify-content-center">
          <div className="mx-auto text-center">
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text>${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="btns ">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={handlePrev}
          >
            Prev
          </button>

          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section> */}
    </div>
  );
}

export default Products;
