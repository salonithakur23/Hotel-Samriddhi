import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './RoomService.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../../Header/Layout';

const ServiceEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [specificService, setSpecificService] = useState("");
  const [Service_Name, setService_Name] = useState(specificService.Service_Name);
  const [Service_Charge, setService_Charge] = useState(specificService.Service_Charge);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/room-service/${params.id}`).then((response) => {
      setSpecificService(response.data);
      setService_Name(response.data.service.Service_Name);
      setService_Charge(response.data.service.Service_Charge);
    });
  }, []);

  const submitform = (event) => {
    event.preventDefault(); // Prevents default form submission
    try {
      axios.put(`http://localhost:4000/api/v1/room-service/${params.id}`, {
        Service_Name: Service_Name,
        Service_Charge: Service_Charge,
      });
      toast.success("Service Updated Succesfully");
      navigate("/service-list");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Layout />
      <Container style={{ width: "90%", marginTop: "20px" }} >
        <Table striped bordered hover className="main-table">
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
                  <div className="table-div">
                    <Button className="table-btn" variant="light" >
                      <IoIosCreate />&nbsp;<Link to="/service-list">Go Back</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>

      <div className="form-div">
        <Container>
          <Row>
            <form className="row g-4 p-3 registration-form">
              <div className="col-md-4 position-relative">
                <label className="label">Service Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={Service_Name}
                  onChange={(e) => setService_Name(e.target.value)}
                />
              </div>

              <div className="col-md-4 position-relative">
                <label className="label">Service Charges</label>
                <input
                  type="text"
                  className="form-control"
                  value={Service_Charge}
                  onChange={(e) => setService_Charge(e.target.value)}
                />
              </div>

              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                  onClick={(event) => submitform(event)} // Pass the event parameter
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

export default ServiceEdit;
