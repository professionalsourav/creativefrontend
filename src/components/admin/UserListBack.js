import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
const UserListBack = ({dest = "/admin/userlist"}) => {
  return (
    <div className='flex'>
    <Link
    to={dest}
    className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
    >
        <ReplyIcon className='text-2xl'/>
    </Link>

</div>
  )
}

export default UserListBack