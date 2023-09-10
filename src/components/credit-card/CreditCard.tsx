import styled, { css } from 'styled-components'

import BackFace from './BackFace.tsx'
import FrontFace from './FrontFace.tsx'
import { CardFace, CreditCardProps } from './types.ts'

const Card = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
`

const CardBody = styled.div<{ face: CardFace }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${(props) =>
    props.face === CardFace.BACK &&
    css`
      transform: rotateY(180deg);
    `};
`

const CreditCard = ({
  cvv,
  face,
  name,
  number,
  validThru,
  focus,
}: CreditCardProps) => {
  return (
    <Card role='img' aria-label='Credit Card'>
      <CardBody aria-hidden='true' face={face}>
        <FrontFace
          number={number}
          name={name}
          validThru={validThru}
          focus={focus}
        />
        <BackFace cvv={cvv} />
      </CardBody>
    </Card>
  )
}

export default CreditCard
