import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SliderStyled = styled.div`
  position: relative;
  height: ${({ height }) => height}px;
  overflow: hidden;
  box-shadow: 0 0 6px 1px rgba(64, 64, 64, 0.1);
`;

SliderStyled.propTypes = {
  height: PropTypes.number,
};

SliderStyled.defaultProps = {
  height: 300,
};

const WrapStyled = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  transition: 0.2s ease-out 0s;
  left: -${({ shift }) => shift * 100}%;
`;

WrapStyled.propTypes = {
  shift: PropTypes.number.isRequired,
};

const ItemStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const ButtonStyled = styled.button`
  position: absolute;
  top: 50%;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background-color: rgba(256, 256, 256, 0.4);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px auto;
  transform: translateY(-50%);
  transition: 0.2s ease-out 0s;
  cursor: pointer;
  color: #111;
  ${({ variant }) => (variant === 'prev') && `
    left: 8px;
    background-image: url('/img/prev.svg');
  `}
  ${({ variant }) => (variant === 'next') && `
    right: 8px;
    background-image: url('/img/next.svg');
  `}
  ${({ variant, shift }) => (variant === 'prev') && (shift === 0) && 'display: none;'}
  ${({ variant, shift, length }) => (variant === 'next') && (shift === length - 1) && 'display: none;'}

  &:hover {
    background-color: rgba(256, 256, 256, 0.6);
  }
`;

ButtonStyled.propTypes = {
  variant: PropTypes.oneOf(['prev', 'next']).isRequired,
  shift: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

const Slider = ({ items = [] }) => {
  const [shift, setShift] = useState(0);

  const prev = () => (
    (shift > 0) && setShift((prevState) => prevState - 1)
  );

  const next = () => (
    (shift < (items.length - 1)) && setShift((prevState) => prevState + 1)
  );

  return (
    <SliderStyled>
      <WrapStyled shift={shift}>
        {items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemStyled key={index}>
            <ImageStyled src={item} />
          </ItemStyled>
        ))}
      </WrapStyled>
      <ButtonStyled
        variant="prev"
        shift={shift}
        length={items.length}
        onClick={() => prev()}
      />
      <ButtonStyled
        variant="next"
        shift={shift}
        length={items.length}
        onClick={() => next()}
      />
    </SliderStyled>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
