import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import UserBacButtn from '../../components/user/UserBacButtn';

const UserDelteUser = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigaet = useNavigate();
    const handleDelete = () =>{
        // alert("hii")
 
        axios.delete(`/api/users/${currentUser._id}`).then((res)=>{
         alert("sucessfully deleted")
         navigaet("/");
           console.log(res);
        }).catch((err)=>{
           console.log(err)
        })
     }
 
     const handleUnDelete = () =>{
         navigaet("/userhome")
     }
 
  return (
    <div className='h-screen
    p-4'>
       <UserBacButtn/>
        <h1 className='text-3xl my-4'>Delete Profile</h1>
        
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2xl'>Are you sure You want to delete your profile?</h3>


            <button className='p-4 bg-red-600 text-white m-8 w-full'
              onClick={handleDelete}
            >
               Yes, delete it
            </button>

            <button className='p-4 bg-green-600 text-white m-8 w-full'
              onClick={handleUnDelete}
            >
               NO, Cencel it
            </button>

        </div>
    </div>
  )
}

export default UserDelteUser