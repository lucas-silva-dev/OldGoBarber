import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: darken(0.15, '#7159c1'),
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${darken(0.2, '#7159c1')};
`;
