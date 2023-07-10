import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Layout from '../../../Header/Layout'

const ResDashboard = () => {
  return (
    <>
      <Layout />
      <marquee className="mar-bg">
        <p className='Dash-title'> Welcome to the Dasboard of Our Hotel ! A hotel dashboard is a tool used by hotel management to monitor and analyze various aspects of their hotel's operations. </p>
      </marquee>
      <Container >
        <Row>

        </Row>
      </Container>
    </>
  )
}

export default ResDashboard