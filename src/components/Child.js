import React, { useState } from 'react';

const Child = ({ datas }) => {
  console.log('Child component props:', datas);
  const [isButtonVisible, setButtonVisible] = useState(true);
const handleButtonClick =()=>{
  setButtonVisible(false);
}

  {function displayNon(){
    let btn= document.querySelector('button');
    btn.style.display="none";
  }}
  return (
    <div style={{display:"flex",gap:"10px"}}>
      <li>{datas}</li>
      {
        isButtonVisible && ( 
      <button onClick={handleButtonClick}>complete</button>

        )
      }

    </div>
  );
};

export default Child;