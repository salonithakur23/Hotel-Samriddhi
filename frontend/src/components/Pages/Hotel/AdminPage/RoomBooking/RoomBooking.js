import React, { useState, useEffect } from 'react'
import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './RoomBooking.css'
import Layout from '../../../../Header/Layout';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:4000/api/v1/rooms"


const RoomBooking = () => {

    const [get, setGetAll] = useState(null);
 
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);
        })
    }, [get])

    const navigate = useNavigate()
    const [guest_Name, setGuest_Name] = useState(null);
    const [phone_Number, setPhone_Number] = useState(null);
    const [address, setAddress] = useState(null);
    const [room_Number, setRoom_Number] = useState(null);
    const [booking_Date_Time, setBooking_Date_Time] = useState(null);
    const [checkin_Date_Time, setCheckin_Date_Time] = useState(null);
    const [checkout_Date_Time, setCheckout_Date_Time] = useState(null);
    const [number_Of_Children, setNumber_Of_Children] = useState(null);
    const [number_Of_Adults, setNumber_Of_Adults] = useState(null);
    const [special_Request, setSpecial_Request] = useState(null);
    const [room_Type, setRoom_Type] = useState(null)
    const [price, setPrice] = useState(null)

    const submitform = () => {
        try {
            axios.post("http://localhost:4000/api/v1/room-booking/new", {
                "Guest_Name": guest_Name,
                "Phone_Number": phone_Number,
                "Address": address,
                "Room_Number": room_Number,
                "Booking_Date_Time": booking_Date_Time,
                "Checkin_Date_Time": checkin_Date_Time,
                "Checkout_Date_Time": checkout_Date_Time,
                "Number_Of_Adults":number_Of_Adults,
                "Number_Of_Children": number_Of_Children,
                "Special_Request": special_Request,
                "Room_BookType":room_Type,
                "Price":price,


            })
            toast.success("Room Add Succesfully")
            navigate("/roomlist")
        } catch (error) {
            console.log(error.response)
        }
    }

  


    return (
        <>
            <Layout />
            <HotelSidebar>
                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Booking Room</h5></th>
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
                                                <IoIosCreate />&nbsp;<Link to="/roomlist">Go Back</Link>
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
                                    <label className="label">Guest Name</label>
                                    <input type="text" class="form-control"
                                        value={guest_Name} onChange={(e) => setGuest_Name(e.target.value)} required
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Phone No.</label>
                                    <input type="text" class="form-control"
                                        value={phone_Number} onChange={(e) => setPhone_Number(e.target.value)}required
                                    />

                                </div>


                                <div class="col-md-4 position-relative">
                                    <label className="label">Address</label>
                                    <input type="text" class="form-control"
                                        value={address} onChange={(e) => setAddress(e.target.value)}required
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Room No.</label>
                                    <input type="text" class="form-control"
                                        value={room_Number} onChange={(e) => setRoom_Number(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Price.</label>
                                    <input type="text" class="form-control"
                                        // value={price} onChange={(e) => setPrice(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative"

                                >
                                    <label class="form-label">Room Type</label>
                                    <Form.Select
                                        onChange={(e) => setRoom_Type(e.target.value)}
                                        required
                                    >
                                        <option value={room_Type}>Choose</option>
                                        {get?.rom?.map((items) => (
                                            <option>{items.Room_Type}</option>
                                        ))}
                                    </Form.Select>
                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Booking Date</label>
                                    <input type="datetime-local" class="form-control"
                                        value={booking_Date_Time} onChange={(e) => setBooking_Date_Time(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Arrival Date</label>
                                    <input type="datetime-local" class="form-control"
                                        value={checkin_Date_Time} onChange={(e) => setCheckin_Date_Time(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Departure Date</label>
                                    <input type="datetime-local" class="form-control"
                                        value={checkout_Date_Time} onChange={(e) => setCheckout_Date_Time(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Number Of Adults</label>
                                    <input type="text" class="form-control"
                                        value={number_Of_Adults} onChange={(e) => setNumber_Of_Adults(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Number Of Children</label>
                                    <input type="text" class="form-control"
                                        value={number_Of_Children} onChange={(e) => setNumber_Of_Children(e.target.value)}required
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Special Request</label>
                                    <input type="text" class="form-control"
                                        value={special_Request} onChange={(e) => setSpecial_Request(e.target.value)}required
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
            </HotelSidebar>




        </>
    )
}

export default RoomBooking