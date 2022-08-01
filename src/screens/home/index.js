import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, HeaderArea, BodyArea, Title, ButtonPrimaryText, Logo } from './styles';
import { ButtonPrimary } from '../../components/ButtonPrimary';


export default () => {
    const navigation = useNavigation();
    return (
        <Container>
            <HeaderArea>
                <Logo source={require('./../../../assets/icon.png')}></Logo>
            </HeaderArea>

            <BodyArea>
                <Title>O JEITO MAIS FÁCIL DE COMPRAR</Title>
                <ButtonPrimary onPress={() => navigation.navigate('NewOrderScreen')}>
                    <ButtonPrimaryText>INICIAR NOVA COMPRA</ButtonPrimaryText>
                </ButtonPrimary>
            </BodyArea>
        </Container>
    );
}