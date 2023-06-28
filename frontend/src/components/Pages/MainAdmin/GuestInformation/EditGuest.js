import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Guest = () => {
    const { id } = useParams();
  const initialState = {
    Guest_Name: '',
    Guest_Number: '',
    Address: '',
    Email: '',
    Room_Number: '',
    Room_Quantity: '',
    Booking_Date_Time: '',
    Checkin_Date_Time: '',
    Checkout_Date_Time: '',
    Number_Of_Children: '',
    Number_Of_Adults: '',
  };

  const [state, setState] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const editGuest = async (data) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/v1/guest/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error adding guest:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.Guest_Name || !state.Email) {
      toast.error('Please provide the required values');
    } else {
      try {
        await editGuest(state)
        setState(initialState);
        setFormSubmitted(true);
      } catch (error) {
        toast.error('Failed to update guest');
      }
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      toast.success('Guest information update  successfully');
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleGoBack = () => {
    window.open('/guest-details', '_blank');
  };

  return (
    <>
      <ToastContainer position='top-center' />

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
                    <Button className='table-btn' variant='light' onClick={handleGoBack}>
                      <IoIosCreate />&nbsp;Go Back
                    </Button>
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
            <form className='row g-4 p-3 registration-form' onSubmit={handleSubmit}>
              <div className='col-md-4 position-relative'>
                <label htmlFor='Guest_Name' className='label'>Guest Name</label>
                <input type='text' name='Guest_Name' id='Guest_Name' className='form-control' onChange={handleInputChange} value={state.Guest_Name} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Guest Number</label>
                <input type='text' name='Guest_Number' className='form-control' onChange={handleInputChange} value={state.Guest_Number} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Address</label>
                <input type='text' name='Address' className='form-control' onChange={handleInputChange} value={state.Address} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Email</label>
                <input type='text' name='Email' className='form-control' onChange={handleInputChange} value={state.Email} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room No.</label>
                <input type='text' name='Room_Number' className='form-control' onChange={handleInputChange} value={state.Room_Number} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Room Quantity</label>
                <input type='text' name='Room_Quantity' className='form-control' onChange={handleInputChange} value={state.Room_Quantity} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Booking Date & Time</label>
                <input type='datetime-local' name='Booking_Date_Time' className='form-control' onChange={handleInputChange} value={state.Booking_Date_Time} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-in Date & Time</label>
                <input type='datetime-local' name='Checkin_Date_Time' className='form-control' onChange={handleInputChange} value={state.Checkin_Date_Time} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Check-Out Date & Time</label>
                <input type='datetime-local' name='Checkout_Date_Time' className='form-control' onChange={handleInputChange} value={state.Checkout_Date_Time} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Childrens</label>
                <input type='text' name='Number_Of_Children' className='form-control' onChange={handleInputChange} value={state.Number_Of_Children} />
              </div>
              <div className='col-md-4 position-relative'>
                <label className='label'>Number Of Adults</label>
                <input type='text' name='Number_Of_Adults' className='form-control' onChange={handleInputChange} value={state.Number_Of_Adults} />
              </div>
              <center>
                <Button className='stu_btn' variant='success' type='submit'>
                  Update Guest
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
