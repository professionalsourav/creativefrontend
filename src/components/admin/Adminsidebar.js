import React, { useState } from "react";
import styled from "styled-components";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BuildIcon from '@mui/icons-material/Build';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailure, logout } from "../../redux/userSlice";
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

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

const Adminsidebar = () => {

    const { currentUser } = useSelector((state) => state.user);
  const [openav, setOpenav] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleLogout = async (e) => {
        try {
          dispatch(logout());
          navigate("/");
        } catch (err) {
          dispatch(loginFailure());
        }
      };



  return (
    <div className="bg-[#694edf] h-[213vh] px-[5px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] flex items-center gap-1 leading-[24px] font-bold cursor-pointer">
          <img src="https://picsum.photos/20/30" />
          Creative world
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px]  border-[#EDEDED]/[0.3]">
        <EqualizerIcon style={{ color: "white" }} />
        <p className="text-[14px] leading-[20px] font-medium text-white cursor-pointer">
          states
        </p>
      </div>

      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ">
        <p className="text-[14px] font-medium leading-[16px] text-white/[0.4]">INTERFACE</p>
          
                                 


        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <StickyNote2Icon style={{ color: "white" }} />
            <p className="text-[14px] leading-[20px] font-normal text-white ">
              Pages
            </p>
          </div>
          <ArrowRightIcon style={{ color: "white" }} />
        </div>


        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <LegendToggleIcon  style={{ color: "white" }} />
            <p className="text-[14px] leading-[20px] font-normal text-white ">
              Charts
            </p>
          </div>
          <ArrowRightIcon style={{ color: "white" }} />
        </div>

        
      </div>



      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ">
        <p className="text-[14px] font-medium leading-[16px] text-white/[0.4]">ADDONS</p>
          
                                 


        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <AcUnitIcon  style={{ color: "white" }} />
            <p className="text-[14px] leading-[20px] font-normal text-white ">
              components
            </p>
          </div>
          <ArrowRightIcon style={{ color: "white" }} />
        </div>


        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <BuildIcon   style={{ color: "white" }} />
            <p className="text-[14px] leading-[20px] font-normal text-white ">
              Utilities
            </p>
          </div>
          <ArrowRightIcon style={{ color: "white" }} />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <CalendarMonthIcon  style={{ color: "white" }} />
            <p className="text-[14px] leading-[20px] font-normal text-white ">
              Tables
            </p>
          </div>
         
        </div>


        

        
      </div>

      <Button onClick={handleLogout}>log out</Button>




    </div>
  );
};

export default Adminsidebar;
