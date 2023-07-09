import React, { useState, useEffect, createContext } from 'react';
import './Order.css';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import ModalCamp from './ModalCamp';
import Layout from '../../../Header/Layout';
export const Context = createContext();




const baseURL = "http://localhost:4000/api/v1/categories";
const allItem = "http://localhost:4000/api/v1/items?Category_Name=";

const Order = ({post}) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const handleModel = () => {
    setOpen(true);
    setUser(post);
  };

  const [get, setGetAll] = useState(null);
  const [table_Number, setTable_Number] = useState('');
  // const [order_Time, setOrder_Time] = useState('');
  const [category_Type, setCategory_Type] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
    });
  }, []);

  const handleCategoriesItem = (val) => {
    setCategory_Type(val);
    axios.get(allItem + val).then((response) => {
      setItems(response.data.items);
    });
  };

  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
      setItemQuantities((prevItemQuantities) => ({
        ...prevItemQuantities,
        [item.Item_Name]: 1,
      }));
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter(
          (selectedItem) => selectedItem !== item
        )
      );
      setItemQuantities((prevItemQuantities) => {
        const updatedQuantities = { ...prevItemQuantities };
        delete updatedQuantities[item.Item_Name];
        return updatedQuantities;
      });
    }
    setCanSubmit(event.target.checked);
  };

  const selectedItemsList = items?.map((item) => (
    <div key={item.Item_Name} className="item-container">
   
   <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Text>
                  <Form.Check
                    aria-label="option 1"
                    onChange={(e) => handleCheckboxChange(e, item)}
                  />&nbsp;&nbsp;
                  <p className="label">
                    <span><b>Item Name</b></span>- {item.Item_Name}
                  </p>
                  <p><span><b>Price</b></span> -{item.price}</p>
                  <div className="Opretor">
                    <button
                      type="button"
                      className='decrease'
                      onClick={() => {
                        if (itemQuantities[item.Item_Name] > 1) {
                          setItemQuantities((prevItemQuantities) => ({
                            ...prevItemQuantities,
                            [item.Item_Name]: prevItemQuantities[item.Item_Name] - 1
                          }));
                        }
                      }}
                    >
                      -
                    </button>
                    <p className='quantity'>{itemQuantities[item.Item_Name] || 1}</p>
                    <button
                      type="button"
                      className='increase'
                      onClick={() => {
                        setItemQuantities((prevItemQuantities) => ({
                          ...prevItemQuantities,
                          [item.Item_Name]: (prevItemQuantities[item.Item_Name] || 1) + 1
                        }));
                      }}
                    >
                      +
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
    </div>
  ));


  const submitform = async (event) => {
    event.preventDefault();

    if (!table_Number || selectedItems.length === 0) {
      toast.error('Please fill in all the required fields and select at least one item.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/v1/order/new", {
        Table_Number: table_Number,
        Status: "Order in Progress",
        Items: selectedItems.map(item => ({
          Item_Name: item.Item_Name,
          price: item.price,
          Quantity: itemQuantities[item.Item_Name] || 1,
        })),
      });

      const orderId = response.data.order._id;
      // await axios.put(`http://localhost:4000/api/v1/order/status/${orderId}`, {
      //   newStatus: "Order Placed or taken"
      // });
      toast.success("Order Submitted Successfully");
      navigate("/res-billing");
    } catch (error) {
      console.log(error.response);
    }
  };


  return (
    <>
    <Layout />
      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className="main-table">
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp;Dashboard / Add New Order
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
                      <IoIosCreate />&nbsp;
                      <Link to="/res-billing">Go Back</Link>
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
            <td>
              <Button
                onClick={handleModel}
                variant="success"
                className="All-order float-end"
              >
                Preview
              </Button>
              {open && (
                <ModalCamp
                  open={open}
                  setOpen={setOpen}
                  selectedItems={selectedItems}
                  itemQuantities={itemQuantities}
                />
              )}
            </td>

            <form className="row g-4 p-3 registration-form">
              <div className="col-md-4 position-relative">
                <label className="label">Table Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={table_Number}
                  onChange={(e) => setTable_Number(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 position-relative">
                <label className="label"> Category </label>
                <Form.Select
                  name="Room_Type"
                  onChange={(e) => handleCategoriesItem(e.target.value)}
                >
                  <option value={category_Type}>Select a category</option>
                  {get?.categories?.map((category) => (
                    <option key={category.Category_Type}>
                      {category.Category_Type}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <hr />

              <Container>
                <div className="item-row">
                  {selectedItemsList}
                </div>
              </Container>
              {/* </Col> */}

              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                  disabled={!canSubmit}
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
  );
};

export default Order;
