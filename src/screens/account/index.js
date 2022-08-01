import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, ButtonAtualizarDados, DivAtualizarDados, NomeClienteText, Text, DivMenuList, ItemButtonList, ItemMenuText } from '../account/styles';
import theme from '../../theme';

export default () => {
    const navigation = useNavigation();
    return (
        <Container>
            <ButtonAtualizarDados
                onPress={() => navigation.navigate('UpdateProfileScreen')}>
                <Ionicons name="md-person-circle-outline" size={48} color="gray" />
                <DivAtualizarDados>
                    <NomeClienteText>Olá, Fulano da Silva Sauro</NomeClienteText>
                    <Text>ATUALIZAR MEUS DADOS</Text>
                </DivAtualizarDados>
            </ButtonAtualizarDados>
            <DivMenuList>
                <ItemButtonList
                    onPress={() => navigation.navigate('OrderHistoryScreen')}>
                    <Ionicons name="receipt-outline" size={32} color={theme.COLORS.PRIMARY} />
                    <ItemMenuText>MEU HISTÓRICO DE PEDIDOS</ItemMenuText>
                </ItemButtonList>
                <ItemButtonList
                    onPress={() => navigation.navigate('PrivatePolicyScreen')}>
                    <Ionicons name="shield-outline" size={32} color={theme.COLORS.PRIMARY} />
                    <ItemMenuText>POLÍTICA DE PRIVACIDADE</ItemMenuText>
                </ItemButtonList>
                <ItemButtonList
                    onPress={() => navigation.navigate('HelpScreen')}>
                    <Ionicons name="md-help-circle-outline" size={32} color={theme.COLORS.PRIMARY} />
                    <ItemMenuText>AJUDA</ItemMenuText>
                </ItemButtonList>
            </DivMenuList>
        </Container>
    );
}