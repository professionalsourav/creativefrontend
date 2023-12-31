import React from 'react'


import styled from "styled-components";
import HouseIcon from "@mui/icons-material/House";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginFailure, logout } from '../../redux/userSlice';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DvrIcon from '@mui/icons-material/Dvr';


const Container = styled.div`
  flex: 1;
  background-color: rgb(41, 67, 234);
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 15px 0;
  &:hover {
    background-color: rgb(147, 35, 253);
  }
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


const AdminMenu = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = async (e) => {
    try {
      dispatch(logout());
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };


  return (
    <div>

    <Container>
          <Wrapper>
            <Logo>
              <Img src="https://picsum.photos/20/30" />
              creative world
            </Logo>
            <Link to="/admin" style={{ textDecoration: "none", color: "white" }}>
              <Item>
                <HouseIcon />
                Home
              </Item>
            </Link>
            <Link
              to="/admin/trends"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Item>
                <ExploreIcon />
                Explore
              </Item>
            </Link>
    
            {!currentUser && (
              <>
                <Login>
                  <Link to="signin" style={{ textDecoration: "none" }}>
                    <Button>
                      <AccountCircleOutlinedIcon />
                      SIGN IN
                    </Button>
                  </Link>
                </Login>
              </>
            )}
    
    <Link
              to="/admin/subscriptions"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Item>
                <SubscriptionsIcon />
                Subscription
              </Item>
            </Link>

            <Link to="/admin/userlist" style={{ textDecoration: "none", color: "white" }}>
              <Item>
                <FormatListNumberedIcon />
                User List
              </Item>
            </Link>

            <Link to="/admin/videolist" style={{ textDecoration: "none", color: "white" }}>
              <Item>
                <DvrIcon />
                Video List
              </Item>
            </Link>
    
    
           
    
    
            <Button onClick={handleLogout}>log out</Button>
          </Wrapper>
        </Container>
        </div>
  )
}

export default AdminMenu