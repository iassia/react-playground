import styled from 'styled-components'
import CardFace from './CardFace.tsx'
import { FrontFaceProps } from './types.ts'

interface TextProps {
  hasData: boolean
  focused: boolean
}

const TextStyle = styled.div<TextProps>`
  opacity: ${(props) => (props.hasData ? 1 : 0.5)};
  font-weight: ${(props) => (props.focused ? 700 : 400)};
`

const CardFront = styled(CardFace)`
  background-color: rgb(24, 75, 108);
  font-weight: bold;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 50% 20% 30%;
  padding: 5%;
  box-sizing: border-box;
  text-align: left;
`

const LogoArea = styled.div`
  grid-column: 1 / span 2;
`

const Number = styled(TextStyle)`
  font-size: 1.2rem;
  grid-column: 1 / span 2;
`

const Name = styled(TextStyle)`
  font-size: 1.1rem;
  grid-column: 1;
  overflow: hidden;
  text-transform: uppercase;
  text-overflow: ellipsis;
`

const ValidThru = styled(TextStyle)`
  font-size: 1.1rem;
  grid-column: 2;
  text-align: center;

  & > span {
    font-size: 0.6rem;
  }
`

const FrontFace = ({ name, number, validThru, focus }: FrontFaceProps) => {
  return (
    <CardFront>
      <LogoArea />
      <Number hasData={Boolean(number)} focused={focus === 'number'}>
        {number || '•••• •••• •••• ••••'}
      </Number>
      <Name hasData={Boolean(name)} focused={focus === 'name'}>
        {name || 'your name here'}
      </Name>
      <ValidThru hasData={Boolean(validThru)} focused={focus === 'valid-thru'}>
        <span>valid thru</span>
        <br />
        {validThru || '••/••'}
      </ValidThru>
    </CardFront>
  )
}

export default FrontFace
