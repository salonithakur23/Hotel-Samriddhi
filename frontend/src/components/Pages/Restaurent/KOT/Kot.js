
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Kot = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/order/${orderId}`);
                setOrder(response.data.order);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchOrder();
    }, [orderId]);

    const handlePrintKOT = () => {
        const printContent = document.getElementById('billing-card').innerHTML;
        const originalContent = document.body.innerHTML;
        const printElement = document.createElement('div');
        printElement.innerHTML = printContent;
        const button = printElement.querySelector('.table-btn');
        if (button) {
            button.remove();
        }

        document.body.innerHTML = printElement.innerHTML;
        window.print();
        document.body.innerHTML = originalContent;
    };


    if (!order) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Container className='main-col'>
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Print Bill</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div' >
                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/order">Create</Link>
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
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className='billing-card' id='billing-card'>
                                <h3 className='res-name'> Hotel Samriddhi</h3>
                                <h5>Phone.no: <span>8796541234</span></h5>
                                <h5 >Address: <span>Mansrowar</span></h5>
                                <h5>Gst.no: <span>1</span></h5>
                                <h5>Booking Date & Time: <span>{order.Order_Time}</span></h5>
                                <h5>Table No: <span>{order.Table_Number}</span></h5>
                                <Table responsive>
                                    <table className="table table-bordered border-secondary">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.Items.map((item) => (
                                                <tr key={item._id}>
                                                    <td>{item.Item_Name}</td>
                                                    <td>{item.Price}</td>
                                                    <td>{item.Quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <hr />
                                </Table>

                                <div className="d-flex text-center">
                                    <Button className="table-btn d-flex" variant="light" onClick={handlePrintKOT}>
                                        &#128065; Print KOT
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Kot;

