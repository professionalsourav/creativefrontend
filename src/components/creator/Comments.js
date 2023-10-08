import React, { useEffect, useState } from 'react'
import  styled from 'styled-components'
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../../redux/userSlice';

const Container = styled.div`

`;
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Input = styled.input`
border: none;
border-bottom: 1px solid black;
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
`;

const Comments = ({videoId}) => {

  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`https://night-rua3.onrender.com/api/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);



  
  // const handleSubmitComment = async (e)=>{
   
  //   e.preventDefault();
   
  //   const res = await axios.post("http://localhost:8000/api/comments", {setNewComment,videoId})
   
  // }
    

  return (
    <Container>

        <NewComment>
            <Avatar src={currentUser.img}  />
            <Input  placeholder='Add a comment...' onChange={(e) =>setNewComment(e.target.value)}/>
            <button >send</button>
        </NewComment>
        {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}

export default Comments