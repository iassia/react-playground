import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
function Card() {
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          </div>
          <div className="flip-card-back">
            <Title>John Doe</Title>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Card