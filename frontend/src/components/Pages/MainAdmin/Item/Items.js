import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';



const Item = () => {

    

  const navigate = useNavigate();
  const [item_Name, setItem_Name] = useState(null);
  const [price, setPrice] = useState(null);
  const [category_Name, setCategory_Name] = useState(null);
  const [service_Name, satService_Name] = useState([]);



  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/room-services");
      const data = response.data;
      const categories = data.map(category => category.category_name);
      satService_Name(categories);
    } catch (error) {
      console.log(error.response);
    }
  };

  const submitForm = async () => {
    try {
      const itemResponse = await axios.post("http://localhost:4000/api/v1/item/new", {
        "Item_Name": item_Name,
        "price": price,
        "Category_Name": category_Name,
      });
      toast.danger("Item Add Successfully");
      navigate("/item-list");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5><AiFillDashboard /> &nbsp;Dasboard / Add New Item</h5>
              </th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>
                    <Button className='table-btn' variant="light">
                      <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>
      <div className='form-div'>
        <Container>
          <Row>
            <form className="row g-4 p-3 registration-form">
              <div className="col-md-4 position-relative">
                <label className="label">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={item_Name}
                  onChange={(e) => setItem_Name(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 position-relative">
                <label className="label">Category Name</label>
                <select
                  className="form-control"
                  value={category_Name}
                  onChange={(e) => setCategory_Name(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  {service_Name.map((category, index) => (
                    <option key={index} value={service_Name}>
                      {service_Name}
                    </option>
                  ))}
                </select>
              </div>


              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                  onClick={submitForm}
                >
                  Submit
                </Button>
              </center>
            </form>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Item;
































// import React, { useState } from 'react'
// // import HotelSidebar from '../../HotelSidebar'
// import { Container, Col, Row, Table, Button } from 'react-bootstrap'
// import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
// import { RiArrowGoBackLine } from 'react-icons/ri';
// import Form from 'react-bootstrap/Form';
// import { IoIosCreate } from 'react-icons/io';
// import { Link } from 'react-router-dom';
// // import './RoomBooking.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';





// const Item = () => {
//     const navigate = useNavigate()
//     const [item_Name, setItem_Name] = useState(null);
//     const [price, setPrice] = useState(null);
//     const [category_Name, setCategory_Name] = useState(null);



//     const submitform = () => {
//         try {
//             axios.post("http://localhost:4000/api/v1/item/new", {
//                 "Item_Name": item_Name,
//                 "price": price,
//                 "Category_Name": category_Name,
//             })
//             toast.danger("Item Add Succesfully")
//             navigate("/item-list")
//         } catch (error) {
//             console.log(error.response)

//         }
//     }
//     return (
//         <>


//             <Container style={{ width: "90%", marginTop: "20px" }} >
//                 <Table striped bordered hover className='main-table'>
//                     <thead>
//                         <tr>
//                             <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Item</h5></th>
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
//                                             <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
//                                         </Button>
//                                     </div>
//                                 </th>
//                             </tr>
//                         </thead>
//                     </Table>
//                     <hr />
//                 </Row>
//             </Container>
//             {/* form section start */}
//             <div className='form-div' >
//                 <Container>
//                     <Row>


//                         <form className="row g-4 p-3 registration-form" >

//                             <div class="col-md-4 position-relative">
//                                 <label className="label">Item Name</label>
//                                 <input type="text" class="form-control" value={item_Name} onChange={(e) => setItem_Name(e.target.value)} required

//                                 />

//                             </div>

//                             <div class="col-md-4 position-relative">
//                                 <label className="label">Price.</label>
//                                 <input type="text" class="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required

//                                 />

//                             </div>


//                             <div class="col-md-4 position-relative">
//                                 <label className="label">Category Name</label>
//                                 <input type="text" class="form-control"
//                                  value={category_Name} onChange={(e) => 
//                                     setCategory_Name(e.target.value)} required

//                                 />

//                             </div>
//                             <center>

//                                 <Button className="stu_btn"
//                                     variant="success"
//                                     type="submit"
//                                     onClick={submitform}
//                                 >
//                                     Submit
//                                 </Button>

//                             </center>

//                         </form>
//                     </Row>
//                 </Container>
//             </div>




//         </>
//     )
// }

// export default Item