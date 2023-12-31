import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../components/creator/Card';
import axios from "axios"
import Menu from '../../components/creator/Menu';
import Navbar from '../../components/creator/Navbar';
import { useNavigate } from 'react-router-dom';


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




const Home = ({type}) => {


  const [videos, setVideos] = useState([])
  const [suc, setSuc] = useState();
  const navigate = useNavigate();

useEffect(()=>{
  const fetchVideos = async () =>{
    const configf = {
      Headers: {
        "Content-Type" : "application/json"},
        withCredentials: true
     }
    const res = await axios.get(`/api/videos/${type}`,configf)
    setVideos(res.data)
  }
  fetchVideos()
},[type])

useEffect(() =>{
axios.get("/api/protect/creator")
.then((res) =>
{if(res.statusText === "OK"){
  setSuc("success")
}else{
  navigate("/")
}}).catch(err =>{
  console.log(err);
})
},[])


  return (
    <Container>
    <Menu/>
<Main>
    <Navbar/>
    <Wrapper>
    <Container2>
      {videos.map((video) => (
         <Card  key={video._id} video={video}/>
      ))}
        
    </Container2>
    </Wrapper>
     </Main>
    </Container>
  )
}

export default Home