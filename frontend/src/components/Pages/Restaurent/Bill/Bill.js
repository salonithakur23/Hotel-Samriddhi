import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import './Bill.css';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bill = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [gstAmount, setGstAmount] = useState(0);

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

  useEffect(() => {
    if (order) {
      const billAPI = 'http://localhost:4000/api/v1/bills'; // Replace with the actual URL of your Bill API endpoint

      const resbillingData = {
        orderId: order._id,
        // Extract other required data from the order object and pass it to the Bill API
        // ...
      };

      axios
        .post(billAPI, resbillingData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [order]);

  useEffect(() => {
    if (order) {
      const total = calculateTotal(order.Items);
      const gst = (total * 5) / 100; // Calculate GST amount
      setGstAmount(gst);
    }
  }, [order]);

  if (!order) {
    return <div>Loading...</div>;
  }

  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.Price * item.Quantity;
    });
    return total;
  };

  return (
    <>
      <Container className="main-col">
        <Table striped bordered hover className="main-table">
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp; Dashboard/ Bill
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

      <div className="form-div">
        <Container>
          <Row>
            <Col sm={4}>
              <div className="billing-card">
                <h3 className="res-name">Samriddhi</h3>
                <h5>Phone.no: <span>8796541234</span></h5>
                <h5>Address: <span>mansrowar</span></h5>
                <h5>Gst.no: <span>1</span></h5>
                <h5>Booking Date&Time: <span>{order.Order_Time}</span></h5>
                <h5>Table No.: <span>{order.Table_Number}</span></h5>
                <Table responsive>
                  <table className="table table-bordered border-secondary">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.Items.map((item) => (
                        <tr key={item._id}>
                          <td>{item.Item_Name}</td>
                          <td>{item.Price}</td>
                          <td>{item.Quantity}</td>
                          <td>{item.Price * item.Quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr />
                  <h5 className="mt-2">Total: <span className="float-end">{calculateTotal(order.Items)}</span></h5>
                  <h5 className="mt-2">GST (5%): <span className="float-end">{gstAmount.toFixed(2)}</span></h5>
                  <h5 className="mt-2">Total (incl. GST): <span className="float-end">{(calculateTotal(order.Items) + gstAmount).toFixed(2)}</span></h5>
                </Table>

                <div className="d-flex text-center">
                  <Link to={`/bill/${order._id}`}>
                    <Button className="table-btn d-flex" variant="light">
                      &#128065; Bill
                    </Button>
                  </Link>
                  <span className="float-end ">
                    <div className="QR-img-box">
                      <img className="fill-img-box" src="/img/qr_img.png" alt="QR Code" />
                    </div>
                  </span>
                </div>
              </div>
            </Col>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Bill;
