import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../../components/admin/Spinner';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminBack from '../../components/admin/AdminBack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        axios.get("/api/users/get/alluser").then((res)=>{
        
            setUsers(res.data.data);
       // console.log(res.data.data);
         setLoading(false);
        
        }).catch((err)=>{
            console.log(err)
        })
         }, [])
  
  return (
    <div className='p-4'>
         <AdminBack/>
        
    <div className='flex justify-between items-center'>

        {/* <AdminBack/> */}

      <h1 className='text-3xl my-8 text-center'>   user list </h1>
        
           
     
     
    </div>
    {loading ? (<Spinner/>) : ( <table className='w-full border-separate border-spacing-2'>
       <thead>
         <tr>
           <th className='border border-slate-600 rounded-md'>No</th>
           <th className='border border-slate-600 rounded-md'>Name</th>
           <th className='border border-slate-600 rounded-md max-md:hidden'>Role</th>
          
           <th className='border border-slate-600 rounded-md'>Operations</th>

         </tr>
       </thead>
       <tbody>
          {users.map((user, index)=>(
              <tr key={user._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>
                     {index+1} 
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {user.name}
                  </td>

                  <td className='border  border-slate-700 rounded-md text-center max-md:hidden'>
                      {user.role}
                  </td>

                  <td className='border  border-slate-700 rounded-md text-center '>
                     <div className='flex justify-center gap-x-4'>
                      <Link to={`/admin/userlist/showuser/${user._id}`}>
                          <RemoveRedEyeIcon className='text-2xl text-green-800'/>
                      </Link>
                      {/* <Link to={`/editbook/${book._id}`}> */}
                          <ManageAccountsIcon className='text-2xl text-yellow-600'/>
                      {/* </Link>
                      <Link to={`/deletebook/${book._id}`}> */}
                          <DeleteIcon className='text-2xl text-red-600'/>
                      {/* </Link> */}
                     </div>
                  </td> 
              </tr>

))}
       </tbody>

    </table>)}
    
  </div>
  )
}

export default UserList