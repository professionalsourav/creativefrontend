import React, { useState } from 'react'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db,auth } from '../../firebase';

const SendMessage = () => {

  const [value, setValue] = useState("");


  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }
    try {
      const { uid, displayName, photoURL } = auth.currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setValue("");
  }
  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
        <form onSubmit={handleSendMessage} className='px-20  mx-auto max-w-4xl flex'>
            <input value={value} onChange={e => setValue(e.target.value)} className='input w-full focus:outline-none bg-gray-100 rounded-r-none' type='text'/>
            <button type='submit' className='w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm'>send</button>
        </form>
    </div>
  )
}

export default SendMessage