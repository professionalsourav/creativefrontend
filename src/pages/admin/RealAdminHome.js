import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import AdminMenu from './../../components/admin/AdminMenu';
import AdminNav from './../../components/admin/AdminNav';
import AdminCard from './../../components/admin/AdminCard';


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

const RealAdminHome = ({type}) => {

  const [videos, setVideos] = useState([]);
 


  useEffect(()=>{
    const fetchVideos = async () =>{
      const config = {
        Headers: {
          "Content-Type" : "application/json"},
          withCredentials: true
       }
      const res = await axios.get(`/api/videos/${type}`,config)
      setVideos(res.data)
    }
    fetchVideos()
  },[type])


  return (
    <div> 
        
        <Container>
    <AdminMenu/>
<Main>
    <AdminNav/>
    <Wrapper>
    <Container2>
    {videos.map((video) => (
         <AdminCard  key={video._id} video={video}/>
      ))}
        
    </Container2>
    </Wrapper>
     </Main>
    </Container>
    
    </div>
  )
}

export default RealAdminHome