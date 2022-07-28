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
                <Title1>ESCOLHA COMO CONTINUAR</Title1>
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