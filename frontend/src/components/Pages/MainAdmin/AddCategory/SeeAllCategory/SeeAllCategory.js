import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Table, Button, Alert } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete } from 'react-icons/ai';
import "./category.css"
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Layout from '../../../../Header/Layout';
// import Layout from '../../../Header/Layout';





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



  const handleCategoriesItem = (val) => {
    setCategory_Type(val)
    axios.get(allItem + val).then((response) => {
      setItems(response.data.items);
      // console.log(response,"vv")
    })


  }

  console.log(items);

  const selectedItems = () => {
    return items?.map((item) => {
      return (
        <div className="item-container">
          <Card  style={{ width: "15rem" }}>
            <Card.Body className='card-item'> 
              <Card.Text>
                <p className="label">
                  <span><b>Item Name</b></span> - {item.Item_Name}
                </p>
                <p>
                  <span><b>Price</b></span> - {item.price}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };



  return (
    <>
      <Layout />
      <Container style={{ width: "90%", marginTop: "20px" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / See All Categories</h5></th>
            </tr>
          </thead>
        </Table>
        {/* <Row> */}
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>


                  </div>
                </th>
              </tr>
            </thead>
          </Table> */}
          <hr />
        {/* </Row> */}
      </Container>

      <div className='form-div' >
        <Container>
          <Row>


            <form className="row g-4 p-3 registration-form" >

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

              <Container>
                <div className="item-row">
                  {selectedItems()}
                </div>
              </Container>


            </form>
          </Row>
        </Container>
      </div >


    </>
  )
}

export default SeeAllCategory