import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'
import { kebabToPascalCase } from './utils/converter.ts'
import { CardFace } from './utils/enums.ts'

type Methods = {
  [key: string]: React.Dispatch<React.SetStateAction<string>>
}

const formatNumber = (number: string): string => {
  const formattedNumber = number.replace(/[^0-9]/g, '').match(/.{1,4}/g) || []
  if (formattedNumber.length > 4)
    formattedNumber.splice(-2, 2, formattedNumber.slice(-2).join(''))
  return formattedNumber.join(' ')
}

const formatValidThru = (validThru: string): string => {
  return (validThru.replace(/[^0-9]/g, '').match(/.{1,2}/g) || []).join('/')
}

const formatCvv = (cvv: string): string => {
  return cvv.replace(/[^0-9]/g, '')
}

const formatters = {
  cvv: formatCvv,
  number: formatNumber,
  'valid-thru': formatValidThru,
}

function App() {
  const [cvv, setCvv] = useState('')
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [validThru, setValidThru] = useState('')
  const [toggle, setToggle] = useState(false)

  const methods: Methods = { setCvv, setNumber, setName, setValidThru }
  const cardFace: CardFace = toggle ? CardFace.BACK : CardFace.FRONT

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const formattedValue =
      formatters[name as keyof typeof formatters]?.(value) ?? value
    methods[`set${kebabToPascalCase(name)}`](formattedValue)
  }

  const inputs = [
    {
      name: 'number',
      value: number,
      maxLength: 22,
    },
    {
      name: 'name',
      value: name,
    },
    {
      name: 'valid-thru',
      value: validThru,
      maxLength: 5,
    },
    {
      name: 'cvv',
      type: 'number',
      value: cvv,
      maxLength: 4,
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
            type='text'
            name={input.name}
            value={input.value}
            maxLength={input.maxLength}
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
