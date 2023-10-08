import React, {useState} from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import "./Signup.css"

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   const Navigate = useNavigate();

//form function 

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await axios.post(`/v1/auth/signup`,{name,email,password});
     
        
              Navigate("/login");
            
          
     }
     
     catch (error) {
     console.log(error)
      }
 
};



  return (
    <div>
        <Header/>
      <div className='signup'><h1>signup</h1>
   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Email adress</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" required/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>

</div>
        <Footer/>
</div>
  )
}

export default Signup