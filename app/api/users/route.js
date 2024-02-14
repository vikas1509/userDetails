import {users} from  "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";


 export function GET(){
    const data = users;
    return NextResponse.json({data},{status:200});

 }



 //4. Create Users

 export async function POST(req, res){
    let {id, name , email, password} = await req.json();

    if( !id || !name || !email || !password){
        return NextResponse.json(
            {result:"required field not found"},
            {status:400}
        );

    }
    else{
        // add new user to the in- memory array
        users.push({id, name , email, password});

const updatedUsersArray= users;

        //Extract just the users array to a JSON string 
        const  updatedData =JSON.stringify(updatedUsersArray, null, 2)


        //write
        fs.writeFileSync(
            "./app/util/db.js",
            `export const users = ${updatedData};`,
"utf-8"

        );
        return NextResponse.json({success:"User Successfully Created"})
    }
 }

 //5 update
 export async function PUT(req,res){
    let {id, name , email,password} = await req.json();

    // find the user in the users array by id 

    const userIndex = users.findIndex((user)=>user.id == id);
    if(userIndex ==-1){
        return NextResponse.json({result:"User not found"},{status:404})
    }
    if(name){
        users[userIndex].name = name
    }
    if(email){
        users[userIndex].email = email
    }  if(password){
        users[userIndex].password= password
    }
    const updatedUsersArray= users;

    //Extract just the users array to a JSON string 
    const  updatedData =JSON.stringify(updatedUsersArray, null, 2)


    //write
    fs.writeFileSync(
        "./app/util/db.js",
        `export const users = ${updatedData};`,
"utf-8"

    );
    return NextResponse.json({success:"User Successfully Updated"})
 }



