import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='allNavbar' to="/">HOME</Link>
      <Link to="/signup">SIGNUP</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/menu">MENU</Link>
      <Link to="/location">LOCATION</Link>
      <Link to="/crud">Crud</Link>
      <Link to="/table">Table</Link>
      <Link to="/you">YOUTUBE</Link>



      

    </div>
  );
}

export default Navbar;
