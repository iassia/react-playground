import styled from 'styled-components'
import CardFace from './CardFace.tsx'

const CardFront = styled(CardFace)`
  background-color: rgb(24, 75, 108);
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const Number = styled.span`
  width: 100%;
  display: inline-block;
  font-size: 1.4rem;
  border: #f00 1px solid;
`

const Name = styled.span`
  font-size: 1.1rem;
  display: inline-block;
  flex: 1 60%;
  border: #f00 1px solid;
`

const ValidThru = styled.span`
  font-size: 1.1rem;
  display: inline-block;
  flex: 1 30%;
  border: #f00 1px solid;
`

interface CreditCardProps {
  name: string
  number: string
  validThru: string
}

const FrontFace = ({ name, number, validThru }: CreditCardProps) => {
  return (
    <CardFront>
      <Number>{number}</Number>
      <Name>{name}</Name>
      <ValidThru>
        <span>valid thru</span>
        <br />
        {validThru}
      </ValidThru>
    </CardFront>
  )
}

export default FrontFace
