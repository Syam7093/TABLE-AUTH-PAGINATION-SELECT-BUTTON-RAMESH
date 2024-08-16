import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import axios  from 'axios'

const Location = () => {

  const [ison,seton]=useState(true)

  const handleClick=()=>{
    seton(!ison)
  }

  const [one,setone]=useState([])
  const [select,setselct]=useState([])
  const [item,setitem]=useState("")
  console.log(item,"itemsss")
  const addsomdta=()=>{
    setone([...one,{name:"name"}])
  }
  
  useEffect(()=>{
    selebardatda()
  },[])
  const selebardatda=async()=>{
    let data=await axios.get('https://dummyjson.com/recipes');
    console.log(data.data.recipes)
    setselct(data.data.recipes)

  }

  const findone=select.find((e)=>{
    return e.name==item
  })
  console.log(findone,"findone")




  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>

        <div>
          <button onClick={()=>{
            addsomdta()
          }}>add new</button>
          <button>clearall</button>

          {
            one.map((e)=>{
              return (
                <select>
            <option>sunday</option>
            <option>monday</option>
            <option>tuesday</option>
            <option>thursday</option>
          </select>
              )
            })
          }

        </div>

        <div>
          <select onChange={(e)=>{setitem(e.target.value)}}>
            <option>
            
            </option>
            {select.map((e)=>{
              return(
                <option>{e.name}</option>
              )
            })}
          </select>
        </div>
        <div>
           {findone?.tags?.map((e)=>{
            return (
                <li>{e}</li>
            )
           })}
        </div>
        <div>
          <button onClick={()=>{
            handleClick()
          }}>{ison?"ON":"OFF"}</button>
        </div>
    </div>
  )
}

export default Location