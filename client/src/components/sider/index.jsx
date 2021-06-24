import { useContext, useCallback } from 'react';
import { Row, Col } from 'antd';
import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS } from '../../apollo/queries';
import { selectionContext } from '../../context/selection';
import Styles from '../layout/styles';
import S from './styles';

import Card from './card.jsx';

const { Text, SubTitle } = Styles;

const RenderCharacter = (id) => {
  const { loading, error, data } = useQuery(FETCH_CHARACTERS, {
    variables: {
      planet: Number(id),
    },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return data.characters.nodes.map((character) => {
    return <Card key={character.id} {...character} />;
  });
};

const Sider = () => {
  const { clean, selection } = useContext(selectionContext);

  return (
    <S.Sider xs={24} md={12} lg={6}>
      <S.Header justify='end'>
        <S.Button onClick={clean}>X</S.Button>
      </S.Header>
      <Row>
        <Row>
          <Col xs={24}>
            <SubTitle>{selection.name}</SubTitle>
          </Col>
        </Row>
        <Col xs={24}>
          <Text>{selection.description}</Text>
        </Col>
      </Row>

      {selection.type === 'planet' && (
        <>
          <Row>
            <Text>
              <Col xs={24}> Population</Col>
              <b>{selection.population}</b>
            </Text>
          </Row>
          <Row>
            <Col xs={24}>
              <Row justify='space-between'>
                <Col>
                  <Text>CHARACTERS</Text>
                </Col>
                <Col>
                  <S.Button>+</S.Button>
                </Col>
              </Row>
              {RenderCharacter(selection.id)}
            </Col>
          </Row>
        </>
      )}
    </S.Sider>
  );
};

export default Sider;
