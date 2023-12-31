import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useState } from 'react'
import "./Signup.css"
import {  useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import styled from "styled-components"
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;


const Containersi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(120vh - 30px);
  color: red;
`;

const Wrappersi = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(158deg, rgb(90, 199, 236) 0%, rgb(126, 74, 119) 100%);
  border: 1px solid black;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(118, 26, 10);
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  background-color: white;
  width: 100%;
  color: red;
  outline: none;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: black;
  color: white;
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: black;
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;






const Login = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();


   const postDetails = (pics) => {
     setLoading(true);

     if (pics === undefined) {
       alert("please select image");
       return;
     }

     if (pics.type === "image/jpeg" || pics.type === "image/png") {
       const data = new FormData();
       data.append("file", pics);
       data.append("upload_preset", "socket_io");
       data.append("cloud_name", "dncqsxqvs");
       fetch("https://api.cloudinary.com/v1_1/dncqsxqvs/image/upload", {
         method: "post",
         body: data,
       })
         .then((res) => res.json())
         .then((data) => {
           setImg(data.url.toString());
           console.log(data.url.toString());
           setLoading(false);
         })
         .catch((err) => {
           console.log(err);
           setLoading(false);
         });
     } else {
       alert("please select image");
       setLoading(false);
       return;
     }
   };

  const handleLogin = async (e) => {
      e.preventDefault();
      dispatch(loginStart());
      try {

         const config = {
          Headers: {
            "Content-Type" : "application/json"},
            withCredentials: true
         }

        const res = await axios.post(`/api/v1/auth/signin`,{name,password}, config);
        if(res.data.role === 0){
        dispatch(loginSuccess(res.data));
        navigate("/userhome")
        }
      } catch (err) {
        dispatch(loginFailure());
      }
    };

    const signInWithGoogle = async () => {
         
      const config = {
        Headers: {
          "Content-Type" : "application/json"},
          withCredentials: true
       }
     
      dispatch(loginStart());
      signInWithPopup(auth, provider)
        .then((result) => {
          axios
            .post("/api/v1/auth/google", {
              name: result.user.displayName,
              email: result.user.email,
              img: result.user.photoURL,
             
            },config)
            .then((res) => {
              if(res.data.role === 0){
              console.log(res)
              dispatch(loginSuccess(res.data));
              navigate("/userhome")
              }
            });
          
        })
        .catch((error) => {
          dispatch(loginFailure());
        });
    };


    const handleSignup = async (e) =>{
      e.preventDefault();
      try {

          const res = await axios.post(`/api/v1/auth/signup`, {
            name,
            email,
            password,
            img,
          });
         
            
                  navigate("/");
                
              
         }
         
         catch (error) {
         console.log(error)
          }
     
    };
  return (
    <div>
      <Header />

      <Containersi>
        <Wrappersi>
          <Title>User dashboard</Title>
          <Title>Sign in</Title>

          <Input
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Sign in</Button>
          <Title>or</Title>
          <Button onClick={signInWithGoogle}>Signin with Google</Button>
          <Title>or</Title>
          <Input
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
          />

          <Button onClick={handleSignup}>Sign up</Button>
        </Wrappersi>
        <More>
          English(USA)
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Links>
        </More>
      </Containersi>

      <Footer />
    </div>
  );
}

export default Login