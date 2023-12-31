import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { dislike, fetchSuccess, like } from '../../redux/videoSlice';
import UserMenu from '../../components/user/UserMenu';
import UserNavbar from '../../components/user/UserNavbar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import Recommendation from '../../components/Recommendation';
import Comments from '../../components/creator/Comments';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { subscription } from '../../redux/userSlice';
import { format } from 'timeago.js';
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import UserRec from '../../components/user/UserRec';





const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;

//video component
const VideoContainer = styled.div`
display: flex;
gap: 24px;
`;
const Content = styled.div`
flex: 5;
`;



const VideoWrapper = styled.div`

`;

const  Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: #235817;
`;

const  Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const  Info = styled.span`
color: #aa3d21;
`;

const Buttons = styled.div`
display: flex;
gap: 20px;
color: #21aa71;
`;

const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;

const Hr = styled.hr`
border: 0.5px solid black;
margin: 15px 0px;
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`;

const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: #000;
`;

const ChannelName = styled.span`
font-weight: 500;
`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: #5b7b0f;
font-size: 12px;
`;

const Description = styled.div`
font-size: 14px;
`;


const Subscribe = styled.button`
background-color: red;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;


const UserVideo = () => {

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];


 const [channel, setChannel] = useState({});
 const navigate = useNavigate();



 useEffect(()=>{
  const fetchData = async () =>{
    try {
      const configf = {
        Headers: {
          "Content-Type" : "application/json"},
          withCredentials: true
       }
      const videoRes = await axios.get(`/api/videos/find/${path}`,configf)
      const channelRes = await axios.get(`/api/users/find/${videoRes.data.userId}`,configf)
      setChannel(channelRes.data)
      dispatch(fetchSuccess(videoRes.data));
      //setVideo(videoRes.data)

    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
}, [path,dispatch])

const handleLike = async () => {
  const configf = {
    Headers: {
      "Content-Type" : "application/json"},
      withCredentials: true
   }
  await axios.put(`/api/users/like/${currentVideo._id}`,{
    Headers: {
      "Content-Type" : "application/json"},
      withCredentials: true
   })
  dispatch(like(currentUser._id));
};
const handleDislike = async () => {
  const config = {
    Headers: {
      "Content-Type" : "application/json"},
      withCredentials: true
   }
  await axios.put(`/api/users/unlike/${currentVideo._id}`,{
    Headers: {
      "Content-Type" : "application/json"},
      withCredentials: true
   });
  dispatch(dislike(currentUser._id));
};



const handleSub = async () => {

  const configf = {
    Headers: {
      "Content-Type" : "application/json"},
      withCredentials: true
   }
  currentUser.subscribedUsers.includes(channel._id)
    ? await axios.put(`/api/users/unsub/${channel._id}`,configf)
    : await axios.put(`/api/users/sub/${channel._id}`,configf);
  dispatch(subscription(channel._id));
};




const handleDelete = () => {
  axios
    .delete(`/api/videos/${currentVideo._id}`) // Replace with your actual API endpoint
    .then((response) => {
      // Handle the successful response here, e.g., display a success message
      console.log('Video deleted successfully:', response.data);
      navigate(`/user/delete`)
    })
    .catch((error) => {
      // Handle any errors that occur during the request, e.g., display an error message
      console.error('Error deleting video:', error);
      alert("you can not delete other video")
    });
};



  return (
    <Container>
        <UserMenu/>
    <Main>
        <UserNavbar/>
        <Wrapper>


          <VideoContainer>
            <Content>
            <VideoWrapper>
      
         <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>

               <Title>{currentVideo.title}</Title>
               <Details>
                <Info>{currentVideo.views} views • {format(currentVideo.createdAt)}</Info>
                <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}{" "}
              {currentVideo.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{" "}
              Dislike
            </Button>
            <Button onClick={handleDelete}>
              <DeleteForeverOutlinedIcon />delete
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
               </Details>
               <Hr/>
               <Channel>
                <ChannelInfo>
                  <Image src={channel.img}/>
                  <ChannelDetail>
                    <ChannelName>{channel.name} </ChannelName>
                    <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
                    <Description>
                     {currentVideo.desc}
                    </Description>
                  </ChannelDetail>
                </ChannelInfo>
                <Subscribe onClick={handleSub}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
               </Channel>
               <Hr/>
               <Comments videoId={currentVideo._id} />
            </Content>
            <UserRec tags={currentVideo.tags} />
          </VideoContainer>
        </Wrapper>
     </Main>
    </Container>
  )
}

export default UserVideo