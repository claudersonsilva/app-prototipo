import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 50px;
    justify-content: center;
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
    width: 192px;
    height: 192px;
`
export const Title1 = styled.Text`
    font-size: 25px;
    font-weight: 900;
    color: #000;
`
export const Title2 = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #666;
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
    font-size: 16px;
    color: #fff;
`