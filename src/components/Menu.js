import React, { useContext } from 'react';
import { cartContext } from '../App';
import "../App.css"
import Navbar from './Navbar';

const Menu = () => {
  const { cart,setCart } = useContext(cartContext);

  // console.log(cart, "Cart data in Login");

  const deleteItem=(item)=>{

    let del=cart.filter((e)=>{
        return e!==item
    })
    setCart(del)


  }

  return (
    <div>
        <Navbar></Navbar>
        <div className='lenth'>
        <h1 >{cart.length}</h1>
        </div>
     <div className="cards-container">
        {cart.map((e) => {
          return (
            <div className="card" key={e.id}>
              <h4>{e.name}</h4>
              <img src={e.image} alt={e.name} height="100px" width="100px" />
              <div>
                <button onClick={()=>{
                  deleteItem(e)
                }}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
