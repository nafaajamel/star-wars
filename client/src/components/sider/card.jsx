import { Col } from 'antd';
import S from './styles';
import Styles from './../commun/styles';

const { Name, Detail } = Styles;
const Card = ({ pictureUrl, name, friends }) => {
  return (
    <S.Card justify='space-between' align='middle'>
      <Col xs={4}>
        <img alt={name} src={pictureUrl} />
      </Col>
      <Col xs={18}>
        <Name>{name}</Name>
        <Detail>{friends.length} friends</Detail>
      </Col>
    </S.Card>
  );
};

export default Card;
