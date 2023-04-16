import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SessionBar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const signIn = () => router.push('/auth/sign-in');

  return (
    <Flex
      position='fixed'
      top='4'
      right='4'
      rounded='lg'
    >
      {
        !session ? (
          <Button colorScheme='yellow' onClick={signIn}>
            Sign in
          </Button>
        ) : (
          <Menu>
            <MenuButton role='group'>
              <Flex align='center' gap='4'>
                <Text as='b'>{session.user.name}</Text>
                <Avatar _groupFocus={{ boxShadow: 'outline' }} name={session.user.name} src={session.user.image} loading='lazy' />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        )
      }
    </Flex>
  );
};

export default SessionBar;

