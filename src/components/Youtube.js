import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"

const Youtube = () => {

    const countries=[
        {name:"INDIA",cities:["mumbai","chennai"]},
        {name:"PAK",cities:["KARACHI","HYD"]},
        {name:"AMERICA",cities:["USE","US"]}]
    const [select,setselect]=useState('')
    console.log(select,"select...")
    
    const [some,setsome]=useState([])

    let findcity=countries.find((e)=>{
        return e.name==select
    })
    
    useEffect(()=>{
        showdata()
    },[some])

    const showdata=async()=>{
        let data=await axios.get("http://localhost:3435/users")
        console.log(data,"ss")
        setsome(data.data)
    }
    const deleteusers=async(id)=>{
        let data=await axios.delete(`http://localhost:3435/users/${id}`)
        let main=some.filter((e)=>{
            return e.id!==data.id
        })
        setsome(main)
        // console.log(data,"ss")
        // setsome(data.data)
    }
    
    const [games,setgames]=useState(["cricket","volleyball","kabaddi"])

    const handleDelete=(s)=>{
        let data=games.filter((e)=>{
            return e!==s
        })
        setgames(data)

    }
    const [check,setcheck]=useState()
    
    const handlchange=(e,game)=>{
        setcheck(e.target.checked)
    }
   

  return (
    <div>
        <Navbar></Navbar>
        <div>
            <h1>Task 1 selectbar based on the country show the citites in dropdown</h1>
            <div>
                <select onChange={(e)=>{setselect(e.target.value)}}>
                    {countries.map((e)=>{
                        return(
                            <option>{e.name}</option>
                        )
                    })}
                </select>
                <select >
                    {findcity?.cities?.map((e)=>{
                        return(
                            <option>{e}</option>
                        )
                    })}
                </select>

            </div>
        </div>
        <div>
            <h1>task-2 checkbox delete item</h1>
            <div>
                <table>
                    <tr>
                        <th>sno</th>
                        <th>name</th>

                        <th>action</th>
                    </tr>
                    {some.map((e,game)=>{
                        return(
                           <tr>
                            <td><input type="checkbox"></input></td>
                            <td>{e.name}</td>
                            <td><button onClick={()=>{
                                deleteusers(e.id)
                            }}>delete</button></td>

                           </tr>
                        )
                    })}
                </table>
            </div>
        </div>

    </div>
  )
}

export default Youtube