import React, {useState} from 'react';

const Child = () => {
  const [mark, setmark]=useState(false);
  
  return (
    <div>
       <ul>
        <h1>Child Component</h1>
        {["Learn React", "Build a React app", "Deploy a React app"].map((list,idx)=>(
          <div key={idx}>
          <p>{list}</p>
          {!mark && <button onClick={()=>setmark(true)}>Completed</button>}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Child;