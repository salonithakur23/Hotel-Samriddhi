import React, { useEffect, useState } from 'react'
import './Billing.css'
import HotelSidebar from '../../HotelSidebar'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard } from 'react-icons/ai';
import Layout from "../../../../Header/Layout"
import axios from 'axios';
import { toast } from 'react-toastify';


const baseURL = "http://localhost:4000/api/v1/room-bookings";

const Billing = () => {

    const [get, setGetAll] = useState(null);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setGetAll(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [get]);


    const handlePrintBill = () => {
        const printContent = document.getElementById('billing-card').innerHTML;
        const originalContent = document.body.innerHTML;
        const printElement = document.createElement('bill-container');
        printElement.innerHTML = printContent;
        const button = printElement.querySelector('.table-btns');
        if (button) {
            button.remove();
        }

        document.body.innerHTML = printElement.innerHTML;
        window.print();
        document.body.innerHTML = originalContent;
    };




    const printBill = () => {
      
        handlePrintBill();

    };



    return (

        <>

            <Layout />
            <HotelSidebar>
                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Billing Details</h5></th>
                            </tr>
                        </thead>
                    </Table>
                </Container>
                <Container>
                    <Row>



                        {get?.book?.map((items) => (
                            <Col md={4}>

                                <div className="containers" id="billing-card" >


                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 col-12 bill-container">
                                                <div className="header-section">
                                                    <div className="text-content">
                                                        <h1>Samriddhi Hotel</h1>
                                                    </div>
                                                </div>

                                                <div className="adress">
                                                    <p>
                                                        Bihar tel-789456123{" "}
                                                    </p>
                                                </div>

                                                {/* {get?.book?.map((items) => ( */}
                                                <div>


                                                    <div className="border"> </div>
                                                    <div className="order-number">
                                                        <div className="order">
                                                            <h1>Customer Details
                                                                {/* key={items._id} */}
                                                            </h1>

                                                            <p>Name:   <span className='float-end'>{items.Guest_Name}</span> </p>
                                                            <p>Phone Number:  <span className='float-end'>{items.Phone_Number} </span> </p>
                                                            <p>Address: <span className='float-end'>{items.Address}</span> </p>
                                                        </div>
                                                    </div>
                                                    <div className="border"> </div>
                                                    <div className="customer-section">
                                                        <h1>Stay Details</h1>
                                                        <p>Room Number : <span>{items.Room_Number}</span></p>
                                                        <p>Arrival Date : <span>{items.Checkin_Date_Time}</span></p>
                                                        <p>Booking Date : <span>{items.Booking_Date_Time}</span></p>
                                                        <p>Departure Date : <span>{items.Checkout_Date_Time}</span></p>
                                                        <p>Room Type: <span>{items.Room_BookType}</span></p>
                                                        <p>Total Number of days: <span> </span></p>
                                                        <p>Number of Rooms: <span>  </span></p>
                                                        <p>Number of Childres: <span>{items.Number_Of_Children}</span></p>
                                                        <p>Number of Adults: <span>{items.Number_Of_Adults}</span></p>
                                                    </div>
                                                    <div className="border"> </div>
                                                    <div className="Items-container">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th className="description">Date</th>
                                                                    <th className="description">Services</th>
                                                                    <th className="description">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="description">12-12-12</td>
                                                                    <td className="price">Food</td>
                                                                    <td className="amount">250</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="description">12-12-12</td>
                                                                    <td className="price">Cofee</td>
                                                                    <td className="amount">250</td>

                                                                </tr>

                                                            </tbody>
                                                            <h4 className='mt-4'>Total : <span id='total-price' > 233</span></h4>

                                                        </table>

                                                    </div>
                                                    {/* //    ))} */}
                                                    <div className="border"> </div>
                                                    <div className="footer">
                                                        <h1>Thanku for Coming!</h1>
                                                        <Button className="table-btns d-flex" variant="light" onClick={printBill}>
                                                            &#128065;Print Bill
                                                        </Button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </Col>
                        ))}

                    </Row>
                </Container>

            </HotelSidebar>


        </>
    )
}

export default Billing