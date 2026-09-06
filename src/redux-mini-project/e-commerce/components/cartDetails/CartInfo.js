import React, { useState, useEffect } from "react";
import "./CartInfo.css";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../slices/CartSlice";
import { MdProductionQuantityLimits } from "react-icons/md";

const CartInfo = ({ cartData, productData }) => {
  const dispatch = useDispatch();

  const handleRemoveBtn = (productId) => {
    dispatch(removeCartItem(productId));
  };

  const [total, setTotal] = useState([]);

  const subTotal = cartData.map((item) => {
    const product = productData.find((p) => p.id === item.id);
    if (!product) return null;
    return product.price * item.quantity;
  });

  // console.log(subTotal);

  let subTotalSum = subTotal.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);

  // console.log("subTotalSum : " + subTotalSum);

  useEffect(() => {
    setTotal((subTotalSum + 2.0).toFixed(2));
  }, [subTotalSum]);

  // setTotal(subTotalSum + 2.0);

  return (
    <div className="cart-list">
      {subTotalSum === 0 ? (
        <p className="empty">
          Your <MdProductionQuantityLimits /> is empty..!
        </p>
      ) : (
        <>
          {cartData.map((item) => {
            const product = productData.find((p) => p.id === item.id);

            if (!product) return null;

            return (
              <div key={item.id} className="cart-item">
                <div className="data">
                  <div className="left-image">
                    <img src={product.thumbnail} alt="product-item" />
                  </div>
                  <div className="right-content">
                    <div className="item-desc">
                      <p className="title">{product.title}</p>
                      <p>{product.description}</p>
                      <p>Price : ₹ {product.price}/-</p>
                    </div>
                    <div className="item-quantity-data">
                      Quantity :<p className="item-quantity">{item.quantity}</p>
                      <div
                        className="remove-item"
                        onClick={() => handleRemoveBtn(product.id)}
                      >
                        <ImCancelCircle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
      <section className="bottom-section">
        <section className="left-side">
          <div className="promo-data">
            <p>Have a promo Code ?</p>
            <div className="promo">
              <input type="text" placeholder="enter promo code.." />
            </div>
          </div>
        </section>
        <section className="right-side">
          <div className="subtotal price">
            <p>Subtotal </p>
            <p>₹ {subTotalSum.toFixed(2)} /-</p>
          </div>
          <div className="tax price">
            <p>Tax </p>
            <p>{subTotalSum === 0 ? 0 : <>₹ 2.00 /-</>}</p>
          </div>
          <div className="total price">
            <p>Total </p>
            <p>{subTotalSum === 0 ? 0 : <>₹ {total} /-</>}</p>
          </div>
          <button className="btn btn-success checkout">Checkout</button>
        </section>
      </section>
    </div>
  );
};

export default CartInfo;
