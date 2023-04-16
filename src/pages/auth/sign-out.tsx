import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import MainLayout from "@/layouts/MainLayout";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { HashLoader } from 'react-spinners';

const SignOutPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
  }

  if (status === 'loading') return <HashLoader color='#ECC94B' speedMultiplier={1.25} />;

  if (!session) {
    router.replace('/');
    return;
  }

  return (
    <MainLayout>
      <Flex direction='column' align='center' gap='4'>
        <Avatar name={session.user.name} src={session.user.image} loading='lazy' size='xl' />
        <Text as='b'>{session.user.name}</Text>
        <Button onClick={handleSignOut}>Sign out</Button>
      </Flex>
    </MainLayout>
  )
};

export default SignOutPage;

