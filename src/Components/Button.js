import styled from 'styled-components';


const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  transition: 0.2s ease-out 0s;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  background-color: #00aaff;
  color: #fff;

  &:hover, &:focus {
    background-color: #0076c6;
    transition: 0.2s ease-out 0s;
  }
`;

export default Button;