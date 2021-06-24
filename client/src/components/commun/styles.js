import styled from 'styled-components';

const S = {};

S.AddButton = styled.button`
  background-color: black;
  border-radius: 100%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  border: none;
  cursor: pointer;
  * {
    display: inline;
  }
`;

S.Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #121c33;
  display: block;
`;
S.Detail = styled.span`
  font-size: 12px;
  color: #777c8a;
  display: block;
`;

export default S;
