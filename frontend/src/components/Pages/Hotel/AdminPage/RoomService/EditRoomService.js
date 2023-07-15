import React, { useEffect, useState } from 'react';
import HotelSidebar from '../../HotelSidebar';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './RoomService.css';
import Layout from '../../../../Header/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';


const baseURL = "http://localhost:4000/api/v1/room-services";
 

const EditRoomService = () => {


    const params = useParams();
    const navigate = useNavigate();
    const [specificService, setSpecificService] = useState("");
    const [guestName, setGuestName] = useState(specificService.guestName);
    const [phoneNumber, setPhoneNumber] = useState(specificService.phoneNumber);
    const [roomNumber, setRoomNumber] = useState(specificService.roomNumber);
    const [serviceDate, setServiceDate] = useState(specificService.serviceDate);
    const [service, setService] = useState(specificService.service);
    const [serviceCharge, setServiceCharge] = useState(specificService.serviceCharge);
    // const [selectedServiceCharge, setSelectedServiceCharge] = useState(specificService.selectedServiceCharge);
    const [get, setGetAll] = useState(null);

    

    useEffect(() => {
      axios.get(`http://localhost:4000/api/v1/guest/${params.id}`).then((response) => {
        setSpecificService(response.data);
        setGuestName(response.data.roomservice.guestName);
        setPhoneNumber(response.data.roomservice.phoneNumber);
        setRoomNumber(response.data.roomservice.roomNumber);
        setServiceDate(response.data.roomservice.serviceDate);
        setService(response.data.roomservice.service);
        setServiceCharge(response.data.roomservice.serviceCharge);
      });
    }, []);



   useEffect(() => {
     axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      console.log(response)
    })
   }, [get])


    const submitform = (event) => {
      event.preventDefault(); // Prevents default form submission
      try {
        axios.put(`http://localhost:4000/api/v1/guest/${params.id}`, {
          guestName: guestName,
          phoneNumber: phoneNumber,
          roomNumber: roomNumber,
          serviceDate: serviceDate,
          service: service,
          serviceCharge: serviceCharge,
        });
        toast.success("Room-Service Updated Succesfully");
        navigate("/room-service-lists");
      } catch (error) {
        console.log(error.response);
      }
    };


  return (

   <>

   <Layout />
      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Edit Service</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>
                    <Button className='table-btn' variant="light">
                      <IoIosCreate />&nbsp;<Link to="/room-service-lists">Go Back</Link>
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
            <form className="row g-4 p-3 registration-form">
              <div className="col-md-4 position-relative">
                <label className="label">Guest Name</label>
                <input type="text" className="form-control" 
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              
                />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Phone No.</label>
                <input type="text" className="form-control"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
                 />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Room No.</label>
                <input type="text" className="form-control" 
             value={roomNumber}
             onChange={(e) => setRoomNumber(e.target.value)}
                />

              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Service Date</label>
                <input type="datetime-local" className="form-control" 
               value={serviceDate}
               onChange={(e) => setServiceDate(e.target.value)}
                />
              </div>


              <div className="col-md-4 position-relative">
                <label className="label">Service</label>
                <Form.Select 
                value={service}
                onChange={(e) => {
                  setService(e.target.value)
                  setServiceCharge(e.target.value)
                }}
                >
                  <option >Choose</option>
                  {get?.ser?.map((items) => (
                    <option key={items._id} value={items.Service_Name}>
                      {items.Service_Name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              {/* onChange={(e) => {
                    setService(e.target.value);
                    getServiceCharge(e.target.value);
                  }} */}


              <div className="col-md-4 position-relative">
                <label className="label">Service Charges</label>
                <input
                  type="text"
                  value={serviceCharge}
                  // onChange={(e) => setServiceCharge(e.target.value)}
                  className="form-control"
                />
              </div>


              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                  onClick={(event) => submitform(event)}
                > Submit
                </Button>
              </center>


            </form>
          </Row>
        </Container>
      </div>

   </>
  )
}

export default EditRoomService
