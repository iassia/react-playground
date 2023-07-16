import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'

enum CardFace {
  FRONT,
  BACK,
}

function App() {
  const [toggle, setToggle] = useState(true)
  const cardFace: CardFace = toggle ? CardFace.FRONT : CardFace.BACK

  return (
    <div>
      <CreditCard face={cardFace} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default App
