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
    <div>
      <h1>Minimart - Find what you need!</h1>
      <div>
        <input type="text" placeholder="what do you want???......" onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={filterHandler}>Search</button>
      </div>
      <AllCards data={filterData}/>
      
    </div>
  )
}

export default App
