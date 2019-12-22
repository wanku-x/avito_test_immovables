import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import requestGET from '../Requests';
import Card from '../Components/Card';
import Loader from '../Components/Loader';


const MainStyled = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const ColStyled = styled(Col)`
  padding-bottom: 32px;
`;

const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [immovables, setImmovables] = useState([]);

  useEffect(() => {
    requestGET('http://134.209.138.34/items/').then((res) => {
      setImmovables(res);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  });

  return (
    <MainStyled>
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
    </MainStyled>
  );
};

export default ListPage;
