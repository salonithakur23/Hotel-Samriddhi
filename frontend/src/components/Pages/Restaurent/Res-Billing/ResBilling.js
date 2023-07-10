import React, { useState, useEffect } from 'react';
import './ResBilling.css';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../../Header/Layout';

const baseURL = 'http://localhost:4000/api/v1/orders';


const ResBilling = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setOrders(response.data?.orders);
    });
  }, []);


  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.Quantity;
    });
    return total;
  };

  const handleKOTClick = async (orderId) => {
    try {
      const updatedOrder = await axios.put(`http://localhost:4000/api/v1/order/status/${orderId}`, {
        newStatus: "Order in the Kitchen"
      });
      toast.success("Order status updated successfully");
    } catch (error) {
      console.log(error.response);
      toast.error("Failed to update order status");
    }
  };

  const handleBillClick = async (orderId) => {
    try {
      const updatedOrder = await axios.put(`http://localhost:4000/api/v1/order/status/${orderId}`, {
        newStatus: " Order Complete"
      });
      toast.success("Order status updated successfully");
    } catch (error) {
      console.log(error.response);
      toast.error("Failed to update order status");
    }
  };


  if (orders.length === 0) {
    return (
      <div className="no-orders">
        <h3>There is no order yet.</h3>
        <Button className="table-btn" variant="light">
          <IoIosCreate />&nbsp;<Link to="/order">Create an Order</Link>
        </Button>
      </div>
    );
  }

console.log(orders)
  return (


    <>
      <Layout />
      <Container className="main-col">
        <Table striped bordered hover className="main-table">
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp; Dashboard/ Order-Details
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
            {orders.map((order) => (
              <Col sm={4} key={order._id}>
                <div className="billing-card">
                  <h5>
                    Status: <span>{order.Status}</span>
                  </h5>
                  <h3 className="res-name">Samriddhi Hotel</h3>
                  <h5>
                    Phone.no : <span>8796541234</span>
                  </h5>
                  <h5>
                    Address : <span>Mansrowar</span>
                  </h5>
                  <h5>
                    Gst.no : <span>1</span>
                  </h5>
                  <h5>
                    Table No :<span> {order.Table_Number}</span>
                  </h5>
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
                            <td>{item.price}</td>
                            <td>{item.Quantity}</td>
                            <td>{item.price * item.Quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <hr></hr>
                    <h5 className="mt-2">
                      Total: <span className="float-end">{calculateTotal(order.Items)}</span>
                    </h5>
                  </Table>
                  <div className="d-flex text-center">
                    <Link to={`/KOT/${order._id}`}>
                      <Button className="table-btn" variant="light" onClick={() => handleKOTClick(order._id)}>
                        &#128065; KOT
                      </Button>
                    </Link>
                    <Link to={`/EditResBilling/${order._id}`}>
                      <Button className="table-btn " variant="light">
                        &#128065;Edit
                      </Button>
                    </Link>
                    <Link to={`/bill/${order._id}`}>
                      <Button className="table-btn" variant="light" onClick={() => handleBillClick(order._id)}>
                        &#128065; Bill
                      </Button>
                    </Link>
                  </div>
                </div>
                <br />
                <br />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ResBilling;

