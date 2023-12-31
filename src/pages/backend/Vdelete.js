import React from 'react'
import { Link } from 'react-router-dom';
const Vdelete = () => {
    
  return (
    <div>
         <section className='h-screen bg-green-200 flex-1 text-center justify-center p-28'>
        

    <Link to={"/user"} className='text-3xl font-bold cursor-pointer'>
        video has sucessfully deleted
    </Link>

    
  
    

   </section>
   </div>
  )
}

export default Vdelete