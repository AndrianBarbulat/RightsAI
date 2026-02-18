import Head from 'next/head';
import ChatPage from '../components/chat/LegalResponse';

export default function Chat() {
  return (
    <>
      <Head>
        <title>Chat — RightsAI</title>
      </Head>
      <ChatPage />
    </>
  );
}