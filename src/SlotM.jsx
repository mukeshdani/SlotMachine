import React from 'react';

const SlotM =(props)=>{
    
       let {x,y,z}=props;

    if (x===y&&y===z){
        return (<>
          <div className='Slot_inner'>
          <h1> {x} {y} {z}</h1>
          <h1>This is Matching .</h1>
          <hr />

          </div>
        </>)
    }
    else {
        return( 
           <>
          <div className='Slot_inner'>
          <h1> {x} {y} {z}</h1>
          <h1>This is NOt Matching .</h1>
          <hr />
          </div>
        </>
        )
       
    }
}

export default SlotM;