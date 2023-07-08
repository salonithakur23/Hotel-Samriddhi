
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import './Bill.css';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../../Header/Layout';

const Bill = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [gstAmount, setGstAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cash');

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
      const total = calculateTotal(order.Items);
      const gst = (total * 5) / 100;
      setGstAmount(gst);
    }
  }, [order]);

  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.Price * item.Quantity;
    });
    return total;
  };

  const handlePrintBill = () => {
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

  const saveBillData = async () => {
    if (order) {
      try {
        const billAPI = 'http://localhost:4000/api/v1/bill/new';
        const total = calculateTotal(order.Items);
        const billData = {
          orderId: order._id,
          resName: 'Samriddhi Hotel ',
          phoneNumber: '8796541234',
          address: 'Mansrowar',
          gstNumber: '1',
          bookingDateTime: order.Order_Time,
          tableNumber: order.Table_Number,
          total: total,
          items: order.Items.map((item) => ({
            item: item.Item_Name,
            price: item.Price,
            quantity: item.Quantity,
            price_after_Quantity: item.Price * item.Quantity,
          })),
          paymentMethod: paymentMethod, 
        };

        const response = await axios.post(billAPI, billData);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const printBill = () => {
    saveBillData();
    handlePrintBill();
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Layout />
      <Container className="main-col">
        <Table striped bordered hover className="main-table">
          <thead>
            <tr>

              <h5>
                <AiFillDashboard /> &nbsp; Dashboard/ Bill
              </h5>

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
                      <IoIosCreate />&nbsp;<Link to="/res-billing">Create</Link>
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
              <div className="billing-cards-2" id="billing-card">
                <h3 className="res-name text-style">Hotel Samriddhi</h3>
                <h5 className='text-style'>Phone.no: <span>8796541234</span></h5>
                <h5 className='text-style'>Address: <span>Mansrowar</span></h5>
                <h5 className='text-style'>Gst.no: <span>1</span></h5>
                <h5 className='text-style'>Booking Date&Time: <span>{order.Order_Time}</span></h5>
                <h5 className='text-style'>Table No.: <span>{order.Table_Number}</span></h5>
                <Table responsive>
                  <table className="table table-bordered border-secondary">
                    <thead>
                      <tr className='text-style'>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.Items.map((item) => (
                        <tr key={item._id} className='text-style'>
                          <td>{item.Item_Name}</td>
                          <td>{item.Price}</td>
                          <td>{item.Quantity}</td>
                          <td>{item.Price * item.Quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr />
                  <h5 className="mt-2 text-style">
                    Total Price: <span className="float-end">{calculateTotal(order.Items)}</span>
                  </h5>
                  <h5 className="mt-2 text-style">GST (5%): <span className="float-end">{gstAmount.toFixed(2)}</span></h5>
                  <h5 className="mt-2 text-style">Total (incl. GST): <span className="float-end">{(calculateTotal(order.Items) + gstAmount).toFixed(2)}</span></h5>
                  {/* Display selected payment method */}
                  <h5 className='text-style'>Payment Method <span className="float-end">{paymentMethod}</span></h5>
                </Table>
                <div>
                <Button className="table-btns d-flex" variant="light" onClick={printBill}>
                    &#128065;Print Bill
                  </Button>
                  <span className="float-end">
                    <div className="QR-img-box">
                      <img className="fill-img-box" src="/img/qr_img.png" alt="QR Code" />
                    </div>
                  </span>
                </div>
              </div>
            </Col>
           
            <Col sm={4}>
              {/* Payment Method Form */}
              <div className="payment-form">
                <h4 className='text-style'> Select Payment Method:</h4>
                <select className='select'
                 onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option className='text-style'  value={paymentMethod}>Choose</option>
                  <option value="cash" className='text-style'>Cash</option>
                  <option value="UPI" className='text-style'>UPI</option>
                </select>
              </div>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Bill;
