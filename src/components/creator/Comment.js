import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {format} from "timeago.js";
import styled from "styled-components"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details = styled.div`

display: flex;
flex-direction: column;
gap: 10px;

`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: #000;
margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
`;

const Comment = ({comment}) => {

  const [channel, setChannel] = useState({});
  const { currentUser } = useSelector((state) => state.user);





  useEffect(() => {
    const fetchComment = async () => {
      const configf = {
        Headers: {
          "Content-Type" : "application/json"},
          withCredentials: true
       }
      const res = await axios.get(`/api/users/find/${comment.userId}`,configf);
    
      setChannel(res.data)
    };
    fetchComment();
  }, [comment.userId]);

  const handleDeleteComment = (e) =>{
    e.preventDefault();
    //alert("hii")
    
    // axios.get
   
    
    axios.delete(`/api/comments/${comment._id}`).then((res)=>{
          
    
          console.log(`sucessfully deleted : ${res.data}` )
    
    }).catch((err)=>{
      console.log(`error : ${err}`)
    })
  
  }

  return (
    <Container>
         <Avatar src={channel.img} />
    <Details>
        <Name>
        {channel.name} <Date> {format(comment.createdAt)}</Date>
        </Name>
        <Text>
        {comment.desc} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <button onClick={handleDeleteComment}>
        < MoreVertOutlinedIcon style={{fontSize:'small'}}/>
        </button>
        
        </Text>
       
    </Details>
    </Container>
  )
}

export default Comment