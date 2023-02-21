import { color } from "@mui/system";
import { useState } from "react";



export function Counters() 
{
   const [count,setCount]=useState(0);
    
   const Increment_style=
   {
    color:count>0?"green":"red" 
    
   }

  
   
   const reset=0
  return (
    <div className='counters-style'>
          <h2 className="text-style">Counter</h2>
          <span className="text-style" style={Increment_style}>{count}</span>
          <div className="btn-container">
            <button onClick={()=> setCount(count-1)}>decrement</button>
            <button style={{color:"black"}} onClick={()=>setCount(reset)}>reset</button>
            <button  onClick={()=>
              
            setCount(count+1)}>increment</button>
          </div>
    </div>
  );
}
