import React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { InputText } from '../../components/InputText';

import { Container, Title } from '../update-profile/styles';

export default () => {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <>
                        <Title>DADOS PESSOAIS</Title>
                        <InputText
                            icon="add"
                            placeholder="Nome"
                        />
                        <InputText
                            icon="add"
                            placeholder="CPF"
                        />
                        <InputText
                            icon="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize='none'
                        />
                    </>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}