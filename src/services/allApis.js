import react from "react"
import axios from "axios"

export const userCreate=async(user)=>{
    const data=await axios.post(`http://localhost:5678/users`,user);
    return data
}

export const getuserData=async()=>{
    const data=await axios.get(`http://localhost:5678/users`);
    return data
}

export const deleteusers=async(id)=>{
    const data=await axios.delete(`http://localhost:5678/users/${id}`);
    return data
}

export const updateusersdata=async({id,user})=>{
    const data=await axios.patch(`http://localhost:5678/users/${id}`,user)
    return data

}