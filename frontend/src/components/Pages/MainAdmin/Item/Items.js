import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../../Header/Layout';

const baseURL = "http://localhost:4000/api/v1/categories";

const Item = () => {
  const [get, setGetAll] = useState(null);
  const [item_Name, setItem_Name] = useState("");
  const [price, setPrice] = useState("");
  const [category_Type, setCategory_Type] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
    });
  }, []);




  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/item/new", {
        "Item_Name": item_Name,
        "price": price,
        "Category_Name":category_Type,
       

      });
      toast.success("Item Add Successfully");
      navigate("/item-list");

      setItem_Name("");
      setPrice("");
      setCategory_Type(null);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Layout />

      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Item</h5></th>
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
              <Link to='/add-category'>
                <Button variant='success' className='float-end'>Add Category</Button>
              </Link>
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
                  value={category_Type}
                  onChange={(e) => setCategory_Type(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  {get?.categories?.map((items) => (
                    <option key={items._id} value={items.Category_Type}>{items.Category_Type}</option>
                  ))}
                </select>
              </div>
              <center>
                <Button
                  className="stu_btn"
                  variant="success"
                  type="submit"
                  onClick={(event) => submitForm(event)}
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
