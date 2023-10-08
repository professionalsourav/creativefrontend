import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Link } from 'react-router-dom'
import video from "./bg.mp4";
import "./Home.css"
const FrontHome = () => {
  return (
    <div>
        <Header/>
       <div >

       <div className='bgContainer'>
         <div className='overlay'>
         <video src={video} autoPlay loop muted/>
            <div className='container'>
            <h1 className='home-title'>welcome to creative world</h1>

            <Link to="/user/signin"  style={{textDecoration:"none"}}>
            <h3 className='home-subtitle'>  creator dashboard</h3>
           </Link>
           <br/>
           <Link to="/login"  style={{textDecoration:"none"}}>
            <h3 className='home-subtitle'>  user dashboard</h3>
           </Link>
           <br/>
           <Link to="/adminsignin"  style={{textDecoration:"none"}}>
            <h3 className='home-subtitle'>  admin dashboard</h3>
           </Link>


           </div>
       </div>
       </div>
       </div> 
        
    </div>
  )
}

export default FrontHome