import React, { useRef, useState } from 'react';
import './App.css';
import "./fizzbuzz";
function App() {
  const [firstNum, setFirstnum] = useState(3);
  const [secondNum, setsecondnum] = useState(5);
  console.log(firstNum);
  return (
    
    <div className="App">
     
      <h1 className='animate__animated animate__zoomIn title'>Fizz Buzz is a very simple programming task, asked in software developer job interviews...</h1>
      <div className="headers">
        <h1 className="Fizz animate__animated animate__backInDown animate__delay-5s">Fizz</h1>
        <h1 className="Buzz animate__animated animate__backInUp animate__delay-5s ">Buzz</h1>
        <h2 className="enter  animate__animated animate__fadeInLeft animate__delay-5s">Please enter two numbers:</h2>
      </div>

      <div className="textinput">
        <input className="animate__animated animate__bounceIn animate__delay-5s" type="number" id="fnum" value={firstNum} onChange={e=>setFirstnum(e.target.value)}></input>
        <input className="animate__animated animate__bounceIn animate__delay-5s" type="number" id="secnum" value={secondNum} onChange={e=>setsecondnum(e.target.value)} ></input>
        {/* <button type="button" id="submit">Submit</button> */}
      </div>

      <div className="numbers">
      <table>
  <tr className='animate__animated animate__rollIn animate__delay-2s'>
   
    {Array.from(Array(100)).map((num, i) => <th>{i + 1}</th>)}
  

  </tr>
  </table>
      </div>
      
    </div>
    
    
  );
}

export default App;
