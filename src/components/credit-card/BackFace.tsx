import styled from 'styled-components'

import CardFace from './CardFace.tsx'
import { BackFaceProps } from './types.ts'

const FlipCardBodyBack = styled(CardFace)`
  background-color: #2c3e50;
  transform: rotateY(180deg);
  box-shadow: 0 10px 20px rgba(44, 62, 80, 0.3);
`

const Stripe = styled.div`
  background-color: #333;
  width: 100%;
  height: 20%;
  margin-top: 10%;
`

const Signature = styled.div`
  width: 60%;
  height: 30px;
  line-height: 30px;
  margin: 10px 0 0 10px;
  padding: 0 5px;
  text-align: right;
  color: #333;
  font-weight: bold;
  background: repeating-linear-gradient(
    0,
    #fff 15px,
    #fff 20px,
    #fea 20px,
    #fea 21px,
    #fff 21px
  );
`

const BackFace = ({ cvv }: BackFaceProps) => {
  return (
    <FlipCardBodyBack>
      <Stripe />
      <Signature>{cvv}</Signature>
    </FlipCardBodyBack>
  )
}

export default BackFace
