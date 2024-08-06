import React from "react";
import './../styles/App.css';
import Child from "./child.js";

const App = () => {
  let todos = [{ t: "learn React" }, { t: "Build a React app" }, { t: "Deploy the React app" }]
  return (
    <>
      {todos.map((elem) => (
        <Child datas={elem.t} />
      ))}
    </>
  )
};

export default App;