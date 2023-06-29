import React, { useEffect, useState } from 'react'
// import MainLayout from '../../Admin/Pages/MainLayout'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai';
// import Leave from './Leave'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from 'axios';
import { toast } from 'react-toastify';


const baseURL = "http://localhost:4000/api/v1/items"



const ItemList = () => {


  
  const [get, setGetAll] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      // console.log(response)



    })


  }, [get])

  const deleteData = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:4000/api/v1/item/${id}`).then(response => {
      // alert("Item has been deleted successfully")
      toast.success("Item deleted Succesfully")
    })
      .catch(error => {
        console.log(error)
      })

  }
  if (!get) return null;

  return (

    <>
      <Container className='main-col'  >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Item-Details</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/items">Create</Link>
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

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Item-Details</h5>
        <Container>
          <Row>


            <Table responsive>
              <table class="table table-bordered border-secondary">
                <thead>
                  <tr>

                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Category Type</th>
                    <th>Action Edit</th>
                    <th>Action View</th>
                  </tr>
                </thead>
                <tbody>
                  {get?.items?.map((items) => (
                    <tr>

                      <td>{items.Item_Name}</td>
                      <td>{items.price}</td>
                      <td>{items.Category_Name}</td>
                      {/* <td>keshav</td> */}
                      <td>

                        <Link to={`/edititem/${items._id}`}>
                          <Button className='table-btn' variant="light" >
                            &#9998;Edit
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button className='table-btn' variant="light" onClick={(e) => { deleteData(items._id) }} value={"Delete"}
                        >
                          &#128065;Delete
                        </Button>



                      </td>

                      {/* <button className="view-btn">View </button> */}
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
export default ItemList;
