import { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-slate-700");

  

  return (
    < >
    
    <div className={` w-screen h-screen ${color}`}>
      <h1 className=' text-2xl bg-slate-500 p-1 rounded-2xl fixed inset-x-0 top-10'>This is the Assignment of Changing Colors</h1>
    
    <div className='h-20 items-center bg-black  fixed inset-x-0 flex left-1/2 transform -translate-x-1/2 justify-center  w-6/12 bottom-10 rounded-3xl'>
       <button onClick={()=> setColor("bg-pink-600")} className='rounded-3xl m-1 h-10 bg-pink-600 text-black font-bold shadow-sm shadow-black '> pink </button>
       <button onClick={()=> setColor("bg-green-400")} className='rounded-3xl m-1 h-10 bg-green-400 text-black font-bold shadow-sm shadow-black '> Green </button>
       <button onClick={()=> setColor("bg-yellow-400")} className='rounded-3xl m-1 h-10 bg-yellow-400 text-black font-bold shadow-sm shadow-black '> yellow </button>
       <button onClick={()=> setColor("bg-cyan-500")} className='rounded-3xl m-1 h-10 bg-cyan-500 text-black font-bold shadow-sm shadow-black '> cyan </button>
       <button onClick={()=> setColor("bg-slate-300")} className='rounded-3xl m-1 h-10 bg-slate-300 text-black font-bold shadow-sm shadow-black '> white </button>
       <button onClick={()=> setColor("bg-orange-400")} className='rounded-3xl m-1 h-10 bg-orange-400 text-black font-bold shadow-sm shadow-black '> orange </button>
       </div>
    </div>
    
    </>
  )
}

export default App
