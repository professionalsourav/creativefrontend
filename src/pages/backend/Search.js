import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from '../../components/creator/Card';
import Menu from "../../components/creator/Menu";
import Navbar from "../../components/creator/Navbar";
import Vcnavbar from "../../components/creator/Vcnavbar";


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



const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/api/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);

  return(
  
    <Container>
    <Menu/>
<Main>
    <Vcnavbar/>
    <Wrapper>
  
  <ContainerSearch>
    {videos.map(video=>(
      <Card key={video._id} video={video}/>
    ))}
  </ContainerSearch>
  

  </Wrapper>
     </Main>
    </Container>
  
  
  
  
  
  
  )
};

export default Search