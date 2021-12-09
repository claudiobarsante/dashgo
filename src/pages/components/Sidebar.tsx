import {
  Avatar,
  Flex,
  Button,
  Stack,
  Text,
  Input,
  Icon,
  Link,
  Box
} from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri';
export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box fontWeight="bold" color="gray.400" fontSize="small">
          GERAL
        </Box>
        <Stack spacing="4" mt="8" align="strech">
          <Link display="flex" align="center">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Dashboard
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Users
            </Text>
          </Link>
        </Stack>
        <Box fontWeight="bold" color="gray.400" fontSize="small">
          AUTOMATION
        </Box>
        <Stack spacing="4" mt="8" align="strech">
          <Link display="flex" align="center">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Forms
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Automation
            </Text>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
