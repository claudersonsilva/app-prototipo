import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
`;
export const ButtonText = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(2)}px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    color: ${({theme}) => theme.COLORS.TEXT_BRAND};
`