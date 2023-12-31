import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import AdminMenu from '../../components/admin/AdminMenu';
import AdminNav from '../../components/admin/AdminNav';
import AdminCard from '../../components/admin/AdminCard';
import axios from 'axios';


const ContainerSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;


const AdminSearch = () => {

    const [videos, setVideos] = useState([]);
    const query = useLocation().search;

    useEffect(() => {
        const fetchVideos = async () => {
          const res = await axios.get(`/api/videos/search${query}`);
          setVideos(res.data);
        };
        fetchVideos();
      }, [query]);

  return (
    <Container>
    <AdminMenu/>
<Main>
    <AdminNav/>
    <Wrapper>
  
  <ContainerSearch>
    {videos.map(video=>(
      <AdminCard key={video._id} video={video}/>
    ))}
  </ContainerSearch>
  

  </Wrapper>
     </Main>
    </Container>
  )
}

export default AdminSearch