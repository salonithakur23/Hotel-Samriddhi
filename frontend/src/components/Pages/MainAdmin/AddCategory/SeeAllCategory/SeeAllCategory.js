import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Table, Button, Alert } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete } from 'react-icons/ai';
import "./category.css"
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';



const baseURL = "http://localhost:4000/api/v1/categories"

const allItem = "http://localhost:4000/api/v1/items?Category_Name="


const SeeAllCategory = () => {

    const [show, setShow] = useState(true);
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
                    <div className='card-item'>
                  <Card style={{ width: "15rem" }}>
                    <Card.Body>
                      <Card.Text>
                        {/* <Form.Check aria-label="option 1" />&nbsp;&nbsp; */}
                        <p
                        
                          className="label"><span><b>Item Name</b></span>- {item.Item_Name} </p>
                        <p
                       
                        ><span><b>Price</b></span> -{item.price}</p>
                        {/* <div className="Opretor">
                          <button className='decrease'>-</button>
                          <p className='qnatity'
                          >0</p>
                          <button  className='increase'>+</button>
                        </div> */}
    
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </div>
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
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / See All Categories</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                       
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

              {/* <div class="col-md-4 position-relative">
                <label className="label">Table.no</label>
                <input type="text" class="form-control"
                  value={table_Number} onChange={(e) =>
                    setTable_Number(e.target.value)} required
                />
              </div> */}

              {/* <div className="col-md-4 position-relative">
                <label className="label">Order Date & Time</label>
                <input type="datetime-local" name="Booking_Date_Time" className="form-control"
                  value={order_Time} onChange={(e) =>
                    setOrder_Time(e.target.value)} required
                />
              </div> */}



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
              <hr></hr>

              

              {/* <center>
                <Button className="stu_btn"
                  variant="success"
                  type="submit"
                  onClick={submitform}
                >
                  Submit
                </Button>



              </center> */}

              <Col sm={3} className='Item-container' >
                {selectedItems()}
              </Col>

            </form>
          </Row>
        </Container>
      </div >






{/* <Container>
    <Row>
        <Col sm ={3}>
        <Alert show={show}
         variant="light"
        >
        
      
        <div >
           

           

       
        <p className='category' >
      
            </p>
      

        
        </div>
        
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="light">
            Close me
          </Button>
        </div>
      </Alert>


      {!show && <Button className='btn-category' onClick={() => setShow(true)} >
  
        </Button>}

    
</Col>


        <Col sm ={3}>hjhj</Col>
        <Col sm ={3}>hjhj</Col>
        <Col sm ={3}>hjhj</Col>
    </Row>
</Container> */}

{/* <Container>
    <Row>
        <Col sm ={3}><Alert show={show1} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow1(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show1 && <Button onClick={() => setShow1(true)}>Pizza</Button>}
</Col>


        <Col sm ={3}>hjhj</Col>
        <Col sm ={3}>hjhj</Col>
        <Col sm ={3}>hjhj</Col>
    </Row>
</Container> */}
            


        </>
    )
}

export default SeeAllCategory