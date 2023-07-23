import styled from 'styled-components'
import CardFace from './CardFace.tsx'

const FlipCardBodyFront = styled(CardFace)`
  background-color: #184b6c;
`

interface CreditCardProps {
  name: string
  number: string
  validThru: string
}

const FrontFace = ({ name, number, validThru }: CreditCardProps) => {
  return (
    <FlipCardBodyFront>
      {number}
      <br />
      {name}
      <br />
      {validThru}
    </FlipCardBodyFront>
  )
}

export default FrontFace
