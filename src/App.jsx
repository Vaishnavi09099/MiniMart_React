import { useState } from "react";
import AllCards from "./components/AllCards"
import {data} from "./utils/data"



function App() {
  const [val,setVal] = useState('')
  const [filterData,setFilterData] = useState(data)
  function filterHandler(){
    let res = data.filter((item)=> item.title.toLowerCase().includes(val.toLowerCase()))
    setFilterData(res)
  }
  

  return (
    <div className="bg-gray-300 text-center min-h-screen max-w-[100vw] flex flex-col items-center">
      <h1 class="text-3xl pt-4  ">Minimart - Find what you need!</h1>
      <div>
        <div className="mt-5">
        <input className="p-3 rounded-tl-xl rounded-bl-xl md:pr-[50px] bg-white focus:outline-none" type="text" placeholder="what do you want???......" onChange={(e)=>setVal(e.target.value)}/>
        <button className="p-3 px-6 rounded-tr-xl rounded-br-xl  md:pl-[40px] bg-green-400" onClick={filterHandler}>Search</button>
        </div>
      </div>
      
      {filterData.length <= 0 ? <h1 className="text-4xl mt-10">No item found</h1> : <AllCards data={filterData} />}
      
    </div>
  )
}

export default App
