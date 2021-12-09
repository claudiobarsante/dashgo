import React from 'react';
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

type InputProps = {
  name: string;
  label?: string;
} & ChakraInputProps;

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
