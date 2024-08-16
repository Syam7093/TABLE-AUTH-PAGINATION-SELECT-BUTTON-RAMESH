import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
import axios from "axios"

const Login = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [email1,setemail1]=useState('')
  const [store,setstore]=useState([])
  console.log(store,"store...")

  const [pass,setpass]=useState("")

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  let emialcahnge=async()=>{
    let data=await axios.get(`http://localhost:3435/users?email=${email1}`)
    console.log(data.data)
    setstore(data.data)

  }

  const changepassword=async()=>{
    store[0].password=pass
    let data=await axios.patch(`http://localhost:3435/users/${store[0].id}`,store[0])
// `http://localhost:7093/users/${one[0].id}`,one[0]
  }

  const handleSubmit = async() => {
    try
    {
      let data=await axios.get(`http://localhost:3435/users?email=${formData.email}&&password=${formData.password}`)
      console.log(data.data[0],"data-----")
      if((data.data[0].email==formData.email) && (data.data[0].password== formData.password))
      {
        // Swal.fire("Login successfull...")
        navigate("/location")
      setFormData({email:"",password:""})

      //  setTimeout(()=>{
      //   navigate("/location")
      //  },1000)
      }
      else{
        Swal.fire("Enter correct details....")
      }
      
    }
    catch(error)
    {
      console.log("error",error)
    }
    
  };

  return (
    <div >
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        {/* <form onSubmit={handleSubmit} className="login-form"> */}
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
            
          }}>Login</button>
        {/* </form> */}


        <button>Fogetpassword</button>
        <input onChange={(e)=>{
          setemail1(e.target.value)
        }} type="text" ></input>
        <button onClick={()=>{
          emialcahnge()
        }}>submit</button>
        <input type="text" onChange={(e)=>{
          setpass(e.target.value)
        }}></input>
        <button onClick={()=>{
          changepassword()
        }}>change</button>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
