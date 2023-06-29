import React, { useState,useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './RoomService.css';
import axios from "axios";




const ServiceEdit = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [getSpecificService, setSpecificService] = useState("");
    const [Service_Name, setService_Name] = useState(getSpecificService.Service_Name);
    const [Servive_Charge, setServive_Charge] = useState(getSpecificService.Servive_Charge);
   

    console.log(getSpecificService, "Check id from url")

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/room-service/${params.id}`).then((response) => {
            setSpecificService(response.data);
        })
    }, [])


    const submitform = () => {
        try {
            axios.put(`http://localhost:4000/api/v1/room-service/${params.id}`, {
                "Service_Name": Service_Name,
                "Servive_Charge": Servive_Charge,
               
            })
            alert("User update Successfully")
            navigate("/service-list")
        } catch (error) {
            console.log(error.response)

        }
    }



  return (
<>

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
        
                <div className='form-div' >
                <Container>
                    <Row>


                        <form className="row g-4 p-3 registration-form" >

                            <div class="col-md-4 position-relative">
                                <label className="label">Service Name</label>
                                <input type="text" class="form-control"
                                 onChange={(e) => setService_Name(e.target.value)}
                                  id="inputname" placeholder={getSpecificService.Service_Name} required
                                // value={service_Name} onChange={(e) => setService_Name(e.target.value)} required

                                />

                            </div>

                           


                        <div class="col-md-4 position-relative">
                                <label className="label">Service Charges</label>
                                <input type="text" class="form-control"
                                 onChange={(e) => setServive_Charge(e.target.value)}
                                 id="inputname" placeholder={getSpecificService.Servive_Charge} required
                                    //  value={servive_Charge} onChange={(e) => setServive_Charge(e.target.value)} required
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

export default ServiceEdit
