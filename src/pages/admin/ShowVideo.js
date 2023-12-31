import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/admin/Spinner';
import VideoListBack from '../../components/admin/VideoListBack';

const ShowVideo = () => {

    
    const [video, setVideo] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() =>{
        setLoading(true);

        axios.get(`/api/videos/get/video/${id}`).then((res)=>{
            console.log(res.data)
            setVideo (res.data);
            setLoading(false)
        }).catch((error)=>{
           console.log(error);
           setLoading(false);
        })
    }, [])

  return (
    <div className='p-4'>
         <VideoListBack/> 
        <h1 className='text-3xl my-4 '>Video Detail</h1>
        {
            loading ? (<Spinner/>): (<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>UserId :</span>
                     <span>{video.userId}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Title :</span>
                     <span>{video.title}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>Description :</span>
                     <span>{video.desc}</span>
                </div>


                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>imgUrl :</span>
                     <span>{video.imgUrl}</span>
                </div>


                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>videoUrl :</span>
                     <span>{video.videoUrl}</span>
                </div>
              

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>views :</span>
                     <span>{video.views}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>likes :</span>
                     <span>{video.likes}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>dislikes :</span>
                     <span>{video.dislikes}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>created :</span>
                     <span>{new Date(video.createdAt).toString()}</span>
                </div>

                <div className='my-4'>
                     <span className='text-xl mr-4 text-gray-500'>updated At :</span>
                     <span>{new Date(video.updatedAt).toString()}</span>
                </div>


            </div>)
        }
    </div>
  )
}

export default ShowVideo