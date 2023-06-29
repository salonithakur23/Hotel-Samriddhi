import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const ModalComp = ({
  open,
  setOpen,
  Item_Name,
  price,
  Category_Name,
  id,
  

}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }




  return (
    <Modal style={{ width: "100%", height: "100%" }}
      show={open}
      onHide={() => setOpen(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Items Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6} >

              <p><b className="model">Item Name:</b><span className="spaT" >{Item_Name}</span></p>
              <p><b className="model"> Price</b><span className="spaT" >{price}</span></p>
              <p><b className="model">Category Name </b><span className="spaT" >{Category_Name}</span></p>

           
            </Col>
            <Col sm={6}>
             
            </Col>

          </Row>
        </Container>

      </Modal.Body>

    </Modal>
  );
};

export default ModalComp;

