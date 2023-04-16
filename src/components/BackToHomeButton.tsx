import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const BackToHomeButton = () => {
  const router = useRouter();
  
  const backToHome = () => router.replace('/');

  return <Button colorScheme='yellow' variant='link' onClick={backToHome}>Back to Home</Button>
}

export default BackToHomeButton;

