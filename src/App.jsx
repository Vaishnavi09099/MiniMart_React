import AllCards from "./components/AllCards"



function App() {
  

  return (
    <div>
      <h1>GlamFinder - Find Glam that suits you!</h1>
      <div>
        <input type="text" placeholder="Find your Glam......" />
        <button>Search</button>
      </div>
      <AllCards />
      
    </div>
  )
}

export default App
