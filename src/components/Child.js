import React, {useState} from 'react';


const Child = () => {
  return (
    <div>
      <ul>
        <h1>Child Component</h1>
        {["Learn React", "Build a React app", "Deploy a React app"].map(
          (list, idx) => (
            <ListItem key={idx} text={list} />
          )
        )}
      </ul>
    </div>
  );
};

const ListItem = ({ text }) => {
  const [mark, setMark] = useState(false);
  return (
    <li>
      {text}
      {!mark ? <button onClick={() => setMark(true)}>Complete</button> : ""}
    </li>
  );
};

export default Child;