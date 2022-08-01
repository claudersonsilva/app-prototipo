import React from 'react';

import { Input, DivInput } from './styles';
import { TextInputProps } from 'react-native';
import  Ionicons  from '@expo/vector-icons/Ionicons';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  value?: string;
}

export function InputText({ icon, value, ...rest }: InputProps) {

  return (
    <DivInput >
        <Ionicons
          name={icon}
          size={24}
          color='#ccc'
        />

      <Input
        value={value}
        {...rest}
      />
    </DivInput>
  );
}