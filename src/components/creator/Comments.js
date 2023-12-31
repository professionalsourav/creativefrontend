import React, { useEffect, useState } from 'react'
import  styled from 'styled-components'
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../../redux/userSlice';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

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
 // console.log(videoId)

  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);



  
  const handleSubmit = (e) => {
    e.preventDefault();

    const commentData = {
      desc: commentText,
      videoId,

    };

    axios
      .post('/api/comments', commentData) // Replace with your actual API endpoint
      .then((response) => {
       setCommentText("")
      

      
       // console.log('Comment sent successfully:', response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request, e.g., display an error message
        console.error('Error sending comment:', error);
      });
  };
    

  return (
    <Container>

        <NewComment>
            <Avatar src={currentUser.img}  />
            <Input  placeholder='Add a comment...'  value={commentText}
        onChange={(e) => setCommentText(e.target.value)}/>

            <button onClick={handleSubmit}><SendOutlinedIcon/></button>
        </NewComment>




        {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}

export default Comments