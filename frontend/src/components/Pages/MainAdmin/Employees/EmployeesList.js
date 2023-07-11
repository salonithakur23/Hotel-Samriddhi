import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../../Header/Layout';



const baseURL = "http://localhost:4000/api/v1/employees"

const EmployeesList = ({ post }) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [get, setGetAll] = useState(null);

  const handleModal = (post) => {
    setOpen(true);
    setUser(post);
  };
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
    })


  }, [get])

  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/api/v1/employee/${id}`).then(response => {
      toast.success("Guest has been deleted successfully")
    })
      .catch(error => {
        console.log(error)
      })

  }
  if (!get) return null;

  return (

    <>
    <Layout />
      <Container className='main-col' >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Room-Details</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/employees">Create</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>


      {/* <div className="post-table"> */}
      <div className='form-div'>

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room-Details</h5>
        <Container>


          <Table responsive>
            <table class="table table-bordered border-secondary">
              <thead>
                <tr>

                  <th>Employee Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Dob</th>
                  {/* <th>Role</th> */}
                  {/* <th>Salary</th> */}
                  <th>Action Edit</th>
                  <th>Action Delete</th>
                  <th>Action View</th>
                </tr>
              </thead>
              <tbody>
                {get?.emp?.map((items) => (
                  <tr>

                    <td>{items.Employee_Name}</td>
                    <td>{items.Phone_Number}</td>
                    <td>{items.Address}</td>
                    <td>{items.Email}</td>
                    <td>{items.Gender}</td>
                    <td>{items.Dob}</td>
                    {/* <td>{items.Role}</td> */}
                    {/* <td>{items.Salary}</td> */}

                    <td>
                      <Link to={`/EditEmp/${items._id}`}>
                        <Button className='table-btn' variant="light" >
                          &#9998;Edit
                        </Button>
                      </Link>
                    </td>

                    <td>
                      <Button className='table-btn' variant="light"
                        onClick={(e) => { deleteData(items._id) }} value={"Delete"}
                      >
                        <span className='delete-icon'>&#x2717;</span>Delete
                      </Button>
                    </td>
                    <td>
                        <Button className='table-btn' variant="light" onClick={() => handleModal(items)}>
                          &#128065;View
                        </Button>
                      </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </Container>

      </div>
      {open && (
        <ModalCamp
          open={open}
          setOpen={setOpen}
          user={user}
        />
      )}



    </>

  )
}
export default EmployeesList;
