import React, { useEffect, useState } from 'react'
// import MainLayout from '../../Admin/Pages/MainLayout'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit,AiFillEye } from 'react-icons/ai';


// import Leave from './Leave'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';
import ModalComp from './ModalCamp ';
import './item.css'
import Layout from '../../../Header/Layout';


const baseURL = "http://localhost:4000/api/v1/items"



const ItemList = ({ items }) => {


  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [get, setGetAll] = useState(null);
  const handleModel = () => {
    setOpen(true);
    setUser(items);

  }

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
    <Layout />
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
                    <Button className='table-btn' variant="light" >
                      <AiFillEye />&nbsp;<Link to="/seeallcategory">See-All-Category-Items</Link>
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
                    <th>Action Delete</th>
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
                          <Button className='table-btn' 
                          variant="light" >
                            &#9998;Edit
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button className='table-btn'
                         variant="light" onClick={(e) => 
                          { deleteData(items._id) }} value={"Delete"}
                        >
                        <span className='delete-icon'>&#x2717;</span>Delete
                        </Button>
                      </td>
                      {/* <td>
                      <Button className='table-btn' variant="light"
                        onClick={() => handleModel(items)}
                      >
                        &#128065;View
                      </Button>
                    </td>
                    {open && (
                      <ModalComp
                        open={open}
                        setOpen={setOpen}
                        {...user}
                      />
                    )} */}
                    
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
