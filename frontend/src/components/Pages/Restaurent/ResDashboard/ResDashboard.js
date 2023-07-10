import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Layout from '../../../Header/Layout'
import '../../Restaurent/RestaurentSidebar.css'
const ResDashboard = () => {
  return (
    <>
      <Layout />
      {/* <marquee className="mar-bg">
        <p className='Dash-title'> Welcome to the Dasboard of Our Hotel ! A hotel dashboard is a tool used by hotel management to monitor and analyze various aspects of their hotel's operations. </p>
      </marquee> */}
      
      <div className='res-dash'>
        
        <img className='res-dash-fill' src='/img/Res_Banner.png' />
      </div>
    
    </>
  )
}

export default ResDashboard