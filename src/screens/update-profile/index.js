import React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Keyboard, Text } from 'react-native';
import { InputText } from '../../components/InputText';
import { ButtonPrimary } from './../../components/ButtonPrimary';

import { Container, Title } from '../update-profile/styles';
import { ButtonPrimaryText } from '../home/styles';

export default () => {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <>
                        <Title>DADOS PESSOAIS</Title>
                        <InputText
                            icon="person"
                            placeholder="NOME COMPLETO"
                            autoCapitalize='words'
                        />
                        <InputText
                            icon="card"
                            placeholder="CPF"
                            keyboardType='number-pad'
                        />
                        <InputText
                            icon="calendar"
                            placeholder="DATA DE NASCIMENTO"
                            keyboardType='number-pad'
                        />
                        <InputText
                            icon="mail"
                            placeholder="E-MAIL"
                            keyboardType="email-address"
                            autoCapitalize='none'
                        />
                        <InputText
                            icon="phone-portrait"
                            placeholder="CELULAR"
                            keyboardType="phone-pad"
                        />
                        <InputText
                            icon="call"
                            placeholder="TELEFONE"
                            keyboardType="phone-pad"
                        />

                        <ButtonPrimary>
                            <ButtonPrimaryText>SALVAR DADOS</ButtonPrimaryText>
                        </ButtonPrimary>
                    </>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}