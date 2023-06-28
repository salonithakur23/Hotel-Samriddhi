// import React, { useEffect, useState } from 'react'
// // import MainLayout from '../../Admin/Pages/MainLayout'
// import { Button, Container, Row, Table } from 'react-bootstrap'
// import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { fetchleaves } from '../../reducer/action/leaveAction'
// // import Leave from './Leave'
// import { Link } from "react-router-dom"
// import { IoIosCreate } from "react-icons/io";
// import ModalCamp from './ModalCamp';
// import axios from "axios"





// const GuestList = ({ post }) => {

//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState({});
//   const [guest, setGuest] = useState([])


//   useEffect(() => {
//     getGuests()
//   }, [])

//   const getGuests = async () => {
//     const response = await axios.get("http://localhost:4000/api/v1/guests")
//     if (response.status === 200) {
//       setGuest(response.data)
//     }
//   }
//   console.log(guest)
//   const handleModel = () => {
//     setOpen(true);
//     setUser(post);

//   }

//   //   const dispatch = useDispatch()
//   //   const leaves = useSelector(state => state.leaves.item)
//   //   const leavesStatus = useSelector(state => state.leaves.status)
//   //   const error = useSelector(state => state.leaves.error)



//   //   useEffect(() => {
//   //     if (leavesStatus === 'idle') {
//   //       dispatch(fetchleaves())
//   //     }
//   //   }, [leavesStatus, dispatch])

//   //   let content

//   //   if (leavesStatus === 'loading') {
//   //     content = <div>Loading...</div>
//   //   } else if (leavesStatus === 'succeeded') {
//   //     content = leaves.map(leave => <Leave key={leave.id} leave={leave} />)
//   //   } else if (leavesStatus === 'failed') {
//   //     content = <div>{error}</div>
//   //   }



//   return (

//     <>
//       <Container className='main-col'  >
//         <Table striped bordered hover className='main-table'>
//           <thead>
//             <tr>
//               <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Guest-Details</h5></th>
//             </tr>
//           </thead>
//         </Table>
//         <Row>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>
//                   <div className='table-div' >

//                     <Button className='table-btn' variant="light" >
//                       <IoIosCreate />&nbsp;<Link to="/add-guest">Create</Link>
//                     </Button>
//                   </div>
//                 </th>
//               </tr>
//             </thead>
//           </Table>
//           <hr />
//         </Row>
//       </Container>


//       {/* <div className="post-table"> */}
//       <div className='form-div'>

//         <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Guest-Details</h5>
//         <Container>


//           <Table responsive>
//             <table class="table table-bordered border-secondary">
//               <thead>
//                 <tr>
//                   <th>S.No</th>
//                   <th>Guest Name</th>
//                   <th>Guest Number</th>
//                   <th>Room Quantity</th>
//                   <th>Room No.</th>
//                   <th>Guest Address</th>
//                   <th>Action Edit</th>
//                   <th>Action View</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {guest?.gue?.map((guest, index) => {
//                   return (
//                     <tr key={index}>
//                       <th scope='row'>{index + 1}</th>
//                       <td>{guest.Guest_Name}</td>
//                       <td>{guest.Guest_Number}</td>
//                       <td>{guest.Room_Quantity}</td>
//                       <td>{guest.Room_Number}</td>
//                       <td>{guest.Address}</td>
//                       <td>
//                         <Link to={`/update/${guest.id}`}>

//                           <Button className='table-btn' variant="light" >
//                             &#9998;Edit
//                           </Button>
//                         </Link>
//                       </td>
//                       <td>
//                         <Link to={`/view/${guest.id}`}>
//                           <Button className='table-btn' variant="light"
//                             onClick={() => handleModel()} >
//                             &#128065;View
//                           </Button>
//                           {open && (
//                             <ModalCamp

//                               open={open}
//                               setOpen={setOpen}
//                               // updatePost={updatePost}
//                               {...user}
//                             />
//                           )}
//                         </Link>
//                       </td>
//                     </tr>

//                   )
//                 })}
//                 <tr>




//                   {/* <button className="view-btn">View </button> */}
//                 </tr>
//               </tbody>
//             </table>
//           </Table>
//         </Container>

//       </div>




//     </>

//   )
// }
// export default GuestList;



import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from "react-router-dom";
import ModalCamp from './ModalCamp';
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getGuest } from '../../../../Redux/Slice/GuestSlice';

const GuestList = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  // const [guest, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState([]);
  const dispatch = useDispatch()
  const guests = useSelector(state => state.guests.guests)
  console.log(useSelector(state => state.guests.guests))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/guests");
        dispatch(getGuest(response.data));
        // if (response.status === 200) {
        //   setGuests(response.data);
        // }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // const getGuests = async (id) => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/api/v1/guests");
  //     if (response.status === 200) {
  //       setGuests(response.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(guest.id)
  // const deleteGuest = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:4000/api/v1/guest/${id}`);
  //     toast.success('Guest deleted successfully');
  //     getGuests();
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Error deleting guest');
  //   }
  // };

  const handleModel = (post) => {
    setOpen(true);
    setUser(post);
  };

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
                  <th>S.No</th>
                  <th>Guest Name</th>
                  <th>Guest Number</th>
                  <th>Room Quantity</th>
                  <th>Room No.</th>
                  <th>Guest Address</th>
                  <th>Action Edit</th>
                  <th>Action View</th>
                </tr>
              </thead>
              <tbody>
                {guests?.gue?.map((guest, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{guest.Guest_Name}</td>
                    <td>{guest.Guest_Number}</td>
                    <td>{guest.Room_Quantity}</td>
                    <td>{guest.Room_Number}</td>
                    <td>{guest.Address}</td>
                    <td>

                      <Link to={`/Editguest/${guest.id}`}>
                        <Button className='table-btn' variant="light">
                          &#9998; Edit
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        className='table-btn'
                        variant="light"
                        onClick={() => {

                          handleModel(guest);
                        }}
                      >
                        &#128065; View
                      </Button>
                    </td>

                    {/* <td>
                      <Button
                        className='table-btn'
                        variant="light"
                        // onClick={() => deleteGuest(guest.id)}
                      >
                        &#128065; Delete
                      </Button>
                    </td> */}
                  </tr>

                ))}
              </tbody>
            </table>
          </Table>
        </Container>
      </div>

      {open && (
        <ModalCamp
          open={open}
          setOpen={setOpen}
          guest={selectedGuest}
        />
      )}
    </>
  );
};

export default GuestList;

