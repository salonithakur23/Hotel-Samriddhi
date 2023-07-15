
import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const ModalCamp = ({ open, setOpen, user }) => {
  return (
    <Modal
      style={{ width: "100%", height: "100%" }}
      show={open}
      onHide={() => setOpen(false)}
      size="small"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title> &#128968; &nbsp;Room Booking Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6}>
              
              <p><b>Guest Name:</b></p>
              <p><b>Phone No:</b> </p>
              <p><b>Address:</b> </p>
              <p><b>Room No:</b> </p>
              <p><b>Room Type:</b> </p>
              <p><b>Booking Date:</b></p>
              <p><b>Arrival Date:</b> </p>
              <p><b>Departure Date:</b> </p>
              <p><b>Number Of Adults:</b> </p>
              <p><b>Number Of Children:</b> </p>
              <p><b>Special Request:</b> </p>

            </Col>
            <Col sm={6}>
            <p>{user.Guest_Name}</p>
              <p> {user.Phone_Number}</p>
              <p>{user.Address}</p>
              <p> {user.Room_Number}</p>
              <p> {user.Room_BookType}</p>
              <p> {user.Booking_Date_Time}</p>
              <p> {user.Checkin_Date_Time}</p>
              <p> {user.Checkout_Date_Time}</p>
              <p> {user.Number_Of_Adults}</p>
              <p> {user.Number_Of_Children}</p>
              <p> {user.Special_Request}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCamp;
