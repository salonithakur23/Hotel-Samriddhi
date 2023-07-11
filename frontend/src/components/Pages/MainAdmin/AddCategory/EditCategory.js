import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../Header/Layout';



const EditCategory = () => {


  const params = useParams();
  const navigate = useNavigate();
  const [specificItem, setSpecificItem] = useState("");
  const [Category_Type, setCategory_Type] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/category/${params.id}`).then((response) => {
      setSpecificItem(response.data);
      setCategory_Type(response.data.category.Category_Type);
    });
  }, []);
  

  const submitForm = (event) => {
    event.preventDefault();
    try {
      axios.put(`http://localhost:4000/api/v1/category/${params.id}`, {
        Category_Type: Category_Type,
      });
      toast.success("Item Updated Successfully");
      navigate("/list-category");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (

    <>

<Layout />
      <Container style={{ width: "90%", marginTop: "20px" }}>
        <Table striped bordered hover className="main-table">
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp;Dashboard / Update Category Items
                </h5>
              </th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className="table-div">
                    <Button className="table-btn" variant="light">
                      <IoIosCreate />&nbsp;<Link to="/list-category">Go Back</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>
      {/* form section start */}
      <div className="form-div">
        <Container>
          <Row>
            <form className="row g-4 p-3 registration-form">
              <div className="col-md-4 position-relative">
                <label className="label">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={Category_Type}
                  onChange={(e) => setCategory_Type(e.target.value)}
                />
              </div>
              <br />
              <center>
                <Button
                  className="stu_btn"
                  style={{ marginTop: "-120px" }}
                  variant="success"
                  type="submit"
                  onClick={(event) => submitForm(event)}
                >
                  Update Category
                </Button>
              </center>
            </form>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EditCategory;
