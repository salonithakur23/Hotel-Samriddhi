import React from 'react'
import { Container , Row , Col, Table , Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {AiFillDashboard} from "react-icons/ai"
import { IoIosCreate } from 'react-icons/io'

const EditResBilling = () => {


  return (

   <>

<Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5><AiFillDashboard /> &nbsp;Dashboard / Add New Order</h5>
              </th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>
                    <Button className='table-btn' variant="light">
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

      <div className='form-div'>
        <Container>
          <Row>
            <form className="row g-4 p-3 registration-form">
              <div className="col-md-4 position-relative">
                <label className="label">Table.no</label>
                <input
                  type="text"
                  className="form-control"
                //   value={table_Number}
                //   onChange={(e) => setTable_Number(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 position-relative">
                <label className="label">Order Date & Time</label>
                <input
                  type="datetime-local"
                  name="Booking_Date_Time"
                  className="form-control"
                //   value={order_Time}
                //   onChange={(e) => setOrder_Time(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 position-relative">
                <label className="form-label"> Category </label>
                <Form.Select
                  name="Room_Type"
                //   onChange={(e) => handleCategoriesItem(e.target.value)}
                >
                  <option 
                //   value={category_Type}
                  >
                    Select a category</option>
                  {/* {get?.categories?.map((category) => (
                    <option key={category.Category_Type}>{category.Category_Type}</option>
                  ))} */}
                </Form.Select>
              </div>

              <Col sm={3} className='Item-container'>
                {/* {selectedItemsList} */}
              </Col>

              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                //   disabled={!canSubmit}
                //   onClick={submitform}
                >
                  Submit
                </Button>
              </center>
            </form>
          </Row>
        </Container>
      </div>


   
   
   
   </>

  )
}

export default EditResBilling
