import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard, } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../../../Header/Layout'

const EditRoomCategory = () => {


  const params = useParams();
  const navigate = useNavigate();
  const [specificGuest, setSpecificGuest] = useState("");
  const [roomCategory, setRoomCategory] = useState(specificGuest.roomCategory);
  const [price, setPrice] = useState(specificGuest.price);
  console.log(specificGuest, "Check id from url")

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/room-category/${params.id}`).then((response) => {
      setSpecificGuest(response.data);
      setRoomCategory(response.data.categoryroom.roomCategory);
      setPrice(response.data.categoryroom.price);
    })
  }, [])

  const submitform = () => {
    try {
      axios.put(`http://localhost:4000/api/v1/room-category/${params.id}`, {

        "roomCategory": roomCategory,
        "price": price,
      })
      toast.success("Room Updated Succesfully")
      navigate("/room-category-list")
    } catch (error) {
      console.log(error.response)

    }
  }



  return (
    <>
      <Layout />
      <Container style={{ width: "90%", marginTop: "20px" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Room Category</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/room-category-list">Go Back</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>
      {/* form section start */}
      <div className='form-div' >
        <Container>
          <Row>
            <form className="row g-4 p-3 registration-form" >
              <div class="col-md-4 position-relative">
                <label className="label">Room-Category.</label>
                <input type="text" class="form-control"
                  value={roomCategory} onChange={(e) => setRoomCategory(e.target.value)} id="inputname" required
                />
              </div>
              <div class="col-md-4 position-relative">
                <label className="label">Price.</label>
                <input type="text" class="form-control"
                  value={price} onChange={(e) => setPrice(e.target.value)} required
                />
              </div>
              <center>
                <Button className="stu_btn"
                  variant="success"
                  type="submit" onClick={submitform}
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

export default EditRoomCategory