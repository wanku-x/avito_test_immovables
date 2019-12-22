import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #00aaff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  transition: 0.2s ease-out 0s;

  &:hover, &:focus {
    background-color: #0076c6;
  }
`;

export default Button;
