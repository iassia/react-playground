import styled from 'styled-components'

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
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
  background-color: #bbb;
  color: black;
`

const FlipCardBodyBack = styled(FlipCardBody)`
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`

function Card() {
  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardBodyFront></FlipCardBodyFront>
        <FlipCardBodyBack></FlipCardBodyBack>
      </FlipCardInner>
    </FlipCard>
  )
}

export default Card
