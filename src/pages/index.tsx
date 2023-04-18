import MainLayout from '@/layouts/MainLayout'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { HashLoader } from 'react-spinners'

type Message = {
  Role: string;
  Content: string;
}

export default function Home() {
  const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';
  const [message, setMessage] = useState<string>('')
  const [responses, setResponses] = useState<Message[]>([])
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') return <HashLoader color='#ECC94B' speedMultiplier={1.25} />;

  if (!session) {
    router.replace('/auth/sign-in');
    return;
  }

  const handleSubmit = async () => {
    if (!message.trim()) return;

    const res = await fetch(`${BACKEND_URL}/api/plan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ messages: [...responses, { Role: 'user', Content: message.trim() }] })
    });

    setResponses((prev) => [...prev, { Role: 'user', Content: message.trim() }]);

    if (res.status !== 200) return console.log('error', res.statusText);

    const data = await res.json();

    console.log('data', data);

    setResponses((prev) => [...prev, { Role: 'assistant', Content: data.message }]);

    setMessage('');
  }

  return (
    <MainLayout withSessionBar>
      <Flex direction='column' w='full' align='center' gap='4' p='4' maxW='8xl'>
        {
          responses.map((response, index) => (
            <Text as='pre' key={index}>{response.Content}</Text>
          ))
        }
        <Input w='full' placeholder='Let&apos;s say your plan...' value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </MainLayout>
  )
}
