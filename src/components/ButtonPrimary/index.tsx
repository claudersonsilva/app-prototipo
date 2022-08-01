import React, { Component } from 'react'

import { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button, ButtonText } from './styles';


export function ButtonPrimary({ ...rest }: TouchableOpacityProps) {
    return (
        <Button {...rest} />
    );
}
