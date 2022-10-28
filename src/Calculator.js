import { useState, useEffect } from "react"

function Calculator ({ hypotenuseCalc  }) {

  const [sideA, setSideA] = useState(0)
  const [sideB, setSideB] = useState(0)
  const [hypotenuse, setHypotenuse] = useState(0)

  useEffect(() => {
    if (sideA > 0 && sideB > 0) {
      setHypotenuse(hypotenuseCalc(sideA, sideB))
    }
  }, [sideA, sideB, hypotenuseCalc])

  return (
    <>
      <div>
        <label>Side B</label>
        <input 
          value={sideA}
          onChange={evento => setSideA(evento.target.value)}
        />
      </div>
      <div>
        <label>Side C</label>
        <input 
          value={sideB}
          onChange={evento => setSideB(evento.target.value)}
        />
      </div>

      <p>The hypotenuse value is: <strong>{hypotenuse}</strong></p>
    </>
  )
}

export default Calculator