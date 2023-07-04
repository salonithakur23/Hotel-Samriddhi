import React, { useState, useEffect } from 'react'
import './Order.css'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const baseURL = "http://localhost:4000/api/v1/categories"

const allItem = "http://localhost:4000/api/v1/items?Category_Name="


const Order = () => {

  const [get, setGetAll] = useState(null);


  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      console.log("keshav", response)
    })
  }, [])





  const navigate = useNavigate()
  const [table_Number, setTable_Number] = useState(null);
  const [order_Time, setOrder_Time] = useState(null);
  const [category_Type, setCategory_Type] = useState(null)
  const [items, setItems] = useState([])
  




  const submitform = () => {
    try {
      axios.post("http://localhost:4000/api/v1/order/new", {
        "Table_Number": table_Number,
        "Order_Time": order_Time,
        // "Category_Name": category_Type,
      

      })
      alert("Order Submit Successfully")
      navigate("/res-billing")
    } catch (error) {
      console.log(error.response)

    }
  }

  const handleCategoriesItem = (val) => {
    setCategory_Type(val)
    axios.get(allItem + val).then((response) => {
      setItems(response.data.items);
      // console.log(response,"vv")
    })


  }



  console.log(items)
  const selectedItems = () => {
    return items?.map((item) => {

      return <div >
        <Container >
          <Row >
            <Col sm={3}>
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Text>
                    <Form.Check aria-label="option 1" />&nbsp;&nbsp;
                    <p
                    
                      className="label"><span><b>Item Name</b></span>- {item.Item_Name} </p>
                    <p
                   
                    ><span><b>Price</b></span> -{item.price}</p>
                    <div className="Opretor">
                      <button className='decrease'>-</button>
                      <p className='qnatity'
                      >0</p>
                      <button  className='increase'>+</button>
                    </div>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>


    })
  }
  return (
    <>

      <Container style={{ width: "90%", marginTop: "20px" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Order</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/res-billing">Go Back</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>

      


      <div className='form-div' >
        <Container>
          <Row>


            <form className="row g-4 p-3 registration-form" >

              <div class="col-md-4 position-relative">
                <label className="label">Table.no</label>
                <input type="text" class="form-control"
                  value={table_Number} onChange={(e) =>
                    setTable_Number(e.target.value)} required

                />

              </div>

              <div className="col-md-4 position-relative">
                <label className="label">Order Date & Time</label>
                <input type="datetime-local" name="Booking_Date_Time" className="form-control"
                  value={order_Time} onChange={(e) =>
                    setOrder_Time(e.target.value)} required
                // onChange={handleInputChange} value={Booking_Date_Time}
                />
              </div>



              <div className="col-md-4 position-relative"
              >
                <label className="form-label"> Category </label>
                <Form.Select name="Room_Type"
                  onChange={(e) => handleCategoriesItem(e.target.value)}
                >
                  <option value={category_Type}>select a category</option>
                  {get?.categories?.map((items) => (
                    <option >{items.Category_Type}</option>
                  ))}
                </Form.Select>
              </div>

              <Col sm={3} className='Item-container' >
                {selectedItems()}
              </Col>

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
      </div >



    </>
  )
}

export default Order