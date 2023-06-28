
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Guest = () => {

  const navigate = useNavigate()
  const [guest_Name, setGuest_Name] = useState(null);
  const [guest_Number, setGuest_Number] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [room_Number, setRoom_Number] = useState(null);
  const [room_Quantity, setRoom_Quantity] = useState(null);
  const [booking_Date_Time, setBooking_Date_Time] = useState(null);
  const [checkin_Date_Time, setCheckin_Date_Time] = useState(null);
  const [checkout_Date_Time, setCheckout_Date_Time] = useState(null);
  const [number_Of_Children, setNumber_Of_Children] = useState(null);
  const [number_Of_Adults, setNumber_Of_Adults] = useState(null);



  const submitform = () => {
    try {
      axios.post("http://localhost:4000/api/v1/guest/new", {
        "Guest_Name": guest_Name,
        "Guest_Number": guest_Number,
        "Address": address,
        "Email": email,
        "Room_Number": room_Number,
        "Room_Quantity": room_Quantity,
        "Booking_Date_Time": booking_Date_Time,
        "Checkin_Date_Time": checkin_Date_Time,
        "Checkout_Date_Time": checkout_Date_Time,
        "Number_Of_Children": number_Of_Children,
        "Number_Of_Adults": number_Of_Adults,

      })
      alert("Data Submit Successfully")
      navigate("/guest-list")
    } catch (error) {
      console.log(error.response)
    }
  }




  return (
    <>
      <ToastContainer position='top-center' />

      <Container style={{ width: '90%', marginTop: '20px' }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp;Dashboard / Add New Guest
                </h5>
              </th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>
                    <Link to="/guest-list">
                    <Button className='table-btn' variant='light' >
                      <IoIosCreate />&nbsp;Go Back
                    </Button>
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>

      <div className='form-div'>
        <Container>
          <Row>
            <form className='row g-4 p-3 registration-form'>
              <div className='col-md-4 position-relative'>
                <label htmlFor='Guest_Name' className='label'>Guest Name</label>
                <input type='text' name='Guest_Name' id='Guest_Name' className='form-control'
                 value={guest_Name} onChange={(e) => setGuest_Name(e.target.value)}     required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Guest Number</label>
                <input type='text' name='Guest_Number' className='form-control'
                 value={guest_Number} onChange={(e) => setGuest_Number(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Address</label>
                <input type='text' name='Address' className='form-control'
                 value={address} onChange={(e) => setAddress(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Email</label>
                <input type='text' name='Email' className='form-control'
                 value={email} onChange={(e) => setEmail(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room No.</label>
                <input type='text' name='Room_Number' className='form-control'
                 value={room_Number} onChange={(e) => setRoom_Number(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room Quantity</label>
                <input type='text' name='Room_Quantity' className='form-control' 
                value={room_Quantity} onChange={(e) => setRoom_Quantity(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Booking Date & Time</label>
                <input type='datetime-local' name='Booking_Date_Time' className='form-control' 
                value={booking_Date_Time} onChange={(e) => setBooking_Date_Time(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-in Date & Time</label>
                <input type='datetime-local' name='Checkin_Date_Time' className='form-control' 
                value={checkin_Date_Time} onChange={(e) => setCheckin_Date_Time(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-Out Date & Time</label>
                <input type='datetime-local' name='Checkout_Date_Time' className='form-control' 
                value={checkout_Date_Time} onChange={(e) => setCheckout_Date_Time(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Childrens</label>
                <input type='text' name='Number_Of_Children' className='form-control' 
                value={number_Of_Children} onChange={(e) => setNumber_Of_Children(e.target.value)} id="inputname" required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Adults</label>
                <input type='text' name='Number_Of_Adults' className='form-control' 
                value={number_Of_Adults} onChange={(e) => setNumber_Of_Adults(e.target.value)} id="inputname" required />
              </div>
              <center>
                <Button className='stu_btn' id='button' variant='success' type='submit'
                  onSubmit={submitform}
                >
                  Submit
                </Button>
              </center>
            </form>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Guest;
