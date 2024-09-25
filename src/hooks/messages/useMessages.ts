import { AttendInputs } from '@/libraries/blocks';
import { apiAddNewMessage, apiGetMessages } from '@/utils/apis/messages';
import { useMessagesStore } from './store';
import { toastSuccess } from '@/configs';

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
    if (Object.keys(res as any).length > 0 && res !== null) {
      toastSuccess(
        '"Chân thành cảm ơn bạn đã gửi những lời chúc tốt đẹp nhất đến chúng tôi. Sự quan tâm và tình cảm quý báu của bạn là niềm động viên lớn cho chúng tôi trong hành trình mới này.'
      );
    }
    return res;
  };

  return {
    messages,
    loading,
    setMessages,
    getMessages
  };
}
