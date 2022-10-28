import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import { useCallback } from 'react';

function App() {

  const squareRoot = Math.sqrt()
  
  const hypotenuseCalc = useCallback((sideA, sideB) => {
    const squaredA = Math.pow(sideA, 2)
    const squaredB = Math.pow(sideB, 2)
    return squareRoot(squaredA + squaredB)
  }, [squareRoot])

  return (
    <div className="App">
      <img style={{ maxWidth: '500px' }} src="images/rigth-triangle.png" alt="Rigth triangle"/>
     <Calculator hypotenuseCalc={hypotenuseCalc}/>
    </div>
  );
}

export default App;
