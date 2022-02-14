import React from "react"
import Info from "./components/Info"
import Para from "./components/Para"
import Footer from "./components/Footer"


function App(){
    return (
       <div className=" flex  justify-center items-center h-screen w-full ">
        <div className="flex flex-col gap-12 text-white w-96 bg-slate-700">   
           <Info />
           <Para />
           <Footer />
        </div>
       </div>
    )
}

export default App