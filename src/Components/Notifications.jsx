import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import Config from "../Config/Config"
const Notifications = () => {

    const [length,setLength] = useState();
    console.log(length)
    const [users,setUsers] = useState([]);
    console.log("users data",users)

    useEffect(()=>{
        const fetchUsers = async()=>{
            const url = Config.baseUrl + Config.apiEndPoints.users;
            try{
                const response = await axios.get(url);
                if(response.status === 200){
                    setUsers(response.data);
                    const arraylength = response.data.length;
                    console.log(arraylength)
                    setLength(arraylength);
                }
            }catch(err){
                console.error(err)
            }
        }
        fetchUsers();
    },[])
    
  return (
    <div>
    <Badge badgeContent={length} color="primary">
      <MailIcon color="action" />
    </Badge>

    </div>
  )
}

export default Notifications
