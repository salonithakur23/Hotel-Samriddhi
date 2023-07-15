import React from 'react'
import './Billing.css'
import HotelSidebar from '../../HotelSidebar'
import { Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard } from 'react-icons/ai';
import Layout from "../../../../Header/Layout"

const Billing = () => {

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


                        <div className="containers">
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
                                        <div className="border"> </div>
                                        <div className="order-number">
                                            <div className="order">
                                                <h1>Customer Details</h1>
                                                <p>Name: <span>Pooja</span></p>
                                                <p>Phone Number: <span>9998765432</span></p>
                                                <p>Address: <span>Jabbu ka Naala</span></p>
                                            </div>
                                        </div>
                                        <div className="border"> </div>
                                        <div className="customer-section">
                                            <h1>Stay Details</h1>
                                            <p>Arrival Date : <span>12-12-12</span></p>
                                            <p>Booking Date : <span>12-12-12</span></p>
                                            <p>Departure Date : <span>13-12-12</span></p>
                                            <p>Total Number of days: <span>9</span></p>
                                            <p>Room Type: <span>Delux</span></p>
                                            <p>Number of Rooms: <span>2</span></p>
                                            <p>Number of Childres: <span>99</span></p>
                                            <p>Number of Adults: <span>99</span></p>
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
                                        <div className="border"> </div>
                                        <div className="footer">
                                            <h1>Thanku for Coming!</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>

            </HotelSidebar>


        </>
    )
}

export default Billing