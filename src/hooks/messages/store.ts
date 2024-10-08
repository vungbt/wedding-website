import { MessageItem } from '@/types/message';
import { create } from 'zustand';

interface MessagesState {
  messages: MessageItem[];
  loading: boolean;
  setMessages: (
    apiClient: (body: MessageItem) => Promise<MessageItem | null>,
    body: MessageItem
  ) => void;
  clear: () => void;
  getMessages: (
    apiClient: () => Promise<{ data: MessageItem[] }>
  ) => Promise<{ data: MessageItem[] }>;
}

export const useMessagesStore = create<MessagesState>((set, get) => ({
  messages: [],
  loading: false,
  setMessages: async (apiClient, body: MessageItem) => {
    set({ loading: true });
    const res = await apiClient(body);
    set({ loading: false });
    if (res) {
      const states = get();
      const newMessages = states?.messages ?? [];
      if (res) {
        newMessages.push(res);
      }
      set({ messages: newMessages });
    }
    return res;
  },
  getMessages: async (apiClient) => {
    set({ loading: true });
    const res = await apiClient();
    set({ loading: false });
    if (res) {
      set({ messages: res.data });
    }
    return res;
  },
  clear: () => set({ messages: [] })
}));
