import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../slices/CartSlice";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);
  const currItem = cart.find((item) => item.id === product.id);
  const currQuantity = currItem ? currItem.quantity : 0;
  return (
    <>
      {" "}
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: 🤑 ₹ {product.price}/-</Card.Text>
          <div className="add-btn">
            <Button
              variant="primary"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove
            </Button>
            <div className="cart-items">{currQuantity}</div>
            <Button
              variant="primary"
              onClick={() => dispatch(addToCart(product.id))}
            >
              Add
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleProduct;
