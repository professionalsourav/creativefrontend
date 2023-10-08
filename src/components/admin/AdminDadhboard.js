import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';
import Main from './Main';

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const AdminDadhboard = () => {
  return (
    <div>
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>


         <div className='flex items-center rounded-[5px]'>
            <input type='text' className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for ...'/>


           <div  className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
               <SearchIcon style={{color:"white"}}/>
           </div>


         </div>

         <div  className='flex items-center gap-[15px] relative'>
               <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                    <NotificationsIcon/>
                    <EmailIcon/>

               </div>
               <div className='flex items-center gap-[15px] relative'>
                <p>sourav</p>
                <div>
                    <Avatar  src='https://firebasestorage.googleapis.com/v0/b/video-b95b6.appspot.com/o/1693893007647mypic.jpeg?alt=media&token=1d7eea14-bf67-4d26-9e99-0f04aea63f53' alt=''/>
                </div>
               </div>
         </div>
        


    </div>
        <Main/>
    </div>
  )
}

export default AdminDadhboard