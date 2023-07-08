import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../Header/Layout';



const Employees = () => {
    const navigate = useNavigate()
    const [employee_Name, setEmployee_Name] = useState(null);
    const [phone_Number, setPhone_Number] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState(null);
    const [role, setRole] = useState(null);
    const [salary, setSalary] = useState(null);

    const submitform = () => {
        try {
            axios.post("http://localhost:4000/api/v1/employee/new", {
                "Employee_Name": employee_Name,
                "Phone_Number": phone_Number,
                "Address": address,
                "Email": email,
                "Gender": gender,
                "Dob": dob,
                "Role": role,
                "Salary": salary,


            })
            toast.success("Guest Add Succesfully")
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
                                            <IoIosCreate />&nbsp;<Link to="/employee-list">Go Back</Link>
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
                                    value={employee_Name} onChange={(e) => setEmployee_Name(e.target.value)}
                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Phone Aumber</label>
                                <input type="text" class="form-control"
                                    value={phone_Number} onChange={(e) => setPhone_Number(e.target.value)}
                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Address</label>
                                <input type="text" class="form-control"
                                    value={address} onChange={(e) => setAddress(e.target.value)}
                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Email</label>
                                <input type="text" class="form-control"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>


                            <div class="col-md-4 position-relative"

                            // controlId="formGridState" className='input2'
                            >
                                <label class="form-label">Gender</label>
                                <Form.Select
                                    value={gender} onChange={(e) => setGender(e.target.value)}
                                >
                                    <option>Choose</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">DOB</label>
                                <input type="date" class="form-control"
                                    value={dob} onChange={(e) => setDob(e.target.value)}
                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Role</label>
                                <input type="text" class="form-control"
                                    value={role} onChange={(e) => setRole(e.target.value)}
                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Salary</label>
                                <input type="text" class="form-control"
                                    value={salary} onChange={(e) => setSalary(e.target.value)}
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

export default Employees