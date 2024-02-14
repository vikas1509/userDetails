'use client'
import { useState } from "react";
import { Accordion,AccordionHeader,AccordionBody } from "@material-tailwind/react";
import AllUsers from "./Allusers"
import SpecificUser from "./SpecificUser";
import CreateUser from "./CreateUser";
import Update from "./Update";
import DeleteUser from "./DeleteUser";
const AccorionUI = () => {
    const [open, setOpen]=useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 :value);


  return (
    <section className="w-[40rem]">
<Accordion open={open === 1}> 
    <AccordionHeader onClick={()=>handleOpen(1)}>
    all users

    </AccordionHeader>

    <AccordionBody>
        <AllUsers/>
    </AccordionBody>

   
</Accordion>

<Accordion open={open ===2}>
<AccordionHeader onClick={()=>handleOpen(2)}>
     Search for Specific User

    </AccordionHeader>

    <AccordionBody>
        <SpecificUser/>
    </AccordionBody>
</Accordion>


<Accordion open={open ===3}>
<AccordionHeader onClick={()=>handleOpen(3)}>
     Create New User

    </AccordionHeader>

    <AccordionBody>
<CreateUser/>
    </AccordionBody>
</Accordion>



<Accordion open={open ===4}>
<AccordionHeader onClick={()=>handleOpen(4)}>
     Update User

    </AccordionHeader>

    <AccordionBody>
<Update/>
    </AccordionBody>
</Accordion>

<Accordion open={open ===5}>
<AccordionHeader onClick={()=>handleOpen(5)}>
     Delete User

    </AccordionHeader>

    <AccordionBody>
<DeleteUser/>
    </AccordionBody>
</Accordion>
    </section>
  )
}

export default AccorionUI;