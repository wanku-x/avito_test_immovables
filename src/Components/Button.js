import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../Theme/Colors';

const Button = (props) => {
  const Tag = (
    props.tag === undefined ?
    'button' : props.tag
  );
  const color = props.color;
  const contained = props.contained;

  let newProps = { ...props };
  delete newProps.tag;
  delete newProps.color;
  delete newProps.contained;

  const ButtonDefault = css`
    background-color: transparent;
    color: ${
      colors[color] === undefined ?
      colors['primary'].main : colors[color].main
    };

    &:hover, &:focus {
      background-color: ${
        colors[color] === undefined ?
        colors['primary'].main : colors[color].main
      }11;
    }
  `;

  const ButtonContained = css`
    background-color: ${
      colors[color] === undefined ?
      colors['primary'].main : colors[color].main
    };
    color: ${
      colors[color] === undefined ?
      colors['primary'].contrastText : colors[color].contrastText
    };

    &:hover, &:focus {
      background-color: ${
        colors[color] === undefined ?
        colors['primary'].dark : colors[color].dark
      };
    }
  `;

  const ButtonStyled = styled(Tag)`
    display: inline-block;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    transition: 0.2s ease-out 0s;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    ${ contained ? ButtonContained : ButtonDefault };

    &:hover, &:focus {
      transition: 0.2s ease-out 0s;
    }
  `;

  return (
    <ButtonStyled {...newProps}>{ props.children }</ButtonStyled>
  );
};

export default Button;