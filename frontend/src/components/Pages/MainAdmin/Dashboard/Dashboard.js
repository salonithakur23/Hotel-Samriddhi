import React from 'react'
import './Das.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Layout from '../../../Header/Layout'
import admin from './admin.jpeg'

const AdminDashboard = () => {
  return (
    <>
      <Layout />

      <div className='Main-dash-img'>
        <img className='Main-dash-fill' src='/img/Hotel Samriddhi.png' />
      </div>




    </>
  )
}

export default AdminDashboard