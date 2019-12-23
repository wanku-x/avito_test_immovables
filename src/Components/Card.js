import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Subtitle, Paragraph, Price } from './Typo';

const CardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 0 6px 1px rgba(64, 64, 64, 0.1);
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease-out 0s;

  &:hover {
    transform: scale(1.01);
  }
`;

const ImageStyled = styled.img`
  flex-shrink: 0;
  width: 100%;
`;

const BodyStyled = styled.div`
  flex-grow: 1;
  padding: 16px 16px 0;
`;

const PriceStyled = styled(Price)`
  flex-shrink: 0;
  padding: 8px 16px 16px;
`;

const Card = ({
  id,
  address,
  title,
  previewImage,
  price,
}) => (
  <CardStyled to={`/${id}/`}>
    <ImageStyled src={previewImage} />
    <BodyStyled>
      <Subtitle as="h3">{ title }</Subtitle>
      <Paragraph>{ address }</Paragraph>
    </BodyStyled>
    <PriceStyled>{ price }</PriceStyled>
  </CardStyled>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
