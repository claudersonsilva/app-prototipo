import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 50px;
    justify-content: space-around;
`
export const HeaderArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`
export const BodyArea = styled.View`
    width: 100%;
    justify-content: center;
`
export const Logo = styled.Image`
    width: 160px;
    height: 160px;
`
export const Title = styled.Text`
    font-size: ${RFPercentage(2.3)}px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    text-align: center;
    color: ${({theme}) => theme.COLORS.TEXT};
`
export const ButtonPrimary = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
`
export const ButtonPrimaryText = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(2)}px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    color: ${({theme}) => theme.COLORS.TEXT_BRAND};
`