import { apiAddNewMessage, apiGetMessages } from '@/utils/apis/messages';
import { useMessagesStore } from './store';
import { useEffect } from 'react';
import { AttendInputs } from '@/libraries/blocks';

export default function useMessages() {
  const messages = useMessagesStore((state) => state.messages);
  const loading = useMessagesStore((state) => state.loading);
  const setMessagesFromStore = useMessagesStore((state) => state.setMessages);
  const getMessageFromStore = useMessagesStore((state) => state.getMessages);

  const getMessages = async () => {
    const res = await getMessageFromStore(apiGetMessages);
    return res;
  };

  const setMessages = async (body: AttendInputs) => {
    const res = await setMessagesFromStore(apiAddNewMessage, {
      content: body.message ?? 'Chúc hai bạn trăm năm hạnh phúc',
      author: body.name,
      guests: body.guests,
      isAttend: body.isAttend,
      createdAt: new Date()
    });
    return res;
  };

  return {
    messages,
    loading,
    setMessages,
    getMessages
  };
}
