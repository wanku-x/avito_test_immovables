import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { requestGET } from '../Requests';
import styled from 'styled-components';
import Paragraph from '../Components/Paragraph';
import Title from '../Components/Title';
import Loader from '../Components/Loader';
import Slider from '../Components/Slider';


const MainStyled = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const ItemPage = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    requestGET(`http://134.209.138.34/item/${id}/`).then((res) => {
      setItem(res[0]);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  });

  return (
    <MainStyled>
      <Container>
        <Title>{item.title}</Title>
        <Row>
          <Col lg={6}>
            <Paragraph>{item.description}</Paragraph>
          </Col>
          <Col lg={6}>
            <Slider items={item.images} />
          </Col>
        </Row>
      </Container>
      <Loader visible={loading} />
    </MainStyled>
  )
};

export default ItemPage;