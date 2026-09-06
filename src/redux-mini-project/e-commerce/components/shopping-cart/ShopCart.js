import React from "react";
import "./ShopCart.css";
import { useSelector } from "react-redux";
import CartInfo from "../cartDetails/CartInfo";

const ShopCart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  // console.log(cart);

  let count = 0;
  cart.forEach((item) => (count += item.quantity));

  let productArr = useSelector((state) => state.productReducer.products);
  // console.log(productArr);

  let cartArr = useSelector((state) => state.cartReducer.cart);
  // console.log(cartArr);

  return (
    <>
      <div className="container">
        <h2>Shopping Cart</h2>
        <section className="top-section">
          <p>Home &gt; Cart </p>
          <p>{count} items in the bag</p>
        </section>
        <section className="middle-section">
          <CartInfo cartData={cartArr} productData={productArr} />
        </section>
      </div>
    </>
  );
};

export default ShopCart;

/* <section className="bottom-section">
  <section className="left-side">
    <p>Have a promo Code ?</p>
    <div className="promo">
      <input type="text" placeholder="enter promo code.." />
    </div>
  </section>
  <section className="right-side">
    <div className="subtotal price">
      <p>Subtotal </p>
      <p>$ 21.97</p>
    </div>
    <div className="tax price">
      <p>Tax </p>
      <p>$ 5.00</p>
    </div>
    <div className="total price">
      <p>Total </p>
      <p>$ 26.97</p>
    </div>
    <button className="btn btn-success checkout">Checkout</button>
  </section>
</section> */
