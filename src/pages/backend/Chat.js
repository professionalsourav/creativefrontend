import React from "react";
import styled from "styled-components";
import Menu from "../../components/creator/Menu";
import Navbar from "../../components/creator/Navbar";
import ChatBox from "../../components/creator/ChatBox";
import SendMessage from "../../components/creator/SendMessage";
import ChatNavbar from "../../components/creator/ChatNavbar";
import "./Chat.css";
import { AuthProvider } from "../../components/context/AuthContext";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`

`;

const Chat = () => {
  return (
    <div className="bgchat">
<AuthProvider>

<Container>
        <Menu/>
    <Main>
        <Navbar/>
        <Wrapper>

           
           <ChatBox/>
           <SendMessage/>  
           
        </Wrapper>
     </Main>
    </Container>

    </AuthProvider>

          {/* <ChatNavbar/>
           <ChatBox/>
           <SendMessage/>  */}
          
    </div>
  );
};

export default Chat;
