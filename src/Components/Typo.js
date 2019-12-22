import styled from 'styled-components';

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
`;

const Price = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #0076c6;
`;

export { Title, Subtitle, Paragraph, Price };