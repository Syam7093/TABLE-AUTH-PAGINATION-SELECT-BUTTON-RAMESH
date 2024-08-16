import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2' 
import axios from "axios"
import ReusablePagination from './ReusablePagination';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  };
  const [currentpage,setcurrenptpage]=useState(1)
  const numbers=[]

  const handleSubmit =async () => {
    let datasend={
      name:formData.name,
      email:formData.email,
      password:formData.password
    }
    let data=await axios.post("http://localhost:3435/users",datasend)
    
    Swal.fire("Signup successfull...");
    // console.log(data,"data---")
    setFormData({name:"",email:"",password:""})
  };

  return (
    <div>
      <Navbar />
      {/* <ReusablePagination></ReusablePagination> */}
      <ReusablePagination numbers={numbers} currentpage={currentpage} setcurrenptpage={setcurrenptpage} ></ReusablePagination>
     
      <div className="signup-container">
        <h2>Signup</h2>
        {/* <form  className="signup-form"> */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" onClick={()=>{
            handleSubmit()
            
          }}>Submit</button>
        {/* </form> */}
        <Link to="/login">plz login</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Signup;
