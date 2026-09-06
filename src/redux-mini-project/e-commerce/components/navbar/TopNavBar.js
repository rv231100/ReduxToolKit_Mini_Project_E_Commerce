import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import FavItems from "./FavItems";

const TopNavBar = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cartReducer.cart);

  // console.log(cart);

  let count = 0;
  cart.forEach((item) => (count += item.quantity));

  return (
    <>
      <div className="navi">
        <Navbar bg="light" data-bs-theme="light">
          <Container className="mynav">
            {/* <div className="hamburger-icon" onClick={handleShow}> */}
            <RxHamburgerMenu className="menu-icon" />
            {/* </div> */}
            <Navbar.Brand as={Link} to="/" href="#home">
              MyProducts
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <div className="right-layout">
              <div className="cart-layout">
                <p className="heart-icon">
                  <FavItems />
                </p>

                <Link className="cart" to="/cart">
                  <AiOutlineShoppingCart />
                </Link>
                <h3>{count}</h3>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className="delivery">
        <p>
          <AiOutlineEnvironment />
        </p>
        <p>Add Delivery Address </p>
        <p>
          <AiOutlineDownCircle />
        </p>
      </div>
      {/* <Offcanvas
        show={show}
        onHide={handleClose}
        className="custom-offcanvas-width"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      <div className="input-box">
        <AiOutlineSearch className="search" />
        <input type="text" placeholder="Search For Trending Products..." />
      </div>
    </>
  );
};

export default TopNavBar;
