import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Layout from '../../Header/Layout'


const Home = () => {
  return (
 <>


    <Layout>
     <Container >
      <Row>
      <div className='home-container'>
        <img className='home-container-fill' src="home-banner.gif"/>
      </div>
      </Row>
     </Container>
     </Layout>
 
 
 </>
  )
}

export default Home