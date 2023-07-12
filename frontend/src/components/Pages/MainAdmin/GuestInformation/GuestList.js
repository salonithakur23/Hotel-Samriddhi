
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard, } from 'react-icons/ai';
import { Link,useNavigate } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
import { toast } from 'react-toastify';
// import ModalComp from './ModalCamp ';
import ModalCamp from '../../Hotel/AdminPage/RoomBooking/ModalCamp';
import Layout from '../../../Header/Layout';


// const baseURL = "http://localhost:4000/api/v1/guests"
const baseURL = "http://localhost:4000/api/v1/room-bookings";


const GuestList = ({ post }) => {
  // const [open, setOpen] = useState(false);
  // const [user, setUser] = useState({});
  // const [get, setGetAll] = useState(null);

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [get, setGetAll] = useState(null);
  const navigate = useNavigate();

  const handleModal = (post) => {
    setOpen(true);
    setUser(post);
  };


  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setGetAll(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [get]);

  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/api/v1/room-booking/${id}`)
      .then(response => {
        toast.success("Guest has been deleted successfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!get) return null;





  return (
    <>
    <Layout />
    <Container className='mt-4'>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th>
                <h5><AiFillDashboard /> &nbsp; Dashboard / Geust Information</h5>
              </th>
            </tr>
          </thead>
        </Table>
      </Container>

      <div className="post-table">
        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Geust Information</h5>
        <Container>
          <Row>
            <Table responsive>
              <table className="table table-bordered border-secondary">
                <thead>
                  <tr>
                    <th>Guest Name</th>
                    <th>Phone No.</th>
                    <th>Address</th>
                    <th>Room No.</th>
                    <th>Booking Date</th>
                    <th>Room Type</th>
                    <th>Action Edit</th>
                    <th>Action Delete</th>
                    <th>Action View</th>
                  </tr>
                </thead>
                <tbody>
                  {get?.book?.map((items) => (
                    <tr key={items._id}>
                      <td>{items.Guest_Name}</td>
                      <td>{items.Phone_Number}</td>
                      <td>{items.Address}</td>
                      <td>{items.Room_Number}</td>
                      <td>{items.Booking_Date_Time}</td>
                      <td>{items.Room_BookType}</td>
                      <td>
                        <Link to={`/Editroombooking/${items._id}`}>
                          <Button className='table-btn' variant="light">
                            &#9998;Edit
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button className='table-btn' variant="light" onClick={() => { deleteData(items._id) }} value={"Delete"}>
                          <span className='delete-icon'>&#x2717;</span>Delete
                        </Button>
                      </td>
                      <td>
                        <Button className='table-btn' variant="light" onClick={() => handleModal(items)}>
                          &#128065;View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          </Row>
        </Container>
      </div>

      {open && (
        <ModalCamp
          open={open}
          setOpen={setOpen}
          user={user}
        />
      )}
    </>
  );
};

export default GuestList;

