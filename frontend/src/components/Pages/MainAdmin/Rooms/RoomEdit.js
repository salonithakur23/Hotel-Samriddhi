import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard, } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Layout from '../../../Header/Layout';



const RoomEdit = () => {
 
    const params = useParams();
    const navigate = useNavigate();
    const [specificGuest, setSpecificGuest] = useState("");
    const [Room_Number, setRoom_Number] = useState(specificGuest.Room_Number);
    const [Room_Type, setRoom_Type] = useState(specificGuest.Room_Type);
    const [Price, setPrice] = useState(specificGuest.Price);
    const [Avilable_Not, setAvilable_Not] = useState(specificGuest.Avilable_Not);


    console.log(specificGuest, "Check id from url")

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/room/${params.id}`).then((response) => {
            setSpecificGuest(response.data);
            setRoom_Number(response.data.room.Room_Number);
            setRoom_Type(response.data.room.Room_Type);
            setPrice(response.data.room.Price);
            setAvilable_Not(response.data.room.Avilable_Not);

        })
    }, [])

    const submitform = (event) => {
        event.preventDefault();
        try {
            axios.put(`http://localhost:4000/api/v1/room/${params.id}`, {
                "Room_Number": Room_Number,
                "Room_Type": Room_Type,
                "Price": Price,
                "Avilable_Not": Avilable_Not,


            })
            toast.success("Room Updated Succesfully")
            navigate("/room-list")
        } catch (error) {
            console.log(error.response)

        }
    }


    return (
        <>

        <Layout />

            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Edit Room</h5></th>
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
                                            <IoIosCreate />&nbsp;<Link to="/room-list">Go Back</Link>
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
                                <label className="label">Room No.</label>
                                <input type="text" class="form-control"
                                   value={Room_Number}  onChange={(e) => setRoom_Number(e.target.value)}
                                />
                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" class="form-control"
                                      value={Price}  onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div class="col-md-4 position-relative"

                            >
                                <label class="form-label">Room Type</label>
                                <Form.Select
                                    value={Room_Type}  onChange={(e) => setRoom_Type(e.target.value)}
                                >
                                    <option>Choose</option>
                                    <option value="Luxury">Luxury</option>
                                    <option value="Delux">Delux</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Super Delux">Super Delux</option>
                                </Form.Select>
                            </div>


                            <div class="col-md-4 position-relative" >
                                <label class="form-label">Available/Not-Available</label>
                                <Form.Select
                                    value={Avilable_Not}  onChange={(e) => setAvilable_Not(e.target.value)}
                                >
                                    <option>Choose</option>
                                    <option value="yes">yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                            </div>

                            <center>
                                <Button className="stu_btn"
                                    variant="success"
                                    type="submit" 
                                    onClick={(event) => submitform(event)}
                                    >
                                    Update Room
                                </Button>
                            </center>
                        </form>
                    </Row>
                </Container>
            </div>




        </>
    )
}

export default RoomEdit