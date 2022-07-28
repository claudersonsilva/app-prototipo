import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, ButtonAtualizarDados, DivAtualizarDados, NomeClienteText, Text, DivMenuList, ItemButtonList, ItemMenuText} from '../account/styles';
import colors from './../../global-styles/colors';

export default () => {
    return (
        <Container>
            <ButtonAtualizarDados>
                <Ionicons name="md-person-circle-outline" size={48} color="gray" />
                <DivAtualizarDados>
                    <NomeClienteText>Olá, Fulano da Silva Sauro</NomeClienteText>
                    <Text>ATUALIZAR MEUS DADOS</Text>
                </DivAtualizarDados>
            </ButtonAtualizarDados>

            

            <DivMenuList>
                    <ItemButtonList>
                        <Ionicons name="receipt-outline" size={32} color={colors.primary} />
                        <ItemMenuText>MEU HISTÓRICO DE PEDIDOS</ItemMenuText>
                    </ItemButtonList>
                    <ItemButtonList>
                        <Ionicons name="shield-outline" size={32} color={colors.primary} />
                        <ItemMenuText>POLÍTICA DE PRIVACIDADE</ItemMenuText>
                    </ItemButtonList>
                    <ItemButtonList>
                        <Ionicons name="md-help-circle-outline" size={32} color={colors.primary} /> 
                        <ItemMenuText>AJUDA</ItemMenuText>
                    </ItemButtonList>
            </DivMenuList>
        </Container>
    );
}