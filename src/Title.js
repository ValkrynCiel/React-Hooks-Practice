import React, {useState} from 'react';

export default function Title(props) {
  const [fontSize, updateFontSize] = useState("20px");

  function handleClick()  {
    updateFontSize(fontSize => `${parseInt(fontSize) + 5}px`);
  }

  return (
    <h1 style={{fontSize}} onClick={handleClick}>
      {props.text}
    </h1>
  );
}