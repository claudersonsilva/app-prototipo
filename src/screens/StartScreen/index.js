import React from 'react';

import { Container, HeaderArea, BodyArea, FooterArea, ButtonPrimary, Title1, Title2, ButtonPrimaryText, Logo } from './styles';

export default () => {
    return (
        <Container>
            <HeaderArea>
                <Logo source={require('./../../../assets/logo_size.jpg')}></Logo>
            </HeaderArea>

            <BodyArea>
                <Title1>Vamos as compras</Title1>
                <Title2>Como deseja proceder?</Title2>
                <ButtonPrimary>
                    <ButtonPrimaryText>RECEBER EM CASA</ButtonPrimaryText>
                </ButtonPrimary>
                <ButtonPrimary>
                    <ButtonPrimaryText>RETIRAR NO ESTABELECIMENTO</ButtonPrimaryText>
                </ButtonPrimary>
            </BodyArea>


        </Container>
    );
}