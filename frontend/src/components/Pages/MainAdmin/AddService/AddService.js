import React, { useState } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './RoomService.css';
import axios from "axios";




const AddService = () => {

    const navigate = useNavigate()
    const [service_Name, setService_Name] = useState(null);
    const [servive_Charge, setServive_Charge] = useState(null);
    // const [city, setCity] = useState(null);
    // const [nationality, setNationality] = useState(null);

    const submitform = () => {
        try {
            axios.post("http://localhost:4000/api/room-service/new", {
                "Service_Name": service_Name,
                "Servive_Charge": servive_Charge,
                // "City": city,
                // "Nationality": nationality
            })
            navigate("/service-list")
        } catch (error) {
            // .then((response) => {
            //     alert("Data submitted successfully")
            //     navigate("/")
            // }, (error) => {
            //     alert("Sorry something went wrong")

            // })
            console.log(error.response)

        }
    }




  return (
   <>
   
   
  {/* <div> */}
                <Container style={{ width: "90%", marginTop: "20px" }} >
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

                                            <Button className='table-btn' variant="light" >
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
                {/* form section start */}
                <div className='form-div' >
                <Container>
                    <Row>


                        <form className="row g-4 p-3 registration-form" >

                            <div class="col-md-4 position-relative">
                                <label className="label">Service Name</label>
                                <input type="text" class="form-control"
                                value={service_Name} onChange={(e) => setService_Name(e.target.value)} required

                                />

                            </div>

                           


                        <div class="col-md-4 position-relative">
                                <label className="label">Service Charges</label>
                                <input type="text" class="form-control"
                                     value={servive_Charge} onChange={(e) => setServive_Charge(e.target.value)} required
                                />

                            </div>

                            <center>

                                <Button className="stu_btn"
                                    variant="success"
                                    type="submit"
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

export default AddService;