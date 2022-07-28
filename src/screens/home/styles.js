import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    padding: 50px;
    justify-content: space-around;
`
export const HeaderArea  =styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`
export const BodyArea  =styled.View`
    width: 100%;
    justify-content: center;
`
export const FooterArea  =styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`
export const Logo = styled.Image`
    width: 160px;
    height: 160px;
`
export const Title1 = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`
export const Title2 = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`
export const ButtonPrimary = styled.TouchableOpacity`
    background-color: #f05742;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
`
export const ButtonPrimaryText = styled.Text`
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
`