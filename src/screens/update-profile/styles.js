import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 10px 15px;
`
export const Title = styled.Text`
    font-size: ${RFPercentage(2.3)}px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    margin-top: 20px;
    margin-bottom: 20px;
`
export const ButtonText = styled.Text`
    font-size: ${RFPercentage(2.3)}px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    margin-top: 20px;
`