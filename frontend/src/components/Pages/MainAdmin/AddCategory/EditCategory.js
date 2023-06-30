import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [specificItem, setSpecificItem] = useState("");
    const [Category_Name, setCategory_Name] = useState(specificItem.Category_Name);

    console.log(specificItem, "Check id from url")

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/item/${params.id}`).then((response) => {
            setSpecificItem(response.data);
            setCategory_Name(response.data.item.Category_Name);

        })
    }, [])


    const submitform = () => {
        try {
            axios.put(`http://localhost:4000/api/v1/item/${params.id}`, {
                "Category_Name": Category_Name,
            })
            toast.success("Item Updated Succesfully")
            navigate("/category-list")
        } catch (error) {
            console.log(error.response)

        }
    }
    console.log(specificItem)

    return (
        <>
            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Update Category Items</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                        {/* <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
                                        </Button> */}
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
                                    value={Category_Name} onChange={(e) => setCategory_Name(e.target.value)} required
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



        </>
    )
}

export default EditCategory