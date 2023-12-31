import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const BackButton = ({dest= "/user"}) => {
  return (
    <div>
        <Link
        to={dest}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <KeyboardBackspaceIcon className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton