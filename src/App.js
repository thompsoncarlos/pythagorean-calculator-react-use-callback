import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';

function App() {
  
  const hypotenuseCalc = (sideA, sideB) => {
    const squaredA = Math.pow(sideA, 2)
    const squaredB = Math.pow(sideB, 2)
    return Math.sqrt(squaredA + squaredB)
  }
  return (
    <div className="App">
      <img style={{ maxWidth: '500px' }} src="images/rigth-triangle.png" alt="Rigth triangle"/>
     <Calculator hypotenuseCalc={hypotenuseCalc}/>
    </div>
  );
}

export default App;
