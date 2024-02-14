"use client"

import {List, ListItem, Card} from "@material-tailwind/react";
import { useEffect, useState } from "react";


const Allusers = () => {
    const [users, setUsers]  = useState('');
    useEffect(()=>{
        const fetchUsers = async ()=>{
            const response = await fetch('/api/users')
            const userInfo = await response.json();
            setUsers(userInfo.data);

        };
        fetchUsers();

    },[]);

  return (
    <div>
        {users  && users.map((user)=>(
            <Card key={user.id} className="mb-4">
                <List>
                    <ListItem>
                        {user.name}
                    </ListItem>
                </List>
            </Card>
        ))}
    </div>
  )
}

export default Allusers