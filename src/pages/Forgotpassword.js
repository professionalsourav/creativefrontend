import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'

const Forgotpassword = () => {
  const [password, setPassword] = useState("")
  const [reEnterPassword, setReEnterPassword] = useState("")
 const navigate = useNavigate();


 const handleSubmit = async (e) =>{
  e.preventDefault();

    navigate("/login");
  
}
  return (
    <div>
        <Header/>
      <div className='signup'><h1>forgotpassword</h1>
   <form onSubmit={handleSubmit}>
  
   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">enter Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required />
  </div>
  

  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">erenter Password</label>
    <input type="password" value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>

</div>
        <Footer/>
</div>
  )
}

export default Forgotpassword