
import { useState } from 'react';
import './App.css';
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [calVal,setVal]=useState("");
  const Click1 = (buttonText) => {
    console.log(buttonText);
    if(buttonText==="C"){
      setVal("");
    }else if(buttonText === "="){
       const result=eval(calVal);
       setVal(result);
    }else if(buttonText==="00"){
        setVal("0");
    }else{
      let newValue=calVal + buttonText ;
      setVal(newValue);
    }
  };
  return (
    <>
    <center>
    <div className="container">
      <Display displayValue={calVal}></Display>
      <Button onButtonClick={Click1}></Button>
    </div>
    </center>
    </>
  );
}

export default App;

