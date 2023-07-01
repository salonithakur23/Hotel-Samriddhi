import React from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const SeeAllCategory = () => {
    return (
        <>

            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / See All Categories</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                       
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>


        </>
    )
}

export default SeeAllCategory