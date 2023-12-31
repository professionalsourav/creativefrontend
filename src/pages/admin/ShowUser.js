import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserListBack from '../../components/admin/UserListBack';
import Spinner from '../../components/admin/Spinner';

const ShowUser = () => {


    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() =>{
        setLoading(true);

        axios.get(`/api/users/get/user/${id}`).then((res)=>{
            console.log(res.data)
            setUser (res.data);
            setLoading(false)
        }).catch((error)=>{
           console.log(error);
           setLoading(false);
        })
    }, [])



  return (
    <div className='p-4'>
        <UserListBack/>
        <h1 className='text-3xl my-4 '>User Detail</h1>
        {
            loading ? (<Spinner/>): (<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Id :</span>
                     <span>{user._id}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Name :</span>
                     <span>{user.name}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Email :</span>
                     <span>{user.email}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Role :</span>
                     <span>{user.role}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Subscriber :</span>
                     <span>{user.subscribers}</span>
                </div>

              

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Subscribed User :</span>
                     <span>{user.subscribedUsers}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>created :</span>
                     <span>{new Date(user.createdAt).toString()}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>updated At :</span>
                     <span>{new Date(user.updatedAt).toString()}</span>
                </div>


            </div>)
        }
    </div>
  )
}

export default ShowUser