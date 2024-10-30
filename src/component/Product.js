import {useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cart = (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "60px",
        gap: "13px",
      }}
    >
      {product.map((product) => (
        <Card
          key={product.id}
          style={{ width: "18rem", padding: "17px", marginLeft: "27px" }}
        >
          <div className="text-center">
            <Card.Img
              style={{
                width: "94px",
                height: "86px",
              }}
              variant="top"
              src={product.image}
              alt={product.title}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
  return (
    <>
      <h1>Product Dashboard</h1>
      {cart}
    </>
  );
};

export default Product;
