import React from 'react'
import styled from "styled-components"
import Menu from '../../components/creator/Menu'
import Navbar from '../../components/creator/Navbar'
import Home from '../backend/Home';



const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;



const Userdashboard = () => {
  return (
    <Container>
        <Menu/>
    <Main>
        <Navbar/>
        <Wrapper>
            <Home/>
        </Wrapper>
     </Main>
    </Container>
  )
}

export default Userdashboard