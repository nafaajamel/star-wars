import styled from 'styled-components';
import { Row, Typography, Menu } from 'antd';
const S = {};

S.Layout = styled(Row)`
  padding: 30px;
  background-color: #f2f2f2;
  min-height: 100vh;
  position: relative;
  font-size: ${({ theme }) => theme.font.defaultSize};
  font-family: ${({ theme }) => theme.font.family};
  font-style: normal;
`;

// typography

S.Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  text-transform: capitalize;
`;

S.Label = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
  color: #121c33;
  text-transform: uppercase;
  opacity: ${({ active }) => (active === true ? 1 : 0.6)};
`;

S.Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #777c8a;
`;
S.SubTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  text-transform: capitalize;
`;
// menu
S.Menu = styled(Menu)`
  border-bottom: none;
  background-color: inherit;
`;
S.Item = styled(Menu.Item)`
  // i know that using !important  is not recommanded but i use it here just beceause of time
  background-color: ${({ active }) =>
    active === true ? '#eaeaeb' : '#F2F2F2'} !important;
  &:hover,
  &:active {
    background-color: #eaeaeb !important;
  }
`;

export default S;
