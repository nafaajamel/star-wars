import styled from 'styled-components';
import { Row, Col } from 'antd';

const S = {};

S.Planet = styled(Col)`
  margin: 10px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 270px;
`;

S.Image = styled.img`
  max-height: 120px;
  max-width: 120px;
  border-radius: 50%;
`;

export default S;
