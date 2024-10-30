import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
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
      {cartProducts.map((product) => (
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
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>
              Remove
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <h2>Cart</h2>
      {cart}
    </>
  );
};

export default Cart;
