import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import requestGET from '../Requests';
import Card from '../Components/Card';
import Loader from '../Components/Loader';
import Main from '../Components/Main';
import notification from '../Components/notification';

const ColStyled = styled(Col)`
  padding-bottom: 32px;
`;

const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [immovables, setImmovables] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    requestGET('http://134.209.138.34/items/', { signal: abortController.signal })
      .then((res) => {
        setImmovables(res);
      })
      .catch(() => {
        notification('Ошибка соединения с сервером. Попробуйте позже.');
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Main>
      <Container>
        <Row>
          {immovables.map((item) => (
            <ColStyled sm={6} lg={4} key={item.id}>
              <Card
                id={item.id}
                address={item.address}
                title={item.title}
                previewImage={item.previewImage}
                price={item.price}
              />
            </ColStyled>
          ))}
        </Row>
      </Container>
      <Loader visible={loading} />
    </Main>
  );
};

export default ListPage;
