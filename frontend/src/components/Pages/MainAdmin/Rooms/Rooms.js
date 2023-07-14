import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard, } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Layout from '../../../Header/Layout';

const baseURL = 'http://localhost:4000/api/v1/room-categories';

const Room = () => {
    const [roomCategories, setRoomCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('');

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setRoomCategories(response.data.rooms);
        });
    }, []);

    const navigate = useNavigate();

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);

        const selectedRoomCategory = roomCategories.find(
            (category) => category.roomCategory === selectedCategory
        );

        if (selectedRoomCategory) {
            setPrice(selectedRoomCategory.price);
        } else {
            setPrice('');
        }
    };

    const submitForm = (event) => {
        event.preventDefault();

        try {
            axios
                .post('http://localhost:4000/api/v1/room/new', {
                    Room_Number: roomNumber,
                    Room_Type: selectedCategory,
                    Price: price,
                    Avilable_Not: availability,
                })
                .then(() => {
                    toast.success('Room Added Successfully');
                    navigate('/room-list');
                });
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <>
            <Layout />

            <Container style={{ width: '90%', marginTop: '20px' }}>
                <Table striped bordered hover className="main-table">
                    <thead>
                        <tr>
                            <th>
                                <h5>
                                    <AiFillDashboard /> &nbsp;Dashboard / Add New Room
                                </h5>
                            </th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className="table-div">
                                        <Button className="table-btn" variant="light">
                                            <IoIosCreate />
                                            &nbsp;
                                            <Link to="/room-list">Go Back</Link>
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
            <div className="form-div">
                <Container>
                    <Row>
                        <Link to="/room-category">
                            <Button className="float-end" variant="success">
                                Add Room Category
                            </Button>
                        </Link>
                        <form className="row g-4 p-3 registration-form">
                            <div className="col-md-4 position-relative">
                                <label className="label">Room No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={roomNumber}
                                    onChange={(e) => setRoomNumber(e.target.value)}
                                    id="inputname"
                                    required
                                />
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="form-label">Room Category</label>
                                <Form.Select
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    required
                                >
                                    <option>Choose</option>
                                    {roomCategories.map((category) => (
                                        <option
                                            key={category._id}
                                            value={category.roomCategory}
                                        >
                                            {category.roomCategory}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="form-label">Available/Not-Available</label>
                                <Form.Select
                                    value={availability}
                                    onChange={(e) => setAvailability(e.target.value)}
                                    required
                                >
                                    <option>Choose</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </div>

                            <center>
                                <Button
                                    className="stu_btn"
                                    variant="success"
                                    type="submit"
                                    onClick={submitForm}
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

export default Room;
