import React, { useState } from 'react';

const Child = ({ datas, handleComplete}) => {
  console.log('Child component props:', datas,handleComplete);
  

 
  return (
    
      datas.map((elem)=>(
          <div style={{display:"flex",gap:"10px"}}>
          <li>{elem.t}</li>
      
       { !elem.completed && 
      <button onClick={()=>handleComplete(elem.id)}>complete</button>}
      </div>
    )
  
      
        ))
      }


export default Child;