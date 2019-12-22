import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { requestGET } from '../Requests';
import styled from 'styled-components';
import Paragraph from '../Components/Paragraph';
import Title from '../Components/Title';
import Loader from '../Components/Loader';


const MainStyled = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const ImageStyled = styled.img`
  width: 100%;
  margin-bottom: 16px;
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
            {(item.images !== undefined) && item.images.map((image, index) => (
              <ImageStyled key={index} src={image} />
            ))}
          </Col>
        </Row>
      </Container>
      <Loader visible={loading} />
    </MainStyled>
  )
};

export default ItemPage;