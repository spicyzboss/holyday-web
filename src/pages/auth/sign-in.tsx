import { Flex } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import ProviderButton from "@/components/auth/ProviderButton";
import { useSession } from "next-auth/react";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/router";
import BackToHomeButton from "@/components/BackToHomeButton";
import MainLayout from "@/layouts/MainLayout";

const SignInPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session) router.replace('/');

  if (status === 'loading' || session) return <HashLoader color='#ECC94B' speedMultiplier={1.25} />;
  
  return (
    <MainLayout>
      <Flex direction='column' gap='4' align='center'>
        <Flex direction='column' gap='4'>
          <ProviderButton provider='google' icon={<FcGoogle size='24' />} />
        </Flex>
        <BackToHomeButton />
      </Flex>
    </MainLayout>
  )
}

export default SignInPage;

