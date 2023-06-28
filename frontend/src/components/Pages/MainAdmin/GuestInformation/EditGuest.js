import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard,  } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const EditGuest = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [getSpecificUser, setSpecificUser] = useState("");
  const [Guest_Name, setGuest_Name] = useState(getSpecificUser.Guest_Name);
  const [Guest_Number, setGuest_Number] = useState(getSpecificUser.Guest_Number);
  const [Address, setAddress] = useState(getSpecificUser.Address);
  const [Email, setEmail] = useState(getSpecificUser.Email);
  const [Room_Number, setRoom_Number] = useState(getSpecificUser.Room_Number);
  const [Room_Quantity, setRoom_Quantity] = useState(getSpecificUser.Room_Quantity);
  const [Booking_Date_Time, setBooking_Date_Time] = useState(getSpecificUser.Booking_Date_Time);
  const [Checkin_Date_Time, setCheckin_Date_Time] = useState(getSpecificUser.Checkin_Date_Time);
  const [Checkout_Date_Time, setCheckout_Date_Time] = useState(getSpecificUser.Checkout_Date_Time);
  const [Number_Of_Children, setNumber_Of_Children] = useState(getSpecificUser.Number_Of_Children);
  const [Number_Of_Adults, setNumber_Of_Adults] = useState(getSpecificUser.umber_Of_Adults);



  console.log(getSpecificUser, "Check id from url")

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/guest/${params.id}`).then((response) => {
      setSpecificUser(response.data);
    })
  }, [])


  const submitform = () => {
    try {
      axios.put(`http://localhost:4000/api/v1/guest/${params.id}`, {
        "Guest_Name": Guest_Name,
        "Guest_Number": Guest_Number,
        "Address": Address,
        "Email": Email,
        "Room_Number": Room_Number,
        "Room_Quantity": Room_Quantity,
        "Booking_Date_Time": Booking_Date_Time,
        "Checkin_Date_Time": Checkin_Date_Time,
        "Checkout_Date_Time": Checkout_Date_Time,
        "Number_Of_Children": Number_Of_Children,
        "Number_Of_Adults": Number_Of_Adults,
      })
      alert("User update Successfully")
      navigate("/guest-list")
    } catch (error) {
      console.log(error.response)

    }
  }

  return (
    <>
      <Container style={{ width: '90%', marginTop: '20px' }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp;Dashboard / Edit Guest
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
                  onChange={(e) => setGuest_Name(e.target.value)} placeholder={getSpecificUser.Guest_Name} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Guest Number</label>
                <input type='text' name='Guest_Number' className='form-control'
                  onChange={(e) => setGuest_Number(e.target.value)} placeholder={getSpecificUser.Guest_Number} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Address</label>
                <input type='text' name='Address' className='form-control'
                  onChange={(e) => setAddress(e.target.value)} placeholder={getSpecificUser.Address} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Email</label>
                <input type='text' name='Email' className='form-control'
                  onChange={(e) => setEmail(e.target.value)} placeholder={getSpecificUser.Email} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room No.</label>
                <input type='text' name='Room_Number' className='form-control'
                  onChange={(e) => setRoom_Number(e.target.value)} placeholder={getSpecificUser.Room_Number} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room Quantity</label>
                <input type='text' name='Room_Quantity' className='form-control'
                  onChange={(e) => setRoom_Quantity(e.target.value)} placeholder={getSpecificUser.Room_Quantity} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Booking Date & Time</label>
                <input type='datetime-local' name='Booking_Date_Time' className='form-control'
                  onChange={(e) => setBooking_Date_Time(e.target.value)} placeholder={getSpecificUser.Booking_Date_Time} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-in Date & Time</label>
                <input type='datetime-local' name='Checkin_Date_Time' className='form-control'
                  onChange={(e) => setCheckin_Date_Time(e.target.value)} placeholder={getSpecificUser.Checkin_Date_Time} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-Out Date & Time</label>
                <input type='datetime-local' name='Checkout_Date_Time' className='form-control'
                  onChange={(e) => setCheckout_Date_Time(e.target.value)} placeholder={getSpecificUser.Checkout_Date_Time} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Childrens</label>
                <input type='text' name='Number_Of_Children' className='form-control'
                  onChange={(e) => setNumber_Of_Children(e.target.value)} placeholder={getSpecificUser.Number_Of_Children} required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Adults</label>
                <input type='text' name='Number_Of_Adults' className='form-control'
                  onChange={(e) => setNumber_Of_Adults(e.target.value)} placeholder={getSpecificUser.Number_Of_Adults} required />
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
  )
}

export default EditGuest