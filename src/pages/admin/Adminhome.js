import React from 'react'
import Adminsidebar from '../../components/admin/Adminsidebar'
import AdminDadhboard from '../../components/admin/AdminDadhboard'
import { Outlet } from 'react-router-dom'

const Adminhome = () => {
  return (

    <>
    <div className='flex '>
      <div className='basis-[14%] h-[100vh] '>
        <Adminsidebar/>
      </div>
      <div className='basis-[85%] h-[100vh] '>
         <AdminDadhboard/>
    </div>
        
      </div>
        
      </>
  )
}

export default Adminhome