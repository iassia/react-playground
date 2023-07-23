import styled from 'styled-components'
import CardFace from './CardFace.tsx'

const FlipCardBodyBack = styled(CardFace)`
  background-color: #1b567d;
  transform: rotateY(180deg);
`

interface CreditCardProps {
  cvv: string
}

const CreditCard = ({ cvv }: CreditCardProps) => {
  return <FlipCardBodyBack>{cvv}</FlipCardBodyBack>
}

export default CreditCard
