import { useEffect, useState } from "react";




function Counter(){

    const[val,setVal]=useState(0)

    useEffect(function(){

       console.log("useEffect Called");

       //cleanup function for unmounting

       return ()=>{
        console.log("return statement executed");
       };
    },[ val])
    return (
        <div className="flex justify-center items-center gap-7 h-screen bg-black text-amber-50">
            <button onClick={()=> setVal(preVal => preVal+1)} className="bg-gray-600 p-4 rounded-md ">Increment</button>
            <h1>Counter: {val}</h1>
            <button onClick={()=> setVal(preVal => preVal-1)} className="bg-gray-600 p-4 rounded-md ">Decrement</button>
        </div>
    )
}
export default Counter;