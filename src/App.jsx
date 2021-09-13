import React from "react";
import SlotM from "./SlotM";



const App = ()=>{
return <>
          <h1 className='heading_style'>  🎰 Welcome to {" "} <span style={{fontWeight:'bold'}}>Slot machine </span> 🎰 </h1>
          <div className='Slotmachine'>
           <SlotM x=' 😄 ' y=' 😄 ' z=' 😄 ' />
           <SlotM x=' 😄 ' y=' 😸 ' z=' 😄 '/>
           <SlotM x=' 😄 ' y=' 😸 ' z=' 😄 '/>
           <SlotM x=' 😄 ' y=' 😄 ' z=' 😄 ' />
          </div>
      </>
      }
 

export default App;
