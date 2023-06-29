import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';



const EditItem = () => {
    
    const params = useParams();
    const navigate = useNavigate();
    const [specificItem, setSpecificItem] = useState("");
    const [Item_Name, setItem_Name] = useState(specificItem.Item_Name);
    const [price, setPrice] = useState(specificItem.price);
    const [Category_Name, setCategory_Name] = useState(specificItem.Category_Name);

    console.log(specificItem, "Check id from url")

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/item/${params.id}`).then((response) => {
            setSpecificItem(response.data);
            setItem_Name(response.data.item.Item_Name);
            setPrice(response.data.item.price);
            setCategory_Name(response.data.Category_Name);

        })
    }, [])


    const submitform = () => {
        try {
            axios.put(`http://localhost:4000/api/v1/item/${params.id}`, {
                "Item_Name":Item_Name,
                "price":price,
                "Category_Name":Category_Name,
            })
            toast.success("Item Updated Succesfully")
            navigate("/item-list")
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
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Edit Item</h5></th>
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
                                            <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
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
                                <label className="label">Item Name</label>
                                <input type="text" className="form-control"
                                 value={Item_Name} onChange={(e) => 
                                 setItem_Name(e.target.value)}   required />


                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}   required />


                            </div>


                            <div class="col-md-4 position-relative">
                                <label className="label">Category Name</label>
                                <input type="text" className="form-control" value={Category_Name} onChange={(e) => setCategory_Name(e.target.value)}  required />


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

export default EditItem