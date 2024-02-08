import { useState } from "react"

function App() {
  const [color,setColor] = useState("red")

  return (
    <>
       <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <button id="red" onClick={() => setColor("red")} className='flex flex-wrap justify-center gap-3 shadow-lg text-white px-3 py-2 rounded-3xl' style={{backgroundColor:"red"}}>Red</button>
          <button id="black" onClick={() => setColor("black")} className='flex flex-wrap justify-center gap-3 shadow-lg text-white px-3 py-2 ml-3 rounded-3xl' style={{backgroundColor: "black"}}>Black</button>
          <button id="green" onClick={() => setColor("green")} className='rounded-3xl px-3 py-2 ml-3 text-white shadow-lg justify-center' style={{backgroundColor:"green"}}>Green</button>
          <button id="pink" onClick={() => {setColor("pink")}} className='flex flex-wrap justify-center ml-3 gap-3 shadow-lg text-white px-3 py-3 rounded-3xl' style={{backgroundColor:"pink"}}>Pink</button>
          <button id="teal" onClick={() => setColor("teal")} className='rounded-3xl px-3 py-2 ml-3 text-white shadow-lg justify-center' style={{backgroundColor:"teal"}}>Teal</button>
          <button id="yellow" onClick={()=> setColor("yellow")} className='rounded-3xl px-3 py-2 ml-3 text-white shadow-lg justify-center' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button id="orange" onClick={() => setColor("orange")} className='rounded-3xl px-3 py-2 ml-3 text-white shadow-lg justify-center' style={{backgroundColor:"orange"}}>Orange</button>
          <button id="grey" onClick={() => setColor("grey")} className='rounded-3xl px-3 py-2 ml-3 text-white shadow-lg justify-center' style={{backgroundColor:"grey"}}>Grey</button>
        </div>
       </div>
      
    </>
  )
}

export default App
