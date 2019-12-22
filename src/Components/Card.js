import React from 'react';
import { Link } from 'react-router-dom';
import { Subtitle, Paragraph, Price } from './Typo';
import styled from 'styled-components';


const CardStyled = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 6px 1px rgba(64, 64, 64, 0.1);
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease-out 0s;

  &:hover {
    transform: scale(1.01);
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

const BodyStyled = styled.div`
  padding: 16px 16px 0;
  flex-grow: 1;
`;

const PriceStyled = styled(Price)`
  padding: 8px 16px 16px;
  flex-shrink: 0;
`;

const Card = ({ id, address, title, previewImage, price }) => (
  <CardStyled to={`/${id}/`}>
    <ImageStyled src={ previewImage } />
    <BodyStyled>
      <Subtitle>{ title }</Subtitle>
      <Paragraph>{ address }</Paragraph>
    </BodyStyled>
    <PriceStyled>{ price }</PriceStyled>
  </CardStyled>
);

export default Card;