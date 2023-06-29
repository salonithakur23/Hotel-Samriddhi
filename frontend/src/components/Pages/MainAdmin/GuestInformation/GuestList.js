
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard, } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
import { toast } from 'react-toastify';
import ModalComp from './ModalCamp ';


const baseURL = "http://localhost:4000/api/v1/guests"

const GuestList = ({ items }) => {
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
    axios.delete(`http://localhost:4000/api/v1/guest/${id}`).then(response => {
      // alert("Guest has been deleted successfully")
      toast.success("Guest has been deleted successfully")
    })
      .catch(error => {
        console.log(error)
      })

  }
  if (!get) return null;





  return (
    <>
      <Container className='main-col'>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5>
                  <AiFillDashboard /> &nbsp; Dashboard/ Guest-Details
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
                  <div className='table-div'>
                    <Button className='table-btn' variant="light">
                      <Link to="/add-guest">
                        <IoIosCreate />&nbsp;Create
                      </Link>
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
        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">
          Guest-Details
        </h5>
        <Container>
          <Table responsive>
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  {/* <th>Sr</th> */}
                  <th>Guest Name</th>
                  <th>Guest Number</th>
                  <th>Email</th>
                  <th>Room No.</th>
                  <th>Guest Address</th>
                  <th>Action Edit</th>
                  <th>Action Delete</th>
                  <th>Action View</th>
                </tr>
              </thead>
              <tbody>
                {get?.gue?.map((items) => (
                  <tr>
                    <td>{items.Guest_Name}</td>
                    <td>{items.Guest_Number}</td>
                    <td>{items.Email}</td>
                    <td>{items.Room_Number}</td>
                    <td>{items.Address}</td>
                    {/* <td>{items.Room_Quantity}</td>
                    <td>{items.Booking_Date_Time}</td>
                    <td>{items.Checkin_Date_Time}</td>
                    <td>{items.Checkout_Date_Time}</td>
                    <td>{items.Number_Of_Children}</td>
                    <td>{items.Number_Of_Adults}</td> */}
                    <td>

                      <Link to={`/guest/${items._id}`}>
                        <Button className='table-btn' variant="light">
                          &#9998; Edit
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button className='table-btn' variant="light"
                        onClick={(e) => { deleteData(items._id) }} value={"Delete"}
                      >
                        &#9998; Delete
                      </Button>
                    </td>
                    <td>
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
                    )}
                  </tr>

                ))}
              </tbody>
            </table>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default GuestList;

