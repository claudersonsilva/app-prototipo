import React from 'react';

import { Container } from '../../global-styles/styles';
import { HeaderArea, BodyArea, FooterArea, ButtonPrimary, Title1, Title2, ButtonPrimaryText, Logo } from './styles';

export default () => {
    return (
        <Container>
            <HeaderArea>
                <Logo source={require('./../../../assets/icon.png')}></Logo>
            </HeaderArea>

            <BodyArea>
                <Title1>O JEITO MAIS FÁCIL DE COMPRAR</Title1>
                <ButtonPrimary>
                    <ButtonPrimaryText>INICIAR NOVA COMPRA</ButtonPrimaryText>
                </ButtonPrimary>
            </BodyArea>


        </Container>
    );
}