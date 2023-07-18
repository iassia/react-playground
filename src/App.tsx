import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'

enum CardFace {
  FRONT,
  BACK,
}

function App() {
  const [cvv, setCvv] = useState('')
  const [toggle, setToggle] = useState(false)
  const cardFace: CardFace = toggle ? CardFace.FRONT : CardFace.BACK

  const handleCvv = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value)
  }

  return (
    <div>
      <CreditCard cvv={cvv} face={cardFace} />
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
