import React, {useState} from "react";
import './../styles/App.css';
import Child from "./child.js";

const App = () => {
  const [todos, setTodos] =useState([{id:1, t: "learn React",complated:false }, {id:2, t: "Build a React app" , complated:false }, {id:3, t: "Deploy the React app", complated:false }]);
  function handleComplete(id){
    
        setTodos(
          todos.map((elem)=>{
      if(elem.id==id){
        return {...elem, completed:true};
      }else{
        return{...elem}
      }
    })
  )
  }
  return (
    <>
   
        <Child datas={todos} handleComplete={handleComplete} />
     
    </>
  )
};

export default App;