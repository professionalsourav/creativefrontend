import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';

import Login from './pages/Login';
import FrontHome from './pages/Home';
import Forgotpassword from './pages/Forgotpassword';
import Pagenotfound from './pages/Pagenotfound';
import Signup from './pages/Signup';
import {ToastContainer, toast} from "react-toastify";
import Userdashboard from './pages/user/Userdashboard';
import styled from "styled-components"
import Chat from './pages/backend/Chat';
import Explore from './pages/backend/Explore';
import Video from './pages/backend/Video';
import Home from './pages/backend/Home';
import Signin from './pages/backend/Signin';
import Search from './pages/backend/Search';
import Filegalary from './pages/backend/Filegalary';
import AdminSignin from './pages/AdminSignin';
import UserHome from './pages/user/UserHome';
import UserFilegalary from './pages/user/UserFilegalary';
import UserChat from './pages/user/UserChat';
import UserVideo from './pages/user/UserVideo';
import Adminhome from './pages/admin/Adminhome';
import Scess from './pages/backend/Scess';
import Main from './components/admin/Main';






const Container = styled.div`
display: flex;

`;

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<FrontHome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adminsignin' element={<AdminSignin/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='/signup' element= {<Signup/>}/>
      <Route path='*' element={<Pagenotfound/>}/>


   
  
      <Route path='/user' element={<Home type="random"/>}/>
      <Route path='/user/trends' element={<Home type="trend"/>}/>
      <Route path='/user/subscriptions' element={<Home type="sub"/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='/user/chat' element={<Chat/>}/>
      <Route path='/user/explore' element = {<Explore/>}/>
      <Route path="/user/signin" element= {<Signin/>}/>
      <Route path='/user/filegalary' element= {<Filegalary/>}/>
      <Route path='/user/sucess' element= {<Scess/>}/>
      <Route path='video'>
        <Route path=':id' element={<Video/>}/>
      </Route>
    
      <Route path='/userhome' element={<UserHome type="random"/>}/>
      <Route path='/userhome/trends' element={<UserHome type="trend"/>}/>
      <Route path='/userhome/subscriptions' element={<UserHome type="sub"/>}/>
      <Route path='/userhome/userfilegalary' element={<UserFilegalary/>}/>
      <Route path='/userhome/userchat' element={<UserChat/>}/>
      
      
     <Route path='/adminhome' element={<Adminhome/>}>
           <Route index element={<Main/>}/>
      </Route>

    </Routes>
    
    
   
    
    </>
  );
}

export default App;
