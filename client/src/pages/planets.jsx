import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';

import { FETCH_PLANETS, FETCH_CHARACTERS } from '../apollo/queries';

import Planet from './../components/planet/planet';
import AddButton from '../components/commun/add-button';
import planetLoader from './../assets/planet-loader.svg';

const Loading = () => {
  return (
    <Row justify='center'>
      <Col>
        <img alt='loading' src={planetLoader} />
      </Col>
    </Row>
  );
};

const Error = () => {
  return (
    <Row justify='center'>
      <Col>
        <Typography.Text type='danger'>oups !</Typography.Text>
      </Col>
    </Row>
  );
};

const PlanetsPage = () => {
  const { loading, error, data } = useQuery(FETCH_PLANETS);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Row>
      {data.planets.nodes.map((planet) => {
        return <Planet key={planet.id} planet={planet} />;
      })}
      <AddButton />
    </Row>
  );
};

export default PlanetsPage;
