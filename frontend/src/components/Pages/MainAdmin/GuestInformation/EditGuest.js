import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard,  } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const EditGuest = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [specificGuest, setSpecificGuest] = useState("");
  const [Guest_Name, setGuest_Name] = useState(specificGuest.Guest_Name);
  const [Guest_Number, setGuest_Number] = useState(specificGuest.Guest_Number);
  const [Address, setAddress] = useState(specificGuest.Address);
  const [Email, setEmail] = useState(specificGuest.Email);
  const [Room_Number, setRoom_Number] = useState(specificGuest.Room_Number);
  const [Room_Quantity, setRoom_Quantity] = useState(specificGuest.Room_Quantity);
  const [Booking_Date_Time, setBooking_Date_Time] = useState(specificGuest.Booking_Date_Time);
  const [Checkin_Date_Time, setCheckin_Date_Time] = useState(specificGuest.Checkin_Date_Time);
  const [Checkout_Date_Time, setCheckout_Date_Time] = useState(specificGuest.Checkout_Date_Time);
  const [Number_Of_Children, setNumber_Of_Children] = useState(specificGuest.Number_Of_Children);
  const [Number_Of_Adults, setNumber_Of_Adults] = useState(specificGuest.Number_Of_Adults);



  console.log(specificGuest, "Check id from url")

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/guest/${params.id}`).then((response) => {
      setSpecificGuest(response.data);
      setGuest_Name(response.data.guest.Guest_Name);
      setGuest_Number(response.data.guest.Guest_Number);
      setAddress(response.data.guest.Address);
      setEmail(response.data.guest.Email);
      setRoom_Number(response.data.guest.Room_Number);
      setRoom_Quantity(response.data.guest.Room_Quantity);
      setBooking_Date_Time(response.data.guest.Booking_Date_Time);
      setCheckin_Date_Time(response.data.guest.Checkin_Date_Time);
      setCheckout_Date_Time(response.data.guest.Checkout_Date_Time);
      setNumber_Of_Children(response.data.guest.Number_Of_Children);
      setNumber_Of_Adults(response.data.guest.Number_Of_Adults);
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
      toast.success("Guest Updated Succesfully")
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
                <input type='text' className='form-control'
                 value={Guest_Name}  onChange={(e) => setGuest_Name(e.target.value)}  required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Guest Number</label>
                <input type='text' name='Guest_Number' className='form-control'
                value={Guest_Number}   onChange={(e) => setGuest_Number(e.target.value)}   required />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Address</label>
                <input type='text' name='Address' className='form-control'
                  value={Address}  onChange={(e) => setAddress(e.target.value)}   />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Email</label>
                <input type='text' name='Email' className='form-control'
                value={Email}   onChange={(e) => setEmail(e.target.value)}    />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room No.</label>
                <input type='text' name='Room_Number' className='form-control'
                value={Room_Number}  onChange={(e) => setRoom_Number(e.target.value)}    />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room Quantity</label>
                <input type='text' name='Room_Quantity' className='form-control'
                 value={Room_Quantity} onChange={(e) => setRoom_Quantity(e.target.value)}    />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Booking Date & Time</label>
                <input type='datetime-local' name='Booking_Date_Time' className='form-control'
                 value={Booking_Date_Time} onChange={(e) => setBooking_Date_Time(e.target.value)}    />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-in Date & Time</label>
                <input type='datetime-local' name='Checkin_Date_Time' className='form-control'
                 value={Checkin_Date_Time}  onChange={(e) => setCheckin_Date_Time(e.target.value)}   />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-Out Date & Time</label>
                <input type='datetime-local' name='Checkout_Date_Time' className='form-control'
                 value={Checkout_Date_Time}  onChange={(e) => setCheckout_Date_Time(e.target.value)}   />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Childrens</label>
                <input type='text' name='Number_Of_Children' className='form-control'
                 value={Number_Of_Children}  onChange={(e) => setNumber_Of_Children(e.target.value)}   />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Adults</label>
                <input type='text' name='Number_Of_Adults' className='form-control'
                 value={Number_Of_Adults}  onChange={(e) => setNumber_Of_Adults(e.target.value)}   />
              </div>
              <center>
                <Button className='stu_btn' id='button' variant='success' type='submit'
                  onClick={submitform}
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