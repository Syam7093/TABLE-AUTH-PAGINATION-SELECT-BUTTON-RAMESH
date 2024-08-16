import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { deleteusers, getuserData, updateusersdata, userCreate } from '../services/allApis'
import "../App.css"


const Crud = () => {

    const somess={
        width:"300px"
    }
  
    const [formdata,setformdata]=useState({item:"",price:""})
    const [data,setdata]=useState([])
    const [show,setshow]=useState(false)
    const [one,setone]=useState(null)

    const [search,setsearch]=useState("")
    const handleserach=(e)=>{
        setsearch(e.target.value)
        setcurrenptpage(1)

    }
    
    let fillllers=data.filter((e)=>{
        return e.item.toLowerCase().includes(search.toLowerCase())
        
    })

    
    

    const [currentpage,setcurrenptpage]=useState(1)
    const itemperpage=3

    const indexoflast=currentpage*itemperpage
    const indexoffirst=indexoflast-itemperpage
    const showdata=fillllers.slice(indexoffirst,indexoflast)

    const number=[]
    for(let i=1;i<=Math.ceil(fillllers.length/itemperpage);i++){
        number.push(i)
    }

    const handlChange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }


    const [formdata1,setformdata1]=useState({item1:"",price1:""})
    

    const handlChange1=(e)=>{
        setformdata1({
            ...formdata1,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmitdata=async()=>{
        let dataSend={
            item:formdata.item,
            price:formdata.price
        }
        let data=await userCreate(dataSend)
        console.log(data)
        setformdata({item:"",price:""})
    }
    useEffect(()=>{
        getuseralldata()
    },[data])
    
    const getuseralldata=async()=>{
        let data=await getuserData()
        console.log(data.data)
        setdata(data.data)
    }

    const deleteuser=async(ss)=>{
        // console.log(ss,'syam--')
      const datas=await deleteusers(ss)
      const deleteoness=data.filter((e)=>{
       return e.id!==datas.id
      })
    //   console.log(deleteoness,"deleteoness")
      setdata(deleteoness)
    }

    const userupdate=(mm)=>

    {
        console.log(mm,'mmmm')
        setshow(!show) 
        setformdata1({item1:mm.item,price1:mm.price})
        setone(mm)
    }

    const handleSubmitdata1=async()=>{
         let datasend={
            item:formdata1.item1,
            price:formdata1.price1
         }
        const data=await updateusersdata({id:one.id,user:datasend})
        setshow(false)
    }


    const handleprev=()=>{
        if(currentpage>1)
        {
            setcurrenptpage(currentpage-1)
        }
    }
    const handlENEXT=()=>{
        if(currentpage<number.length)
        {
            setcurrenptpage(currentpage+1)
        }
    }
    

    

  return (
    <div>
        <Navbar></Navbar>
        {/* <></> */}
      <div>
        
      <div>
            <label>item</label>
            <input name="item"  value={formdata.item} onChange={handlChange} type="text"></input>
        </div>
        <div>
            <label>price</label>
            <input name="price" value={formdata.price} onChange={handlChange} type="text"></input>
        </div>
        <button onClick={()=>{
            handleSubmitdata()
        }}>submit</button>
      </div>

      <div>
        <div >
            <input placeholder='Search here...' style={{height:"40px", width:"500px"}} onChange={handleserach} type="search" ></input>
        </div>
        <div>
            <table>
                <tr >
                    <th style={somess}>ITEM</th>
                    <th style={somess}>PRICE</th>
                    <th style={somess}>ACTION</th>
                </tr>
                {showdata.map((e)=>{
                    return(
                        <tr>
                            <td style={somess}>{e.item}</td>
                            <td style={somess}>{e.price}</td>
                            <td style={somess}><button onClick={()=>{
                                userupdate(e)
                            }}>Update</button><button onClick={()=>{
                                deleteuser(e.id)
                            }} style={{color:"red"}}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
            <div style={{display:"flex",flexDirection:"row"}}>
                <button onClick={()=>{
                    handleprev()
                }}>prev</button>
                {number.map((e)=>{
                    return(
                        <div>
                            
                            <button disabled={currentpage===e} onClick={()=>{
                                setcurrenptpage(e)
                            }}>{e}</button>
                            
                        </div>
                    )
                })}
                <button onClick={()=>{
                    handlENEXT()
                }}>next</button>
            </div>
        </div>
      </div>

      {show==true&& <div>
      <div>
        
        <div>
              <label>item</label>
              <input name="item1"  value={formdata1.item1} onChange={handlChange1} type="text"></input>
          </div>
          <div>
              <label>price</label>
              <input name="price1" value={formdata1.price1} onChange={handlChange1} type="text"></input>
          </div>
          <button onClick={()=>{
              handleSubmitdata1()
          }}>submit</button>
        </div>
      </div>}
    </div>
  )
}

export default Crud