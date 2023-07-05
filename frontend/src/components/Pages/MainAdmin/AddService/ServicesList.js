import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import "./RoomService.css"
import axios from 'axios';
import { toast } from 'react-toastify';



const baseURL = "http://localhost:4000/api/v1/room-services"


const ServicesList = () => {


  const [get, setGetAll] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      console.log(response)

    })


  }, [get])
  // console.log(get,"keshav")

  const deleteData = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:4000/api/v1/room-service/${id}`).then(response => {
      // alert("Service has been deleted successfully")
      toast.success("Service deleted Succesfully")
    })
      .catch(error => {
        console.log(error)
      })

  }

  if (!get) return null;



  // const [open, setOpen] = useState(false);
  // const [user, setUser] = useState({});

  // const handleModel = () => {
  //   setOpen(true);
  //   setUser(post);

  // }




  return (

    <>
      <Container className='main-col' >
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
                      <IoIosCreate />&nbsp;<Link to="/services">Create</Link>
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
      <div className='form-div' >
        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room Service Details</h5>
        <Container>
          <Row>




            <Table responsive>
              <table class="table table-bordered border-secondary">
                <thead>
                  <tr>

                    <th>Service Name</th>
                    <th>Service Charge</th>
                    <th>Action Edit</th>
                    <th>Action View</th>
                  </tr>
                </thead>
                <tbody>

                  {get?.ser?.map((items) => (
                    <tr>
                      <td>{items.Service_Name}</td>
                      <td>{items.Service_Charge}</td>
                  

                      <td>
                        <Link to={`/serviceEdit/${items._id}`}>
                        <Button className='table-btn'
                         variant="light" >
                          &#9998;Edit</Button> </Link>
                          </td>

                      <td>
                        <Button className='table-btn' variant="light" 
                      onClick={(e) => { deleteData(items._id) }}
                       value={"Delete"} >
                           <span className='delete-icon'>&#x2717;</span>Delete
                       </Button>
                       </td>
                      
                    </tr>


                  ))}


                  {/* <tr>

<td>keshav</td>
<td>keshav</td>
<td>
  <Link to="/services">
  
    <Button className='table-btn' variant="light" >
        &#9998;Edit
    </Button> 
    </Link>                   
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


</tr> */}
                </tbody>
              </table>
            </Table>
          </Row>
        </Container>

      </div>




    </>

  )
}
export default ServicesList;
