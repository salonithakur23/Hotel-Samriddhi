
import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai';
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import axios from 'axios';


const baseURL = "http://localhost:4000/api/v1/items"

const ItemList = () => {
  const [get, setGetAll] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
    })


  }, [get])

//   const deleteData = (id) => {
//     // console.log(id)
//     axios.delete(`http://localhost:4000/api/v1/item/${id}`).then(response => {
//       alert("Item has been deleted successfully")
//     })
//       .catch(error => {
//         console.log(error)
//       })

//   }
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
                  </tr>
                </thead>
                <tbody>
                  {get?.items?.map((items) => (
                    <tr>

                      <td>{items.Item_Name}</td>
                      <td>{items.price}</td>
                      <td>{items.Category_Name}</td>
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
