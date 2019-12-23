import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import requestGET from '../Requests';
import {
  Title,
  Paragraph,
  Subtitle,
  Price,
} from '../Components/Typo';
import Loader from '../Components/Loader';
import Slider from '../Components/Slider';
import Main from '../Components/Main';
import notification from '../Components/notification';

const InfoStyled = styled.div`
  padding-top: 16px;
  padding-bottom: 32px;
`;

const ItemPage = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    requestGET(`http://134.209.138.34/item/${id}/`, { signal: abortController.signal })
      .then((res) => {
        setItem(res[0]);
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
  }, [id]);

  return (
    <Main>
      <Container>
        <Title>{item.title}</Title>
        <Row>
          <Col lg={6}>
            <Slider items={item.images} />
            <InfoStyled>
              <Subtitle>{item.sellerName}</Subtitle>
              <Paragraph>{item.address}</Paragraph>
              <Price>{item.price}</Price>
            </InfoStyled>
          </Col>
          <Col lg={6}>
            <Paragraph>{item.description}</Paragraph>
          </Col>
        </Row>
      </Container>
      <Loader visible={loading} />
    </Main>
  );
};

export default ItemPage;
