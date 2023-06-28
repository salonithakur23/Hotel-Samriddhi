// import React, { useState,useEffect } from "react";
// import { Modal, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import { toast } from 'react-toastify';



// const ModalCamp = ({
  
//   open,
//   setOpen,
// }) => {

//   const [guest, setGuests] = useState([]);
//   const getGuests = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/v1/guests");
//       if (response.status === 200) {
//         setGuests(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  
//   const onDeleteguest = async (id) => {
//     if (window.confirm("Are you sure to delete this guest")) {
      
//       const response = await axios.delete(`http://localhost:4000/api/v1/guest/${id}`)
//       if (response.status === 200) {
//         toast.success('Guest deleted successfully');
//         getGuests();
//       }
//     }
  
//   }

//   return (

//     <>
//       <Modal style={{ width: "100%", height: "100%" }}
//         show={open}
//         onHide={() => setOpen(false)}
//         size="small"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title> &#128968; &nbsp; Guest-Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <Container>
//             <Row>

//               <Col sm={12}>

//                 <p>Guest Name</p>
//                 <p>Guest Number</p>
//                 <p>Guest Address</p>
//                 <p>Email</p>
//                 <p>Room No.</p>
//                 <p>Room Quantity</p>
//                 <p>Boking Date & Time</p>
//                 <p>Check-in-Date & Time</p>
//                 <p>Check-Out-Date & Time</p>
//                 <p>Number Of Childrens</p>
//                 <p>Number Of Adults</p>


//                 <Button className="float-end modal-delete" variant="light"
//                   // onClick={() =>  setOpen(false)}
//                   onClick={() => {
//                     onDeleteguest(guest.id);
//                     setOpen(false)
//                   }}

//                 >Delete</Button>

//               </Col><br /><br />




//             </Row>
//           </Container>

//         </Modal.Body>

//       </Modal>


//     </>
//   );
// };
// ...

import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const ModalCamp = ({ open, setOpen, guest }) => {
  const onDeleteGuest = async () => {
    if (window.confirm("Are you sure you want to delete this guest?")) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/guest/${guest.id}`
        );
        if (response.status === 200) {
          toast.success("Guest deleted successfully");
          setOpen(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to delete guest");
      }
    }
  };

  return (
    <>
      <Modal
        style={{ width: "100%", height: "100%" }}
        show={open}
        onHide={() => setOpen(false)}
        size="small"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>&#128968; &nbsp; Guest Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={12}>
                <p>Guest Name: {guest.name}</p>
                <p>Guest Number: {guest.number}</p>
                <p>Guest Address: {guest.address}</p>
                <p>Email: {guest.email}</p>
                <p>Room No.: {guest.roomNo}</p>
                <p>Room Quantity: {guest.roomQuantity}</p>
                <p>Boking Date & Time: {guest.bookingDateTime}</p>
                <p>Check-in Date & Time: {guest.checkInDateTime}</p>
                <p>Check-Out Date & Time: {guest.checkOutDateTime}</p>
                <p>Number Of Children: {guest.childrenCount}</p>
                <p>Number Of Adults: {guest.adultsCount}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={onDeleteGuest}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCamp;


// export default ModalCamp;