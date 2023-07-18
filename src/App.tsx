import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'

enum CardFace {
  FRONT,
  BACK,
}

function App() {
  const [cvv, setCvv] = useState('')
  const [number, setNumber] = useState('')
  const [toggle, setToggle] = useState(false)
  const cardFace: CardFace = toggle ? CardFace.FRONT : CardFace.BACK

  const handleCvv = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value)
  }

  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value)
  }

  return (
    <div>
      <CreditCard number={number} cvv={cvv} face={cardFace} />
      <input onChange={handleNumber} value={number} />
      <input
        onFocus={() => setToggle(true)}
        onBlur={() => setToggle(false)}
        onChange={handleCvv}
        value={cvv}
      />
    </div>
  )
}

export default App
