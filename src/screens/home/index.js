import React from 'react';

import { Container, HeaderArea, BodyArea, ButtonPrimary, Title, ButtonPrimaryText, Logo } from './styles';

export default () => {
    return (
        <Container>
            <HeaderArea>
                <Logo source={require('./../../../assets/icon.png')}></Logo>
            </HeaderArea>

            <BodyArea>
                <Title>O JEITO MAIS FÁCIL DE COMPRAR</Title>
                <ButtonPrimary>
                    <ButtonPrimaryText>INICIAR NOVA COMPRA</ButtonPrimaryText>
                </ButtonPrimary>
            </BodyArea>


        </Container>
    );
}