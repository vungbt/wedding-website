import { MessageItem } from '@/types/message';

const ApiName = {
  Messages: '/api/messages'
};
export const apiGetMessages = async () => {
  const stores: { data: MessageItem[] } = await fetch(ApiName.Messages).then((response) =>
    response.json()
  );
  return stores;
};

export const apiAddNewMessage = async (body: MessageItem) => {
  const response = await fetch(ApiName.Messages, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  });
  const res = await response.json();
  return res;
};
