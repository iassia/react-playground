import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'

enum CardFace {
  FRONT,
  BACK,
}

interface Methods {
  [key: string]: React.Dispatch<React.SetStateAction<string>>
}

function App() {
  const [cvv, setCvv] = useState('')
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [validThru, setValidThru] = useState('')
  const methods: Methods = { setCvv, setNumber, setName, setValidThru }
  const [toggle, setToggle] = useState(false)
  const cardFace: CardFace = toggle ? CardFace.FRONT : CardFace.BACK

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    methods[`set${inputName}`](event.target.value)
  }

  return (
    <div>
      <CreditCard
        number={number}
        cvv={cvv}
        name={name}
        validThru={validThru}
        face={cardFace}
      />
      <input
        type='number'
        name='number'
        onChange={handleInput}
        value={number}
      />
      <input type='text' name='name' onChange={handleInput} value={name} />
      <input
        type='text'
        name='valid-thru'
        onChange={handleInput}
        value={validThru}
      />
      <input
        type='number'
        name='cvv'
        onFocus={() => setToggle(true)}
        onBlur={() => setToggle(false)}
        onChange={handleInput}
        value={cvv}
      />
    </div>
  )
}

export default App
