import React from 'react'
import styled from "styled-components"
import UserMenu from '../../components/user/UserMenu';
import UserNavbar from '../../components/user/UserNavbar';
import { AuthProvider } from '../../components/context/AuthContext';
import ChatBox from '../../components/creator/ChatBox';
import SendMessage from '../../components/creator/SendMessage';


const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;
const UserChat = () => {
  return (
    <div>

<AuthProvider>

<Container>
    <UserMenu/>
    <Main>
    <UserNavbar/>
    <Wrapper>

    <ChatBox/>
    <SendMessage/>  



    </Wrapper>
 </Main>
</Container>
</AuthProvider>
    </div>
  )
}

export default UserChat