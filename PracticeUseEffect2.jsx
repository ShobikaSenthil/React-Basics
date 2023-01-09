import { useState,useEffect } from "react";

const UseEffect2 = () =>
{
    // const [name,setName] = useState("");
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    
    const position = (e)=>
    {
        console.log("Mouse event");
        // setX(e.clientX);
        // setY(e.clientY);
        const {clientX,clientY} = e;
        console.log({clientX,clientY});
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log("Mounting");
        
        window.addEventListener("mousemove",position);

        
    
        return() =>{
            console.log("Unmounting");
            window.removeEventListener("mousemove",position);
        }
        
    },[])

    return(
        <div>
            <p>X - {x} Y- {y}</p>
        </div>
    )

} 
export default UseEffect2;