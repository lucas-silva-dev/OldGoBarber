import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: #fffb;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  align-self: stretch;
`;
