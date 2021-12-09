import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Flex, Button, Stack } from '@chakra-ui/react';
import Input from './components/Form/Input';

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>
        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
