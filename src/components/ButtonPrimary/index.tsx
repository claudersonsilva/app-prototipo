import React, { Component } from 'react'

import { TouchableOpacityProps } from 'react-native';
import { Button } from './styles';


export function ButtonPrimary({ ...rest }: TouchableOpacityProps) {
    return (
        <Button {...rest} />
    );
}
