import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Button, Form, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai"
import { IoIosCreate } from 'react-icons/io'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../../Header/Layout'



const baseURL = "http://localhost:4000/api/v1/categories";
const allItem = "http://localhost:4000/api/v1/items?Category_Name=";


const EditResBilling = () => {

  const [get, setGetAll] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
    });
  }, []);

  



  const handleCategoriesItem = (val) => {
    setCategory_Type(val);
    axios.get(allItem + val).then((response) => {
      setItems(response.data.items);
    });
  };



  const handleCheckboxChange = (event, item) => {
    console.log(item)
    if (event.target.checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
      setItemQuantities(() => [
        ...itemQuantities,
        item.Item_Name,
        item.price,
      ]);
    } else {
      setItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
      setItemQuantities((prevItemQuantities) => {
        const updatedQuantities = { ...prevItemQuantities };
        delete updatedQuantities[item.Item_Name];
        return updatedQuantities;
      });
    }
    setCanSubmit(event.target.checked);
  };


  const selectedItemsList = items?.map((item) => (
    <div key={item.Item_Name} className="item-container">
     
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Text>
                  <Form.Check
                    aria-label="option 1"
                    onChange={(e) => handleCheckboxChange(e, item)}
                  />&nbsp;&nbsp;
                  <p className="label">
                    <span><b>Item Name</b></span>- {item.Item_Name}
                  </p>
                  <p><span><b>Price</b></span> -{item.price}</p>
                  <div className="Opretor">
                    <button
                      type="button"
                      className='decrease'
                      onClick={() => {
                        if (itemQuantities[item.Item_Name] > 1) {
                          setItemQuantities((prevItemQuantities) => ({
                            ...prevItemQuantities,
                            [item.Item_Name]: prevItemQuantities[item.Item_Name] - 1
                          }));
                        }
                      }}
                    >
                      -
                    </button>
                    <p className='quantity'>{itemQuantities[item.Item_Name] || 1}</p>
                    <button
                      type="button"
                      className='increase'
                      onClick={() => {
                        setItemQuantities((prevItemQuantities) => ({
                          ...prevItemQuantities,
                          [item.Item_Name]: (prevItemQuantities[item.Item_Name] || 1) + 1
                        }));
                      }}
                    >
                      +
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
    </div>
  ));

  const params = useParams();
  const navigate = useNavigate();
  const [specificGuest, setSpecificGuest] = useState("");
  const [Table_Number, setTable_Number] = useState(specificGuest.Table_Number);
  const [Order_Time, setOrder_Time] = useState(specificGuest.Order_Time);
  const [Category_Type, setCategory_Type] = useState(specificGuest.Category_Type)

  console.log(Category_Type,"category")

  console.log(specificGuest, "Check id from url")
 useEffect(() => {
  axios.get(`http://localhost:4000/api/v1/order/${params.id}`).then((response) => {
    setSpecificGuest(response.data);
    setTable_Number(response.data.order.Table_Number);
    setOrder_Time(response.data.order.Order_Time);
    setSelectedItems(response.data.order.Items);
    setCategory_Type(response.data.order.Category_Type);
  })
}, [])
  
 
  const submitform = () => {
    try {
      axios.put(`http://localhost:4000/api/v1/order/${params.id}`, {
        "Table_Number": Table_Number,
        "Order_Time": Order_Time,
        "Category_Type":Category_Type,
         Items: selectedItems.map(item => ({
          Item_Name: item.Item_Name,
          price: item.price,
          Quantity: itemQuantities[item.Item_Name] || 1
        }))

      })
      toast.success("Guest Updated Succesfully")
      navigate("/res-billing")
    } catch (error) {
      console.log(error.response)

    }
  }

  console.log(selectedItems);
  return (

    <>

    <Layout />



      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5><AiFillDashboard /> &nbsp;Dashboard / Edit Order</h5>
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
                      <IoIosCreate />&nbsp;<Link to="/res-billing">Go Back</Link>
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
                <label className="label">Table Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={Table_Number}
                  onChange={(e) => setTable_Number(e.target.value)}

                />
              </div>

            

              <div className="col-md-4 position-relative">
                <label className="label"> Category </label>
                <Form.Select
                  onChange={(e) => handleCategoriesItem(e.target.value)}
                >
                  <option
                    value={Category_Type}
                  >
                    Select a category</option>
                  {get?.categories?.map((category) => (
                    <option key={category.Category_Type}>{category.Category_Type}</option>
                  ))}
                </Form.Select>
              </div>

              <hr></hr>



          <Container>

         
              <div className="item-row">
                {selectedItemsList}
                </div>
                </Container>
             

              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                  disabled={!canSubmit}
                  onClick={submitform}
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

export default EditResBilling;