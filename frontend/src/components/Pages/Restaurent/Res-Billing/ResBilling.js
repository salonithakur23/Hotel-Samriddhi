import React,{useState , useEffect} from 'react'
import './ResBilling.css'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link  } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import axios from "axios"
import { toast } from 'react-toastify'


const baseURL = "http://localhost:4000/api/v1/orders"




const ResBilling = () => {



  const [get, setGetAll] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetAll(response.data);
      console.log(response)

    })


  }, [get])
  console.log(get,"order")

  const deleteData = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:4000/api/v1/order/${id}`).then(response => {
      // alert("Service has been deleted successfully")
      toast.success("Service deleted Succesfully")
    })
      .catch(error => {
        console.log(error)
      })

  }

  if (!get) return null;


  return (
    <>

      <Container className='main-col' >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Order-Details</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/order">Create</Link>
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
          {get?.orders?.map((items) => (
            <Col sm={4}>
           
              <div className='billing-card'>
                
                <h3 className='res-name'> Samriddhi </h3>

                <h5> Phone.no : <span>8796541234</span>  </h5>
                <h5> Address : <span>mansrowar</span>  </h5>
                <h5> Gst.no : <span>1</span>  </h5>
                <h5>Order Date&Time :<span>{items.Order_Time}</span>  </h5>
                <h5>Table No. :<span>{items.Table_Number}</span>  </h5>
                <Table responsive>
                  <table class="table table-bordered border-secondary">
                    <thead>
                      <tr>

                        <th>Item</th>
                        <th>Price</th>
                        {/* <th>Total</th> */}

                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>Veg</td>
                        <td>100</td>
                        {/* <td>100</td> */}
                      </tr>
                    </tbody>


                  </table>
                  <hr></hr>

                  <h5 className='mt-2'>Total: <span className='float-end'>100</span> </h5>

                </Table>

                <div className='d-flex text-center'>

                  <Link to='/KOT'>
                  <Button className='table-btn ' variant="light" >
                    &#128065;KOT
                  </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Link>
               
                  <Button className='table-btn ' variant="light" >
                    &#9998; Edit
                  </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

             
                  <Link to="/BILL">
                    <Button className='table-btn ' variant="light" >
                      &#128065; Bill
                    </Button>
                  </Link>

                </div>

              </div>

              <br/><br/>
           
             
            </Col>
          
            ))}
            
          


            {/* <Col sm={4}></Col>
            <Col sm={4}></Col> */}
          </Row>
        </Container>

</div>



    </>
  )
}

export default ResBilling