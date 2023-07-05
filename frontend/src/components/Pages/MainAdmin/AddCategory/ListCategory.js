import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const baseURL = " http://localhost:4000/api/v1/categories"
const ListCategory = () => {

    //   List Function Start
    const [get, setGetAll] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);
            // console.log(response)
        })
    }, [get])

    const deleteData = (id) => {
        // console.log(id)
        axios.delete(`http://localhost:4000/api/v1/category/${id}`).then(response => {
            toast.success("Item deleted Succesfully")
        })
            .catch(error => {
                console.log(error)
            })

    }
    if (!get) return null;
    //   List Function end

    return (
        <>
            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Category</h5></th>
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
                                            <IoIosCreate />&nbsp;<Link to="/add-category">Go Back</Link>
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
                <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Category-Details</h5>
                <Container>
                    <Row>
                        <Table responsive>
                            <table class="table table-bordered border-secondary">
                                <thead>
                                    <tr>
                                        <th>Category Type</th>
                                        <th>Action Edit</th>
                                        <th>Action Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {get?.categories?.map((items) => (
                                        <tr>
                                            <td>{items.Category_Type}</td>
                                            <td>
                                                <Link to={`/Editcategory/${items._id}`}>
                                                    <Button className='table-btn'

                                                        variant="light" >
                                                        &#9998;Edit
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Button className='table-btn'
                                                    variant="light"
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
                    </Row>
                </Container>

            </div>




        </>
    )
}

export default ListCategory