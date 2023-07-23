import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'
import { kebabToPascalCase } from './utils/converter.ts'

enum CardFace {
  FRONT,
  BACK,
}

type Methods = {
  [key: string]: React.Dispatch<React.SetStateAction<string>>
}

function App() {
  const [cvv, setCvv] = useState('')
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [validThru, setValidThru] = useState('')
  const [toggle, setToggle] = useState(false)

  const methods: Methods = { setCvv, setNumber, setName, setValidThru }
  const cardFace: CardFace = toggle ? CardFace.FRONT : CardFace.BACK

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    methods[`set${kebabToPascalCase(event.target.name)}`](event.target.value)
  }

  const inputs = [
    {
      name: 'number',
      type: 'number',
      value: number,
    },
    {
      name: 'name',
      type: 'text',
      value: name,
    },
    {
      name: 'valid-thru',
      type: 'text',
      value: validThru,
    },
    {
      name: 'cvv',
      type: 'text',
      value: cvv,
      onFocus: () => setToggle(true),
      onBlur: () => setToggle(false),
    },
  ]

  return (
    <div>
      <CreditCard
        number={number}
        cvv={cvv}
        name={name}
        validThru={validThru}
        face={cardFace}
      />
      {inputs.map((input) => {
        return (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            value={input.value}
            onChange={handleInput}
            onFocus={input.onFocus}
            onBlur={input.onBlur}
          />
        )
      })}
    </div>
  )
}

export default App
