import React from 'react'
import './Dashboard.css'
import { Container, Row } from 'react-bootstrap'
import Layout from '../../../../Header/Layout'



const Dashboard = () => {


  return (
    <>
      <Layout />

      <div className='Hotel-dash-box'>
        <img className='Hotel-dash-fill' src='/img/Hotel_Banner(1).jpg' />
      </div>


    </>
  )
}

export default Dashboard