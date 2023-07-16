import styled, { css } from 'styled-components'

enum CardFace {
  FRONT,
  BACK,
}

const FlipCardInner = styled.div<{ face: CardFace }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${(props) =>
    props.face === CardFace.FRONT &&
    css`
      transform: rotateY(180deg);
    `};
`

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
`

const FlipCardBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
`

const FlipCardBodyFront = styled(FlipCardBody)`
  background-color: red;
  color: black;
`

const FlipCardBodyBack = styled(FlipCardBody)`
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`

type CreditCardProps = {
  face: CardFace
}

const CreditCard = ({ face }: CreditCardProps) => {
  return (
    <FlipCard>
      <FlipCardInner face={face}>
        <FlipCardBodyFront></FlipCardBodyFront>
        <FlipCardBodyBack></FlipCardBodyBack>
      </FlipCardInner>
    </FlipCard>
  )
}

export default CreditCard
