import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button,Form } from 'react-bootstrap';
import { AiFillDashboard, } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../../Header/Layout';

const EditEmployee = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [specificGuest, setSpecificGuest] = useState("");
    const [Employee_Name, setEmployee_Name] = useState(specificGuest.Employee_Name);
    const [Phone_Number, setPhone_Number] = useState(specificGuest.Phone_Number);
    const [Address, setAddress] = useState(specificGuest.Address);
    const [Email, setEmail] = useState(specificGuest.Email);
    const [Gender, setGender] = useState(specificGuest.Gender);
    const [Dob, setDob] = useState(specificGuest.Dob);
    const [Role, setRole] = useState(specificGuest.Room_Number);
    const [Salary, setSalary] = useState(specificGuest.Salary);

    console.log(specificGuest, "Check id from url")

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/employee/${params.id}`).then((response) => {
            setSpecificGuest(response.data);
            setEmployee_Name(response.data.employee.Employee_Name);
            setPhone_Number(response.data.employee.Phone_Number);
            setAddress(response.data.employee.Address);
            setEmail(response.data.employee.Email);
            setGender(response.data.employee.Gender);
            setDob(response.data.employee.Dob);
            setRole(response.data.employee.Role);
            setSalary(response.data.employee.Salary);
        })
    }, [])


    const submitform = () => {
        try {
            axios.put(`http://localhost:4000/api/v1/employee/${params.id}`, {
                "Employee_Name": Employee_Name,
                "Phone_Number": Phone_Number,
                "Address": Address,
                "Email": Email,
                "Gender": Gender,
                "Dob": Dob,
                "Role": Role,
                "Salary": Salary,

            })
            toast.success("Guest Updated Succesfully")
            navigate("/employee-list")
        } catch (error) {
            console.log(error.response)

        }
    }

    return (
        <>

<Layout />
            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Employee</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/employees-list">Go Back</Link>
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
            <div className='form-div' >
                <Container>
                    <Row>


                        <form className="row g-4 p-3 registration-form" >

                            <div class="col-md-4 position-relative">
                                <label className="label">Employee Name</label>
                                <input type="text" class="form-control"
                                    value={Employee_Name} onChange={(e) => setEmployee_Name(e.target.value)}
                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Phone Aumber</label>
                                <input type="text" class="form-control"
                                    value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)}
                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Address</label>
                                <input type="text" class="form-control"
                                    value={Address} onChange={(e) => setAddress(e.target.value)}
                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Email</label>
                                <input type="text" class="form-control"
                                    value={Email} onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>


                            <div class="col-md-4 position-relative"

                            // controlId="formGridState" className='input2'
                            >
                                <label class="form-label">Gender</label>
                                <Form.Select
                                    value={Gender} onChange={(e) => setGender(e.target.value)}
                                >
                                    <option>Choose</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">DOB</label>
                                <input type="date" class="form-control"
                                    value={Dob} onChange={(e) => setDob(e.target.value)}
                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Role</label>
                                <input type="text" class="form-control"
                                    value={Role} onChange={(e) => setRole(e.target.value)}
                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Salary</label>
                                <input type="text" class="form-control"
                                    value={Salary} onChange={(e) => setSalary(e.target.value)}
                                />

                            </div>
                            <center>

                                <Button className="stu_btn"
                                    variant="success"
                                    type="submit"
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

export default EditEmployee