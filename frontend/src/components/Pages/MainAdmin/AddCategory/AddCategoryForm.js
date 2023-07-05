import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEye } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddCategoryForm = () => {

    // form Function start
    const navigate = useNavigate()
    const [category_Type, setCategory_Type] = useState(null);
    const submitform = () => {
        try {
            axios.post(" http://localhost:4000/api/v1/category/new", {

                "Category_Type": category_Type,
            })
            toast.danger("Item Add Succesfully")
            navigate("/category-list")
        } catch (error) {
            console.log(error.response)

        }
    }

    // form Function end



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
                                            <IoIosCreate />&nbsp;<Link to="/list-category">Go Back</Link>
                                        </Button>
                                        <Button className='table-btn' variant="light" >
                                            <AiFillEye />&nbsp;<Link to="/seeallcategory">See-All-Category</Link>
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
                                <label className="label">Category Name</label>
                                <input type="text" class="form-control"
                                    value={category_Type} onChange={(e) => setCategory_Type(e.target.value)} required
                                />
                            </div>
                            <br />
                            <center>
                                <Button className="stu_btn"
                                    style={{ marginTop: "-120px" }}
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
            <br />



        </>
    )
}

export default AddCategoryForm