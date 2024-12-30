
import { useState } from "react";
export const HookUseState1 = () => {
    let[name,setName]=useState("");
  return (
    <>
    <div>
        <label htmlFor=""></label>
        <input type="text"  value={name}/>
    </div>
    <div>
        <label htmlFor=""></label>
        <input type="text"  value={name} onChange={(e)=>{
            setName(e.target.value);
        }}/>
    </div>
    </>
  )
}
