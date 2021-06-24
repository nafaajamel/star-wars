import styled from 'styled-components';
import { Col, Row } from 'antd';

const S = {};

S.Sider = styled(Col)`
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 20px;
  background-color: #fff;
`;
S.Header = styled(Row)`
  width: 100%;
  height: 50px;
`;
S.Button = styled.span`
  border-radius: 5px;
  background-color: #afb0b3;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.Card = styled(Row)`
  padding: 3px;
  height: 66px;
  & {
    img {
      height: 60px;
      width: 60px;
    }
  }
`;

export default S;
