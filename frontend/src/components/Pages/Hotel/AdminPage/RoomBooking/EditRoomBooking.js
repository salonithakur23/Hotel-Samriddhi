import React, { useState, useEffect } from 'react'
import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './RoomBooking.css'
import Layout from '../../../../Header/Layout';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


const baseURL = "http://localhost:4000/api/v1/rooms"

const EditRoomBooking = () => {

    const [get, setGetAll] = useState(null);
    

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);

        })
    }, [get])

    const params = useParams();
    const navigate = useNavigate();
    const [specificGuest, setSpecificGuest] = useState("");
    const [Guest_Name, setGuest_Name] = useState(specificGuest.Guest_Name);
    const [Phone_Number, setPhone_Number] = useState(specificGuest.Phone_Number);
    const [Address, setAddress] = useState(specificGuest.Address);
    const [Room_Number, setRoom_Number] = useState(specificGuest.Room_Number);
    const [Booking_Date_Time, setBooking_Date_Time] = useState(specificGuest.Booking_Date_Time);
    const [Checkin_Date_Time, setCheckin_Date_Time] = useState(specificGuest.Checkin_Date_Time);
    const [Checkout_Date_Time, setCheckout_Date_Time] = useState(specificGuest.Checkout_Date_Time);
    const [Number_Of_Children, setNumber_Of_Children] = useState(specificGuest.Number_Of_Children);
    const [Number_Of_Adults, setNumber_Of_Adults] = useState(specificGuest.Number_Of_Adults);
    const [Special_Request, setSpecial_Request] = useState(specificGuest.Special_Request);
    const [Room_BookType, setRoom_BookType] = useState(specificGuest.Room_BookType)
    const [room_Type, setRoom_Type] = useState(null)



    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/room-booking/${params.id}`).then((response) => {
            setSpecificGuest(response.data);
            setGuest_Name(response.data.book.Guest_Name);
            setPhone_Number(response.data.book.Phone_Number);
            setAddress(response.data.book.Address);
            setRoom_Number(response.data.book.Room_Number);
            setBooking_Date_Time(response.data.book.Booking_Date_Time);
            setCheckin_Date_Time(response.data.book.Checkin_Date_Time);
            setCheckout_Date_Time(response.data.book.Checkout_Date_Time);
            setNumber_Of_Children(response.data.book.Number_Of_Children);
            setNumber_Of_Adults(response.data.book.Number_Of_Adults);
            setSpecial_Request(response.data.book.Special_Request);
            setRoom_BookType(response.data.book.Room_BookType);
        })
    }, [])


    const submitform = () => {
        try {
            axios.put(`http://localhost:4000/api/v1/room-booking/${params.id}`, {
                "Guest_Name": Guest_Name,
                "Phone_Number": Phone_Number,
                "Address": Address,
                "Room_Number": Room_Number,
                "Booking_Date_Time": Booking_Date_Time,
                "Checkin_Date_Time": Checkin_Date_Time,
                "Checkout_Date_Time": Checkout_Date_Time,
                "Number_Of_Children": Number_Of_Children,
                "Number_Of_Adults": Number_Of_Adults,
                "Special_Request": Special_Request,
                "Room_BookType": room_Type

            })
            toast.success("Guest Updated Succesfully")
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
                                        value={Guest_Name} onChange={(e) => setGuest_Name(e.target.value)}
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Phone No.</label>
                                    <input type="text" class="form-control"
                                        value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)}
                                    />

                                </div>


                                <div class="col-md-4 position-relative">
                                    <label className="label">Address</label>
                                    <input type="text" class="form-control"
                                        value={Address} onChange={(e) => setAddress(e.target.value)}
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Room No.</label>
                                    <input type="text" class="form-control"
                                        value={Room_Number} onChange={(e) => setRoom_Number(e.target.value)}
                                    />

                                </div>
                                <div class="col-md-4 position-relative"

                                >
                                    <label class="form-label">Room Type</label>
                                    
                                    <Form.Select
                                        onChange={(e) => setRoom_Type(e.target.value)}
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
                                        value={Booking_Date_Time} onChange={(e) => setBooking_Date_Time(e.target.value)}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Arrival Date</label>
                                    <input type="datetime-local" class="form-control"
                                        value={Checkin_Date_Time} onChange={(e) => setCheckin_Date_Time(e.target.value)}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Departure Date</label>
                                    <input type="datetime-local" class="form-control"
                                        value={Checkout_Date_Time} onChange={(e) => setCheckout_Date_Time(e.target.value)}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Number Of Adults</label>
                                    <input type="text" class="form-control"
                                        value={Number_Of_Adults} onChange={(e) => setNumber_Of_Adults(e.target.value)}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Number Of Children</label>
                                    <input type="text" class="form-control"
                                        value={Number_Of_Children} onChange={(e) => setNumber_Of_Children(e.target.value)}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Special Request</label>
                                    <input type="text" class="form-control"
                                        value={Special_Request} onChange={(e) => setSpecial_Request(e.target.value)}
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

export default EditRoomBooking










