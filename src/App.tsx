import CreditCard from './components/credit-card/CreditCard.tsx'
import { CardFace, FrontFields } from './components/credit-card/types.ts'
import { useState } from 'react'
import { kebabToPascalCase } from './utils/converter.ts'

type Methods = {
  [key: string]: React.Dispatch<React.SetStateAction<string>>
}

type Input = {
  name: string
  value?: string | number
  maxLength?: number
  placeholder?: string
  onFocus?: () => void
  onBlur?: () => void
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
  const [focus, setFocus] = useState('' as FrontFields)
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

  const setFocusedInput = (input: Input) => {
    setFocus(input.name as FrontFields)
    input.onFocus?.()
  }

  const inputs: Input[] = [
    {
      name: 'number',
      value: number,
      maxLength: 22,
      placeholder: 'Number',
    },
    {
      name: 'name',
      value: name,
      placeholder: 'Name',
    },
    {
      name: 'valid-thru',
      value: validThru,
      maxLength: 5,
      placeholder: 'Valid Thru',
    },
    {
      name: 'cvv',
      value: cvv,
      maxLength: 4,
      placeholder: 'CVV',
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
        focus={focus}
      />
      {inputs.map((input) => {
        return (
          <input
            key={input.name}
            type='text'
            name={input.name}
            placeholder={input.placeholder}
            value={input.value}
            maxLength={input.maxLength}
            onChange={handleInput}
            onFocus={() => setFocusedInput(input)}
            onBlur={input.onBlur}
          />
        )
      })}
    </div>
  )
}

export default App
