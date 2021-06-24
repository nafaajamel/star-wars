import { useContext, useEffect } from 'react';

import { Row, Col } from 'antd';
import { selectionContext } from '../../context/selection';
import S from './styles';
import Styles from './../commun/styles';

const { Image } = S;
const { Name, Detail } = Styles;

const Planet = ({ planet }) => {
  const { select } = useContext(selectionContext);
  const { id, name, population, pictureUrl } = planet;
  const selectPlanet = () => {
    select(planet, 'planet');
  };
  return (
    <S.Planet xs={12} md={5} onClick={selectPlanet}>
      <Row justify='center' align='bottom'>
        <Image alt={name} src={pictureUrl} />
      </Row>
      <Row>
        <Name>{name} </Name>
      </Row>
      <Row>
        <Detail>Pop : {population}</Detail>
      </Row>
    </S.Planet>
  );
};

export default Planet;
