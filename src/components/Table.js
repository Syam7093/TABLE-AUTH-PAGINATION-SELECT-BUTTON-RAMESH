import React, { useState } from 'react'
import Navbar from './Navbar'


const Table = () => {
    const [check,setcheck]=useState('')
    console.log(check,"ssss---")
    const [data,setdata]=useState([
        {id:"sw23",name:"syam",status:false,lname:"sai"},
        {id:"aw23",name:"sai",status:false,lname:"rao"},
        {id:"op89",name:"ganesh",status:false,lname:"mailaplli"},
        {id:"yu67",name:"ramesh",status:false,lname:"surada"},
        {id:"er34",name:"somesh",status:false,lname:"baburao"},
    ])
    const handlecheck=(e)=>{
        setcheck(e.target.checked)
    }

    const [tabs,settabs]=useState([
        "TABLE","SELECTEDDATA"
    ])

    const [select,setselect]=useState("TABLE")
    console.log(select,"select.....")
    const handleselectdata=(m)=>{
        setselect(m)

    }
    
    let filterdata=select==="TABLE"?data:data.filter((e)=>{
        return e.status===true
    })

    const handlclickstatus=(ss)=>{
        let syam=data.map((k)=>{
            return k === ss?{...k,status:!k.status}:k
        })
        setdata(syam)

    }
  return (
    <div>
        <Navbar></Navbar>
        <div>
            {tabs.map((e)=>{
                return(
                    <button onClick={()=>{
                        handleselectdata(e)
                    }}>{e}</button>
                )
            })}
        </div>

        <div>
        <table>
            <tr>
            <th>SNO</th>
                <th>NAME</th>
                <th>STATUS</th>
                <th>ACTION</th>
            </tr>
            {filterdata?.map((e)=>{
               return(
                <tr>
                    <td ><input
                    checked={e.status}
                     onChange={()=>{
                        handlclickstatus(e)
                    }} type="checkbox"></input></td>
                    <td>{e.name}</td>
                    <td>{e.lname}</td>
                    <td onClick={()=>{
                        // handlclickstatus(e)
                    }}>
                        {e.status==false?<p>on</p>:<p>off</p>}
                    </td>
                </tr>
               )
            })}
        </table>
        </div>
        </div>
  )
}

export default Table