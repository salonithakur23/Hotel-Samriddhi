import React, { useEffect, useState } from 'react'
// import MainLayout from '../../Admin/Pages/MainLayout'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchleaves } from '../../reducer/action/leaveAction'
// import Leave from './Leave'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import Layout from '../../../../Header/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';




const baseURL = "http://localhost:4000/api/v1/guestservices"


const ServiceList = ({ post }) => {

  const [get, setGetAll] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      console.log(response)

    })


  }, [get])


  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});



  const handleModel = () => {
    setOpen(true);
    setUser(post);

  }

  const deleteData = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:4000/api/v1/guest/${id}`).then(response => {
      // alert("Service has been deleted successfully")
      toast.success("Room-Service deleted Succesfully")
    })
      .catch(error => {
        console.log(error)
      })

  }

  if (!get) return null;






  return (

    <>

    <Layout />
      <Container className='mt-4' >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Room-Service-Details</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div' >

                    <Button className='table-btn' variant="light" >
                      <IoIosCreate />&nbsp;<Link to="/roomservice">Create</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>


      <div className="post-table">

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room Service Details</h5>
        <Container>
          <Row>


            <Table responsive>
              <table class="table table-bordered border-secondary">
                <thead>
                  <tr>

                    <th>Guest Name</th>
                    <th>Phone No.</th>
                    <th>Room No.</th>
                    <th>Service Date</th>
                    <th>Service Type</th>
                    <th>Service Charges</th>
                    <th>Action Edit</th>
                    <th>Action View</th>
                  </tr>
                </thead>
                <tbody>
                {get?.roomservice?.map((items) => (
                  <tr>
                    

                    <td>{items.guestName}</td>
                    <td>{items.phoneNumber}</td>
                    <td>{items.roomNumber}</td>
                    <td>{items.serviceDate}</td>
                    <td>{items.service}</td>
                    <td>{items.serviceCharge}</td>

                    <td>

                      <Link to={`/EditRoomService/${items._id}`}>
                      {/* to="/EditRoomService/:id"> */}
                        <Button className='table-btn' variant="light" >
                          &#9998;Edit
                        </Button>
                      </Link>
                    </td>

                    <td>
                        <Button className='table-btn' variant="light" 
                      onClick={(e) => { deleteData(items._id) }}
                       value={"Delete"} >
                           <span className='delete-icon'>&#x2717;</span>Delete
                       </Button>
                       </td>
                    {/* <td>
                      <Button className='table-btn' variant="light"
                        onClick={() => handleModel()} >
                        &#128065;View
                      </Button>
                      {open && (
                        <ModalCamp

                          open={open}
                          setOpen={setOpen}
                          {...user}
                        />
                      )}

                    </td> */}

                   
                  </tr>
                     ))}
                </tbody>
              </table>
            </Table>
          </Row>

        </Container>
      </div>




    </>

  )
}
export default ServiceList;
