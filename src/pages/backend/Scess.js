import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;

const Container2 = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
}
`;





const Scess = () => {
  return (
    <div>
       <section className='h-screen bg-green-200 flex-1 text-center justify-center p-28'>
        

        <Link to={"/user"} className='text-3xl font-bold cursor-pointer'>
            video has sucessfully uploaded
        </Link>

        
      
        

       </section>
   
        
   
       
        
    </div>

     
  )
}

export default Scess