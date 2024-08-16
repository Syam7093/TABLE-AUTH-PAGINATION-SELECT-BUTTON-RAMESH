import React, { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import { cartContext } from '../App';
import Swal from 'sweetalert2'
import Navbar from './Navbar';
import ReusablePagination from './ReusablePagination';



const Home = () => {
  const [dataRecipe, setDataRecipe] = useState([]);
  const [search,setSearch]=useState('')
  const { cart, setCart } = useContext(cartContext);
  // console.log(cart,"cart----")

  useEffect(() => {
    recipesData();
  }, []);

  const recipesData = async () => {
    let data = await axios.get('https://dummyjson.com/recipes');
    // console.log(data.data.recipes, 'ramehs');
    setDataRecipe(data.data.recipes);
  };

  const filterdata=dataRecipe.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  const selectItem=(item)=>{
    console.log(item,"ramesh---")
    setCart([...cart,item])

  }

  const [currentpage,setCurrentPage]=useState(1)
  const itemperpage=5

  const lastindex=currentpage*itemperpage
  const firstindex=lastindex-itemperpage
  const showthiitem=filterdata.slice(firstindex,lastindex)
  const numbers=[]
  for(let i=1;i<=Math.ceil(filterdata.length/itemperpage);i++)
  {
      numbers.push(i)
  }

  return (
    
        <cartContext.Provider value={cart}>
            <Navbar></Navbar>
            <div className='search'>
            <input className='custom-input' onChange={(e)=>{
                setSearch(e.target.value)
                setCurrentPage(1)
            }} placeholder='Search item here...' height="40px" width="40px" type="text"></input>
        </div>
      <div className="cards-container">
        {showthiitem.map((e) => {
          return (
            <div className="card" key={e.id}>
              <h4>{e.name}</h4>
              <img src={e.image} alt={e.name} height="100px" width="100px" />
              <div>
                <button onClick={()=>{
                  selectItem(e)
                  Swal.fire("Item is added to cart..");
                }}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <></>
      <Outlet />
      <ReusablePagination numbers={numbers} filterdata={filterdata} currentpage={currentpage} setCurrentPage={setCurrentPage} itemperpage={itemperpage}></ReusablePagination>
        </cartContext.Provider>
    
  );
};

export default Home;
