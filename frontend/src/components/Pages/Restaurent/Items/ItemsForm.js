// import React from 'react'
// import './Items.css'
// import { Col, Container, Row, Button } from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
// import { IoIosCreate } from 'react-icons/io';
// import { Link } from 'react-router-dom';
// import { AiFillDashboard } from 'react-icons/ai';
// const ItemsForm = () => {
//     return (
//         <>
//             <Container >
//                 <Table striped bordered hover className='main-table' style={{ marginTop: "40px" }} >
//                     <thead>
//                         <tr>
//                             <th><h5><AiFillDashboard /> &nbsp; Dashboard / Items </h5></th>
//                         </tr>
//                     </thead>
//                 </Table>
//                 <Row>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>
//                                     <div className='table-div'>

//                                         <Button className='table-btn' variant="light" >
//                                             {/* <IoIosCreate />&nbsp;<Link to="#">Go Back</Link> */}
//                                         </Button>


//                                     </div>
//                                 </th>
//                             </tr>
//                         </thead>
//                     </Table>
//                     <hr />
//                 </Row>
//             </Container>

//             {/* Table section start */}
//             <Container className='item-table'>
//                 <Row>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>

//                                 <th>Item Name</th>
//                                 <th>Item Price</th>
//                                 <th>Category</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Pizza</td>
                              
//                                 <td>500/</td>
//                                 {/* <td><Button variant='light' className='plus-btn'>+</Button></td> */}
//                                 <td>
//                                     Shankes
//                                   </td>
//                             </tr>
//                             <tr>
//                                 <td>Dosa</td>
                              
//                                 <td>200/</td>
//                                   {/* <td><Button variant='light' className='plus-btn'>+</Button></td> */}
//                                   <td>
//                                     Shankes
//                                   </td>
//                             </tr>
//                             <tr>
//                                 <td>Burgur</td>
                             
//                                 <td>150</td>
//                                   {/* <td><Button variant='light' className='plus-btn'>+</Button></td> */}
//                                   <td>
//                                     Shankes
//                                   </td>
//                             </tr>
//                             <tr>
//                                 <td>chawmein</td>
                               
//                                 <td>250/</td>
//                                 {/* <td><Button variant='light' className='plus-btn'>+</Button></td> */}
//                                 <td>
//                                     Shankes
//                                   </td>
//                             </tr>
//                         </tbody>
//                     </Table>
//                 </Row>
//             </Container>

//         </>
//     )
// }

// export default ItemsForm



import React, { useEffect, useState } from 'react'
// import MainLayout from '../../Admin/Pages/MainLayout'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai';
// import Leave from './Leave'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
// import ModalCamp from './ModalCamp';
import axios from 'axios';


const baseURL = "http://localhost:4000/api/v1/items"



const ItemList = () => {
  const [get, setGetAll] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      // console.log(response)



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
