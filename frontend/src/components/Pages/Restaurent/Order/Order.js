import React, { useState } from 'react'
import './Order.css'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




const Order = () => {


  const navigate = useNavigate()
  const [table_Number, setTable_Number] = useState(null);
  const [order_Time, setOrder_Time] = useState(null);


  const submitform = () => {
      try {
          axios.post("http://localhost:4000/api/v1/order/new", {
              "Table_Number": table_Number,
              "Order_Time": order_Time,
          
          })
          alert("Order Submit Successfully")
          navigate("/res-billing")
      } catch (error) {
          console.log(error.response)

      }
  }



  const [showtext, setShowtext] = useState("View Category")
  const handletext = (e) => {
    const getvalue = e.target.value;

    if (getvalue == 1) {
      const show = "Egg Biryani"
      const item = "Price"
      setShowtext(show, item);

    } else if (getvalue == 2) {
      const show = "L.k.g ClassFees 700 Rs."
      setShowtext(show);
    } else if (getvalue == 3) {
      const show = "U.k.g ClassFees 700 Rs."
      setShowtext(show);
    } else if (getvalue == 4) {
      const show = "Ist ClassFees 800 Rs."
      setShowtext(show);
    }
    else {
      const show = "View Category"
      setShowtext(show);
    }

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
                />
              </div>



              <div className="col-md-4 position-relative"
              >
                <label className="form-label"> Category </label>
                <Form.Select name="Room_Type"
                  onChange={(e) => handletext(e)}
                >
                  <option>Choose</option>
                  {/* <option value="1">Biryani</option>
                  <option value="2">Dal</option>
                  <option value="3">Pulao</option>
                  <option value="4">Raita</option> */}

                </Form.Select>
                <div className='show'>
                  <div className='showtext'>{showtext}</div>
                </div>
              </div>


              <div className="col-md-2 position-relative d-flex">
                <Form.Check aria-label="option 1" />&nbsp;&nbsp;
                <label className="label">Price <sapn>200</sapn></label>

              </div>


              <div className="col-md-2 position-relative d-flex">
                <Form.Check aria-label="option 1" />&nbsp;&nbsp;
                <label className="label">Price <sapn>200</sapn></label>

              </div>

              <div className="col-md-2 position-relative d-flex">
                <Form.Check aria-label="option 1" />&nbsp;&nbsp;
                <label className="label">Price <sapn>200</sapn></label>

              </div>

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
      </div>



    </>
  )
}

export default Order