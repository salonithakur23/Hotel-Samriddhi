
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
        <Modal.Title> &#128968; &nbsp;Employee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6}>
              <p><b>Employee Name:</b></p>
              <p><b>Phone No:</b> </p>
              <p><b>Address:</b> </p>
              <p><b>Email :</b> </p>
              <p><b>Gender:</b></p>
              <p><b>Dob</b> </p>
              <p><b>Role:</b> </p>
              <p><b>Salary:</b> </p>
             
            </Col>
            <Col sm={6}>
            <p>{user.Employee_Name}</p>
              <p> {user.Phone_Number}</p>
              <p>{user.Address}</p>
              <p> {user.Email}</p>
              <p> {user.Gender}</p>
              <p> {user.Dob}</p>
              <p> {user.Role}</p>
              <p> {user.Checkout_Date_Time}</p>
              <p> {user.Salary}</p>
         
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCamp;
