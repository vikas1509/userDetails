'use client'

import {Button, Input} from "@material-tailwind/react"
import { useState } from "react"


const CreateUser = () => {
    const [id, setId] = useState("");
    const[name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!id || !name || !email || !password){
            alert("please fill all the input fields");
            return;

        }

        try{
            const response  = await fetch('/api/users',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id, name, email ,password})

            })
            if(response.ok){
                alert("User Succesfullly Created.")
            }
            else{
                alert("Something went wrong:(")
                return ;
            }
        }
        catch(error){
            alert(error)
            return
        }
    }
  return (
    <div>
         <div>
            <form onSubmit={handleSubmit}>
                <input label="ID" type="text" 
                placeholder="ID"
                value={id}
                onChange={(e)=>setId(e.target.value)}/>

                 <input label="Name" type="text" 
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <input label="Email" type="text" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>

                 <input label="password" type="password" 
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>

                <Button className="mt-2" type="submit">
                Submit    
                </Button>
            </form>
         </div>
    </div>
  )
}

export default CreateUser