import React from 'react';
import './../styles/App.css';
import Child from './child';



const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child />
    </div>
  );
};

export default App;