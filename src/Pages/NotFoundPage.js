import React from 'react';
import { Container } from 'react-grid-system';
import { Title } from '../Components/Typo';
import Main from '../Components/Main';

const NotFoundPage = () => (
  <Main>
    <Container>
      <Title>Страница не найдена :(</Title>
    </Container>
  </Main>
);

export default NotFoundPage;
