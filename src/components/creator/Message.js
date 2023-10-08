import React from 'react'

import { auth } from '../../firebase'

const Message = ({message}) => {

   
  return (
    <div>
        <div className={`chat ${message.uid === auth.currentUser.uid ? "chat-end" : "chat-start"}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={message.avatar} alt=''/>
    </div>
  </div>
  <div className="chat-header">
  {message.name}
   
  </div>
  <div className="chat-bubble">{message.text}</div>
  
</div>

    </div>
  )
}

export default Message