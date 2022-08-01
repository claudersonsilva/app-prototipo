import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Input = styled.TextInput`
  margin-left: 10px;
  width: 90%;
  height: 50px;
  font-size: ${RFPercentage(2)}px;
`;
export const DivInput = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%; 
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  margin-top: 5px;
  padding: 0 10px;
  height: 50px;
`;