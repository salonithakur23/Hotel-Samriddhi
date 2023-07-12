import React, { useState ,useEffect} from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Layout from '../../../Header/Layout';

const baseURL = "http://localhost:4000/api/v1/room-categories";

const Room = () => {

    const [get, setGetAll] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);
        });
    }, []);


    const navigate = useNavigate()
    const [room_Number, setRoom_Number] = useState(null);
    const [room_Type, setRoom_Type] = useState(null);
    const [price, setPrice] = useState(null);
    const [avilable_Not, setAvilable_Not] = useState(null);

    const submitform = (event) => {
        event.preventDefault();
        try {
            axios.post("http://localhost:4000/api/v1/room/new", {
                "Room_Number": room_Number,
                "Room_Type": room_Type,
                "Price": price,
                "Avilable_Not": avilable_Not,
            })
            toast.success("Room Add Succesfully")
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
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Room</h5></th>
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
                        <Link to="/room-category">
                            <Button className='float-end ' variant='success'>
                                Add-Room-Category
                            </Button>
                        </Link>
                        <form className="row g-4 p-3 registration-form" >

                            <div class="col-md-4 position-relative">
                                <label className="label">Room No.</label>
                                <input type="text" class="form-control"
                                    value={room_Number} onChange={(e) => setRoom_Number(e.target.value)} id="inputname" required
                                />
                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" class="form-control"
                                    value={price} onChange={(e) => setPrice(e.target.value)} required
                                />
                            </div>

                            <div class="col-md-4 position-relative"

                            >
                                <label class="form-label">Room Type</label>
                                <Form.Select
                                    value={room_Type} onChange={(e) => setRoom_Type(e.target.value)} required
                                >
                                    <option>Choose</option>
                                    {get?.rooms?.map((items) => (
                                        <option key={items._id} value={items.roomCategory}>{items.roomCategory}</option>
                                    ))}

                                </Form.Select>
                            </div>


                            <div class="col-md-4 position-relative" >
                                <label class="form-label">Available/Not-Available</label>
                                <Form.Select
                                    value={avilable_Not} onChange={(e) => setAvilable_Not(e.target.value)} required
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

export default Room