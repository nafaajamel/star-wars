import { useState, useContext } from 'react';

import { Row, Col } from 'antd';
import Sider from './../sider/index';
import { Link, useLocation } from 'react-router-dom';
import { selectionContext } from '../../context/selection';
import S from './styles';

const { Title, Label, Menu, Item } = S;

const Layout = ({ children }) => {
  const { selection } = useContext(selectionContext);

  const hasSider = !!selection;
  const location = useLocation();
  const items = [
    { route: '/planets', text: 'planets' },
    {
      route: '/characters',
      text: 'characters',
    },
  ];
  return (
    <S.Layout>
      <Col xs={hasSider ? 18 : 24}>
        <Title>spacious</Title>
        <Menu theme='light' mode='horizontal'>
          {items.map(({ route, text }) => {
            return (
              <Item key={text} active={location.pathname === route}>
                <Link to={route}>
                  <Label> {text}</Label>
                </Link>
              </Item>
            );
          })}
        </Menu>

        {children}
      </Col>
      {hasSider ? <Sider /> : null}
    </S.Layout>
  );
};

export default Layout;
