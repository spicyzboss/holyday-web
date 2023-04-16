import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { capitalize } from "@/libs/capitalize";

type ProviderButtonProps = {
  provider: string;
  icon: JSX.Element;
}

const ProviderButton = (props: ProviderButtonProps) => {
  const { provider, icon } = props;

  return (
   <Button
      onClick={() => signIn(provider)}
      leftIcon={icon}
      variant='outline'
      size='lg'
      width='full'
      display='flex'
      justifyContent='start'
    >
      Continue with {capitalize(provider)}
    </Button>
  )
};

export default ProviderButton;

