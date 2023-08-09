import styled from 'styled-components'
import CardFace from './CardFace.tsx'

const FlipCardBodyBack = styled(CardFace)`
  background-color: #1b567d;
  transform: rotateY(180deg);
`

const Stripe = styled.div`
  background-color: #333;
  width: 100%;
  height: 20%;
  margin-top: 10%;
`

const Signature = styled.div`
  width: 60%;
  margin: 10px 0 0 10px;
  padding: 5px;
  text-align: right;
  color: #333;
  font-weight: bold;
  background: repeating-linear-gradient(
    0.1deg,
    #fff 20%,
    #fff 40%,
    #fea 40%,
    #fea 44%,
    #fff 44%
  );
`

interface CreditCardProps {
  cvv: string
}

const CreditCard = ({ cvv }: CreditCardProps) => {
  return (
    <FlipCardBodyBack>
      <Stripe />
      <Signature>{cvv}</Signature>
    </FlipCardBodyBack>
  )
}

export default CreditCard
