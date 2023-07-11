import React, { useEffect, useState } from 'react';
import HotelSidebar from '../../HotelSidebar';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './RoomService.css';
import Layout from '../../../../Header/Layout';
import axios from 'axios';

const baseURL = "http://localhost:4000/api/v1/room-services";



const RoomService = () => {


   
  const [get, setGetAll] = useState(null);
  const [charge, setCharge] = useState([]);
  const [selectedServiceCharge, setSelectedServiceCharge] = useState('');

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      console.log(response);
    });
  }, [get]);

  const selectedChargeList = charge?.map((items) => (
    <div key={items.Service_Charge}>
      <p>{items.Service_Charge}</p>
    </div>
  ));

  return (
    <>
      <Layout />
      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Service</h5></th>
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
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Phone No.</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Room No.</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Service Date</label>
                <input type="datetime-local" className="form-control" />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Service</label>
                <Form.Select onChange={(e) => setSelectedServiceCharge(e.target.value)}>
                  <option value="">Choose</option>
                  {get?.ser?.map((items) => (
                    <option value={items.Service_Charge}>{items.Service_Name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Service Charges</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedServiceCharge}
                  onChange={(e) => setSelectedServiceCharge(e.target.value)}
                />
                {selectedChargeList}
              </div>
              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
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

export default RoomService;
