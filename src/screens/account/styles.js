import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 10px;
`
export const ButtonAtualizarDados = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const DivAtualizarDados = styled.View`
    justify-content: center;
    margin-left: 10px;
`
export const NomeClienteText = styled.Text`
    font-size: 20px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
`
export const Text = styled.Text`
    font-size: 12px;
    font-family: ${({theme}) => theme.FONTS.REGULAR};
`
export const DivMenuList = styled.View`
    justify-content: center;
    margin-top: 20px;
`
export const ItemButtonList = styled.TouchableOpacity`
    width: 100%;
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.PRIMARY};
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
`
export const ItemMenuText = styled.Text`
    color: ${({theme}) => theme.COLORS.PRIMARY};
    margin-left: 10px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
`