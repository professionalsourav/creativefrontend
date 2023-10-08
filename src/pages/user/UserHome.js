import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserNavbar from '../../components/user/UserNavbar';
import Card from '../../components/creator/Card';
import UserMenu from '../../components/user/UserMenu';

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

const UserHome = ({type}) => {

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    const fetchVideos = async () =>{
      const config = {
        Headers: {
          "Content-Type" : "application/json"},
          withCredentials: true
       }
      const res = await axios.get(`https://creativebackend.onrender.com/api/videos/${type}`,config)
      setVideos(res.data)
    }
    fetchVideos()
  },[type])
  

  return (
    <div> 
        
        <Container>
    <UserMenu/>
<Main>
    <UserNavbar/>
    <Wrapper>
    <Container2>
    {videos.map((video) => (
         <Card  key={video._id} video={video}/>
      ))}
        
    </Container2>
    </Wrapper>
     </Main>
    </Container>
    
    </div>
  )
}

export default UserHome