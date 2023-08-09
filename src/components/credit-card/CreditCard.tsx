import styled, { css } from 'styled-components'
import FrontFace from './FrontFace.tsx'
import BackFace from './BackFace.tsx'
import { CardFace } from '../../utils/enums.ts'

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

interface CreditCardProps {
  cvv: string
  face: CardFace
  name: string
  number: string
  validThru: string
}

const CreditCard = ({
  cvv,
  face,
  name,
  number,
  validThru,
}: CreditCardProps) => {
  return (
    <Card role='img' aria-label='Credit Card'>
      <CardBody aria-hidden='true' face={face}>
        <FrontFace number={number} name={name} validThru={validThru} />
        <BackFace cvv={cvv} />
      </CardBody>
    </Card>
  )
}

export default CreditCard
