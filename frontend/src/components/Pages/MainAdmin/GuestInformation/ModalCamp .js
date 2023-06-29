import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const ModalComp = ({
  open,
  setOpen,
  Guest_Name,
  Guest_Number,
  Address,
  Email,
  Room_Number,
  Room_Quantity,
  Booking_Date_Time,
  Checkin_Date_Time,
  Checkout_Date_Time,
  Number_Of_Children,
  Number_Of_Adults,
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
        <Modal.Title>Guest Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6} >

              <p><b className="model">Guest Name:</b><span className="spaT" >{Guest_Name}</span></p>
              <p><b className="model">Guest Number.</b><span className="spaT" >{Guest_Number}</span></p>
              <p><b className="model">Address </b><span className="spaT" >{Address}</span></p>
              <p><b className="model">Email  .</b><span className="spaT" >{Email}</span></p>
              <p><b className="model">Room Number</b><span className="spaT" >{Room_Number}</span></p>
              <p><b className="model">Room Quantity</b><span className="spaT" >{Room_Quantity}</span></p>
              <p><b className="model"> Booking Date Time  .</b><span className="spaT" >{Booking_Date_Time}</span></p>
              <p><b className="model">Checkin Date Time   </b><span className="spaT" >{Checkin_Date_Time}</span></p>
              <p><b className="model"> Checkout Date Time</b><span className="spaT" >{Checkout_Date_Time}</span></p>
              <p><b className="model"> Number Of Children</b><span className="spaT" >{Number_Of_Children}</span></p>
              <p><b className="model">Number Of Adults</b><span className="spaT" >{Number_Of_Adults}</span></p>
           
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

