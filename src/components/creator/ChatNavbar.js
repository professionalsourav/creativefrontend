import React, { useState } from 'react'
import "./Chat.css";
import { useNavigate } from 'react-router-dom';
const ChatNavbar = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate("/user")
    }
  return (
    <div className="px-20 navbar bg-neutral text-neutral-content">

<div className="navbar bg-neutral text-neutral-content">
  <a className="btn btn-ghost normal-case text-xl">creative world</a>
  <button  onClick={handleBack}>back</button>
</div>

    </div>
  ) 
}

export default ChatNavbar