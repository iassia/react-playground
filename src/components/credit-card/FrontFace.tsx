import styled from 'styled-components'
import CardFace from './CardFace.tsx'

const CardFront = styled(CardFace)`
  background-color: rgb(24, 75, 108);
  font-weight: bold;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 30% 30% 40%;
  padding: 10%;
  box-sizing: border-box;
  text-align: left;
`

const LogoArea = styled.div`
  grid-column: 1 / span 2;
`

const Number = styled.div`
  font-size: 1.4rem;
  grid-column: 1 / span 2;
`

const Name = styled.div`
  font-size: 1.1rem;
  grid-column: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ValidThru = styled.div`
  font-size: 1.1rem;
  grid-column: 2;
  text-align: center;

  & > span {
    font-size: 0.6rem;
  }
`

interface CreditCardProps {
  name: string
  number: string
  validThru: string
}

const FrontFace = ({ name, number, validThru }: CreditCardProps) => {
  return (
    <CardFront>
      <LogoArea />
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
