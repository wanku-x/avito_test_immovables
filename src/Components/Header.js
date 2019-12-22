import React from 'react';
import { Container } from 'react-grid-system';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const HeaderStyled = styled.header`
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
`;

const WrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
`;

const LogoStyled = styled.img`
  height: 40px;
  transform: translateX(-4.6%);
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: 0;
`;

const Header = () => (
  <HeaderStyled>
    <Container>
      <WrapStyled>
        <LinkStyled to="/">
          <LogoStyled src="/img/logo.svg" alt="Авито.Недвижимость" />
        </LinkStyled>
        <Button as="a" href="https://github.com/wanku-x/avito_test_immovables">GitHub</Button>
      </WrapStyled>
    </Container>
  </HeaderStyled>
);

export default Header;
