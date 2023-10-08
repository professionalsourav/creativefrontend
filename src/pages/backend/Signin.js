import React, { useState } from 'react'
import styled from "styled-components"
import Menu from '../../components/creator/Menu';
import Navbar from '../../components/creator/Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import axios from 'axios';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';



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
  height: calc(100vh - 56px);
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

const Signin = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {

           const config = {
            Headers: {
              "Content-Type" : "application/json"},
              withCredentials: true
           }

          const res = await axios.post(`https://night-rua3.onrender.com/api/v1/auth/signin`,{name,password}, config);
          dispatch(loginSuccess(res.data));
          navigate("/user")
        } catch (err) {
          dispatch(loginFailure());
        }
      };

      const signInWithGoogle = async () => {
        const configf = {
          Headers: {
            "Content-Type" : "application/json"},
            withCredentials: true
         }
       
        dispatch(loginStart());
        signInWithPopup(auth, provider)
          .then((result) => {
            axios
              .post("https://night-rua3.onrender.com/api/v1/auth/google", {
                name: result.user.displayName,
                email: result.user.email,
                img: result.user.photoURL,
               
              }, configf)
              .then((res) => {
                console.log(res)
                dispatch(loginSuccess(res.data));
                navigate("/user")
              });
            
          })
          .catch((error) => {
            dispatch(loginFailure());
          });
      };


      const handleSignup = async (e) =>{
        e.preventDefault();
        try {

          const configf = {
            Headers: {
              "Content-Type" : "application/json"},
              withCredentials: true
           }
            const res = await axios.post(`https://night-rua3.onrender.com/api/v1/auth/signup`,{name,email,password},configf);
           
              
                    navigate("/");
                  
                
           }
           
           catch (error) {
           console.log(error)
            }
       
      };


  return (
    <div>
   
    <Header/>

    <Containersi>
      <Wrappersi>
        <Title>Creator dashboard</Title>
        <Title>Sign in</Title>
       
        <Input placeholder="username"
         onChange={(e) => setName(e.target.value)}/>
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
        <Input placeholder="email" 
         onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
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



<Footer/>
    
</div>
  )
}

export default Signin