import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineHeart } from "react-icons/ai";
import "./TopNavBar.css";

const FavItems = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p className="heart-icon" onClick={handleShow}>
        <AiOutlineHeart className="heart" />
      </p>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Favourites Products List</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add your ❤️ Favourite products in list</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buy Later
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FavItems;
