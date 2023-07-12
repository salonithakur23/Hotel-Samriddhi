import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../../../Header/Layout';


const baseURL = "http://localhost:4000/api/v1/rooms"



const Rooms = () => {

    const [get, setGetAll] = useState(null);




    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);

        })

    }, [get])


    const deleteData = (id) => {

        axios.delete(`http://localhost:4000/api/v1/room/${id}`).then(response => {

            toast.success("Item has been deleted successfully")
        })
            .catch(error => {
                console.log(error)
            })

    }
    if (!get) return null;


    return (
        <>

            <Layout />
            <Container style={{ width: "90%", marginTop: "30px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dashboard / Rooms</h5></th>
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
                                            <IoIosCreate />
                                        </Button>
                                        <Button className='table-btn' variant="light" >
                                            <AiFillEdit />
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>

            {/* <div className="post-table"> */}
            <div className='form-div'>

                <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room-Details</h5>
                <Container>
                    <Table responsive>
                        <table class="table table-bordered border-secondary">
                            <thead>
                                <tr>
                                    <th>Room No.</th>
                                    <th>Room Type</th>
                                    <th>Price</th>
                                    <th>Avaibale</th>
                                    <th>Action Edit</th>
                                    <th>Action Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {get?.rom?.map((items) => (
                                    <tr>
                                        <td>{items.Room_Number}</td>
                                        <td>{items.Room_Type}</td>
                                        <td>{items.Price}</td>
                                        <td>{items.Avilable_Not}</td>

                                        <td>

                                            <Link to={`/roomEdit/${items._id}`}>
                                                <Button className='table-btn'
                                                    variant="light" >
                                                    &#9998;Edit
                                                </Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button className='table-btn' variant="light"
                                                onClick={(e) => { deleteData(items._id) }} value={"Delete"}
                                            >
                                                <span className='delete-icon'>&#x2717;</span>Delete
                                            </Button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Table>
                </Container>

            </div>



        </>
    )
}

export default Rooms