import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from 'axios';
import { toast } from 'react-toastify';


const baseURL = "http://localhost:4000/api/v1/rooms"


const RoomList = ({ post }) => {

  const [get, setGetAll] = useState(null);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const handleModel = () => {
    setOpen(true);
    setUser(post);
  }


  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      // console.log(response)
    })

  }, [get])


  const deleteData = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:4000/api/v1/room/${id}`).then(response => {
      // alert("Guest has been deleted successfully")
      toast.success("Item has been deleted successfully")
    })
      .catch(error => {
        console.log(error)
      })

  }
  if (!get) return null;




  return (

    <>
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
                      <IoIosCreate />&nbsp;<Link to="/add-rooms">Create</Link>
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
                  <th>Room No.</th>
                  <th>Room Type</th>
                  <th>Price</th>
                  <th>Avaibale</th>
                  <th>Action Edit</th>
                  <th>Action Delete</th>
                  <th>Action View</th>
                </tr>
              </thead>
              <tbody>
              {get?.rom?.map((items) => (
                <tr>
                  <td>{items.Room_Number}</td>
                  <td>{items.Room_Type}</td>
                  <td>{items.Price}</td>
                  <td>{items.Avilable_Not}</td>
              
                  <td>

                    <Link to={`/roomEdit/${items._id}`}>

                      <Button className='table-btn' variant="light" >
                        &#9998;Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button className='table-btn' variant="light"
                      onClick={(e) => { deleteData(items._id) }} value={"Delete"}
                    >
                      &#9998;Delete
                    </Button>
                  </td>
                  <td>
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
                  </td>
                </tr>
                   ))}
              </tbody>
            </table>
          </Table>
        </Container>

      </div>




    </>

  )
}
export default RoomList;
