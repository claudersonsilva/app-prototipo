import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 10px;
`;
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;