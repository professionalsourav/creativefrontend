import React, { useEffect, useState } from 'react'
import BackButton from '../../components/creator/BackButton'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const UpdatePro = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    //const id = useLocation().pathname.split("/")[2];
    //console.log(currentUser);
    useEffect(()=>{
      axios.get(`/api/users/find/${currentUser._id}`).then((res)=>{

        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        //console.log(res.data);

      }).catch((err)=>{
        console.log(err);
      })
    },[]);

    const handleUpdate = () =>{
        const data = {name,email,password};
        axios.put(`/api/users/${currentUser._id}`,data).then((res)=>{
            alert("sucessfully updated")
            console.log(res.data);
            navigate("/user")

        }).catch((err)=>{
               console.log(err);
        })
    }
  return (
    <div className='p-5'>
        <BackButton/>
        <h1 className="text-3xl my-4">Update Profile</h1>
      

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" id="tl">
            UserName
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="tl"
            className='input w-full focus:outline-none bg-gray-100 rounded-r-none'
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4" id="py">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="py"
            className='input w-full focus:outline-none bg-gray-100 rounded-r-none'
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" id="au">
            Password
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="au"
            className='input w-full focus:outline-none bg-gray-100 rounded-r-none'
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleUpdate}>
          save
        </button>
      </div>
    </div>
  )
}

export default UpdatePro